"use client";

import { useEffect, useState } from "react";
import { apiUrl } from "@/lib/config/api";
import {
  buildJobApplyMailto,
  excerptJobDescription,
  parsePublicJobsPayload,
  type PublicJob,
} from "@/lib/jobs/public-jobs";

function JobListingsSkeleton() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2" aria-hidden>
      {Array.from({ length: 4 }).map((_, i) => (
        <li
          key={i}
          className="animate-pulse rounded-sm border border-zinc-200 bg-white p-5"
        >
          <div className="h-5 w-3/4 rounded-sm bg-zinc-200" />
          <div className="mt-3 h-4 w-1/3 rounded-sm bg-zinc-100" />
          <div className="mt-4 space-y-2">
            <div className="h-3 w-full rounded-sm bg-zinc-100" />
            <div className="h-3 w-full rounded-sm bg-zinc-100" />
            <div className="h-3 w-2/3 rounded-sm bg-zinc-100" />
          </div>
          <div className="mt-5 h-10 w-36 rounded-sm bg-zinc-200" />
        </li>
      ))}
    </ul>
  );
}

type FetchState =
  | { status: "loading" }
  | { status: "empty" }
  | { status: "error"; message: string }
  | { status: "success"; jobs: PublicJob[] };

export function JobListings() {
  const [state, setState] = useState<FetchState>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const base = process.env.NEXT_PUBLIC_API_URL?.trim();
      if (!base) {
        if (!cancelled) {
          setState({
            status: "error",
            message:
              "Stellenportal ist noch nicht konfiguriert (NEXT_PUBLIC_API_URL fehlt).",
          });
        }
        return;
      }

      try {
        const response = await fetch(apiUrl("/jobs/public"), {
          method: "GET",
          headers: { Accept: "application/json" },
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`API antwortete mit Status ${response.status}`);
        }

        const data: unknown = await response.json();
        const jobs = parsePublicJobsPayload(data);

        if (cancelled) return;
        setState(
          jobs.length > 0 ? { status: "success", jobs } : { status: "empty" },
        );
      } catch (err) {
        if (cancelled) return;
        const message =
          err instanceof Error
            ? err.message
            : "Stellen konnten nicht geladen werden.";
        setState({ status: "error", message });
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (state.status === "loading") {
    return (
      <div aria-busy="true" aria-live="polite">
        <p className="sr-only">Stellen werden geladen…</p>
        <JobListingsSkeleton />
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <p className="rounded-sm border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-muted">
        {state.message}
      </p>
    );
  }

  if (state.status === "empty") {
    return (
      <p className="rounded-sm border border-zinc-200 bg-zinc-50 px-4 py-6 text-center text-sm text-muted sm:text-base">
        Aktuell keine offenen Stellen.
      </p>
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {state.jobs.map((job) => (
        <li
          key={job.id}
          className="flex flex-col rounded-sm border border-zinc-200 bg-white p-5 transition hover:border-primary/40"
        >
          <h3 className="text-lg font-bold text-foreground">{job.title}</h3>
          {job.location ? (
            <p className="mt-1 text-sm font-semibold text-secondary">
              {job.location}
            </p>
          ) : null}
          {job.description ? (
            <p className="mt-3 flex-1 text-sm leading-6 text-muted">
              {excerptJobDescription(job.description)}
            </p>
          ) : (
            <p className="mt-3 flex-1 text-sm leading-6 text-muted">
              Werden Sie Teil unseres Teams in der Zollernalb — Details besprechen
              wir gerne persönlich.
            </p>
          )}
          <a
            href={buildJobApplyMailto(job.title)}
            className="mt-5 inline-flex h-10 w-full items-center justify-center rounded-sm bg-primary text-sm font-bold text-primary-foreground transition hover:bg-primary/90 sm:w-auto sm:px-5"
          >
            Jetzt bewerben
          </a>
        </li>
      ))}
    </ul>
  );
}

"use client";

import { useEffect, useState } from "react";
import { getPlatformLoginUrl } from "@/lib/config/platform";

type Props = {
  className?: string;
  onNavigate?: () => void;
};

const baseClass =
  "inline-flex items-center justify-center rounded-sm border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300";

export function ClientLoginButton({ className = "", onNavigate }: Props) {
  const [loginUrl, setLoginUrl] = useState(getPlatformLoginUrl);

  useEffect(() => {
    setLoginUrl(getPlatformLoginUrl());
  }, []);

  return (
    <a
      href={loginUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClass} ${className}`}
      onClick={onNavigate}
    >
      Kunden-Login
    </a>
  );
}

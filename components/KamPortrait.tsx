import { KAM_PROFILE } from "@/lib/seo/kam-profile";

type Props = {
  className?: string;
};

function UserAvatarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function KamPortrait({ className = "" }: Props) {
  return (
    <div
      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-sm bg-zinc-800 text-zinc-400 ${className}`}
      role="img"
      aria-label={KAM_PROFILE.portraitAlt}
    >
      <UserAvatarIcon className="h-8 w-8" />
    </div>
  );
}

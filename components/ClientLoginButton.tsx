"use client";

import { useEffect, useState } from "react";
import { getPlatformLoginUrl } from "@/lib/config/platform";

type Props = {
  className?: string;
  onNavigate?: () => void;
};

const baseClass =
  "inline-flex items-center justify-center rounded-sm border border-blue-600 px-3 text-sm font-bold text-blue-600 transition hover:bg-blue-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";

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

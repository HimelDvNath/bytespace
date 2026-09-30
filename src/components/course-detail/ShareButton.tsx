"use client";

import { useEffect, useState } from "react";
import { ShareIcon } from "@/components/icons";

type ShareStatus = "idle" | "copied" | "failed";

export function ShareButton({ title }: { title: string }) {
  const [status, setStatus] = useState<ShareStatus>("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timeout = window.setTimeout(() => setStatus("idle"), 2500);
    return () => window.clearTimeout(timeout);
  }, [status]);

  async function handleShare() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // The user dismissed the native share sheet.
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }

  const label = status === "copied" ? "Link copied" : status === "failed" ? "Copy failed" : "Share";

  return (
    <button
      type="button"
      onClick={handleShare}
      className="flex h-10 shrink-0 items-center gap-2 self-start rounded-3xl bg-secondary-400 px-6 text-label-m leading-6 font-medium text-neutral-950 transition-colors hover:bg-secondary-300"
    >
      <ShareIcon className="size-6" />
      <span aria-live="polite">{label}</span>
    </button>
  );
}

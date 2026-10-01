"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

interface CreatorStatsProps {
  creatorName: string;
  products: number;
  followers: number;
}

const pillStyles =
  "flex h-11.5 items-center gap-2 rounded-3xl bg-white px-6 text-label-l font-medium text-neutral-950";

export function CreatorStats({ creatorName, products, followers }: CreatorStatsProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  const followerCount = followers + (isFollowing ? 1 : 0);

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <ul className="flex flex-wrap gap-4">
        <li className={pillStyles}>
          <span className="text-primary-800">{products}</span> Products
        </li>
        <li className={pillStyles}>
          <span className="text-primary-800" aria-live="polite">
            {followerCount}
          </span>{" "}
          Followers
        </li>
      </ul>
      <button
        type="button"
        aria-pressed={isFollowing}
        aria-label={isFollowing ? `Unfollow ${creatorName}` : `Follow ${creatorName}`}
        onClick={() => setIsFollowing((following) => !following)}
        className={cn(
          "h-11.5 rounded-3xl px-6 text-label-l font-medium transition-colors",
          isFollowing
            ? "border border-white/60 text-neutral-50 hover:bg-white/10"
            : "bg-secondary-400 text-ink hover:bg-secondary-300",
        )}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
}

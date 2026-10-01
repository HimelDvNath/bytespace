"use client";

import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@/components/icons";
import { cn } from "@/lib/cn";
import type { CourseReview, StarRating } from "@/types";
import { StarRow } from "./StarRow";

const ratingFilters: Array<StarRating | "all"> = ["all", 5, 4, 3, 2, 1];

export function ReviewList({ reviews }: { reviews: CourseReview[] }) {
  const [filter, setFilter] = useState<StarRating | "all">("all");
  const visible = filter === "all" ? reviews : reviews.filter((review) => review.rating === filter);

  return (
    <>
      <div role="group" aria-label="Filter reviews by rating" className="flex flex-wrap gap-3 sm:gap-4">
        {ratingFilters.map((value) => {
          const isActive = value === filter;
          return (
            <button
              key={value}
              type="button"
              aria-pressed={isActive}
              aria-label={value === "all" ? "All ratings" : `${value} star reviews`}
              onClick={() => setFilter(value)}
              className={cn(
                "flex h-12 items-center gap-1 rounded-3xl px-4 text-label-m font-medium transition-colors",
                isActive
                  ? "bg-secondary-400 text-neutral-950"
                  : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950",
              )}
            >
              {value === "all" ? (
                "All rating"
              ) : (
                <>
                  <StarIcon className="size-6" />
                  {value}
                </>
              )}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        {visible.length === 1 ? "1 review shown" : `${visible.length} reviews shown`}
      </p>

      {visible.length > 0 ? (
        <ul className="flex flex-col gap-6">
          {visible.map((review) => (
            <li key={review.id}>
              <article className="flex flex-col gap-6 rounded-3xl border border-neutral-200 p-6 sm:p-10">
                <header className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <Image
                        src={review.avatar}
                        alt=""
                        width={52}
                        height={52}
                        sizes="52px"
                        className="size-13 shrink-0 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-label-l font-medium text-neutral-950">{review.name}</h3>
                        <p className="text-body-m text-neutral-700">{review.role}</p>
                      </div>
                    </div>
                    <StarRow rating={review.rating} />
                  </div>
                  <p className="shrink-0 text-body-m text-neutral-700">{review.postedAgo}</p>
                </header>
                <p className="text-body-m text-neutral-700">{review.text}</p>
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <p className="rounded-3xl border border-dashed border-neutral-200 px-6 py-10 text-center text-body-m text-neutral-500">
          No {filter}-star reviews yet.
        </p>
      )}
    </>
  );
}

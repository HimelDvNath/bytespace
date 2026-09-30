import Image from "next/image";
import Link from "next/link";
import type { Creator } from "@/types";

export function CreatorResults({ creators, query }: { creators: Creator[]; query: string }) {
  if (creators.length === 0) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center gap-3 rounded-3xl border border-dashed border-neutral-200 px-6 py-12 text-center">
        <p className="font-display text-heading-xs font-semibold text-neutral-950">No creators found</p>
        <p className="text-body-m text-neutral-500">
          We couldn’t find a creator matching “{query}”. Try another name or topic.
        </p>
      </div>
    );
  }

  return (
    <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
      {creators.map((creator) => (
        <li key={creator.slug}>
          <Link
            href={`/creators/${creator.slug}`}
            className="flex items-center gap-4 rounded-3xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-[0_16px_40px_rgb(36_37_40/0.1)]"
          >
            <Image
              src={creator.avatar}
              alt=""
              width={72}
              height={72}
              sizes="72px"
              className="size-18 shrink-0 rounded-2xl object-cover"
            />
            <span className="flex flex-col">
              <span className="font-display text-heading-xs font-semibold text-neutral-950">
                {creator.name}
              </span>
              <span className="text-body-m text-neutral-700">{creator.headline}</span>
              <span className="mt-1 text-label-s font-medium text-primary-800">View profile</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

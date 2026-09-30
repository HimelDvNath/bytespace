"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

export function CourseTabs({ courseId }: { courseId: string }) {
  const pathname = usePathname();
  const base = `/courses/${courseId}`;
  const tabs = [
    { label: "About", href: base },
    { label: "Lessons", href: `${base}/lessons` },
    { label: "Reviews", href: `${base}/reviews` },
  ];

  return (
    <nav aria-label="Course sections">
      <ul className="flex flex-wrap gap-4">
        {tabs.map((tab) => {
          const isCurrent = pathname === tab.href;
          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                scroll={false}
                aria-current={isCurrent ? "page" : undefined}
                className={cn(
                  "block rounded-3xl px-4 py-3 text-label-m font-medium transition-colors",
                  isCurrent
                    ? "bg-secondary-400 text-neutral-950"
                    : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950",
                )}
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

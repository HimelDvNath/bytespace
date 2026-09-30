"use client";

import { useSearchParams } from "next/navigation";
import { useRef } from "react";
import {
  ALL,
  applyCatalogFilters,
  catalogParams,
  paginate,
  readCatalogState,
  type SelectOption,
} from "@/lib/catalog";
import type { Course } from "@/types";
import { CatalogView } from "./CatalogView";

interface CatalogExplorerProps {
  courses: Course[];
  featuredCategory: string;
  categoryOptions: SelectOption[];
  categoryTabs?: string[];
  showPagination?: boolean;
}

export function CatalogExplorer({
  courses,
  featuredCategory,
  categoryOptions,
  categoryTabs,
  showPagination = true,
}: CatalogExplorerProps) {
  const searchParams = useSearchParams();
  const rootRef = useRef<HTMLDivElement>(null);
  const state = readCatalogState(searchParams, {
    categories: categoryOptions.map((option) => option.value),
    featuredCategory,
  });

  const filtered = applyCatalogFilters(courses, state, featuredCategory);
  const page = showPagination
    ? paginate(filtered, state.page)
    : { items: filtered, currentPage: 1, totalPages: 1 };

  function updateUrl(changes: Record<string, string | null>, mode: "push" | "replace" = "replace") {
    const params = new URLSearchParams(searchParams.toString());
    for (const [key, value] of Object.entries(changes)) {
      if (value) params.set(key, value);
      else params.delete(key);
    }
    const search = params.toString();
    const url = `${window.location.pathname}${search ? `?${search}` : ""}`;
    window.history[mode === "push" ? "pushState" : "replaceState"](null, "", url);
  }

  const defaults: Record<string, string> = {
    category: featuredCategory,
    level: ALL,
    rating: ALL,
    sort: "relevant",
  };

  return (
    <div ref={rootRef} className="scroll-mt-6">
      <CatalogView
        state={{ ...state, page: page.currentPage }}
        courses={page.items}
        totalResults={filtered.length}
        totalPages={page.totalPages}
        featuredCategory={featuredCategory}
        categoryOptions={categoryOptions}
        categoryTabs={categoryTabs}
        showPagination={showPagination}
        onChange={(key, value) =>
          updateUrl({ [catalogParams[key]]: value === defaults[key] ? null : value, [catalogParams.page]: null })
        }
        onPageChange={(nextPage) => {
          updateUrl({ [catalogParams.page]: nextPage > 1 ? String(nextPage) : null }, "push");
          rootRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        onReset={() =>
          updateUrl({
            [catalogParams.query]: null,
            [catalogParams.category]: null,
            [catalogParams.level]: null,
            [catalogParams.rating]: null,
            [catalogParams.page]: null,
          })
        }
      />
    </div>
  );
}

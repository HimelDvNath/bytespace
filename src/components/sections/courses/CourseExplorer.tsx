"use client";

import { useSearchParams } from "next/navigation";
import { CATEGORY_PARAM, filterCourses, SEARCH_PARAM } from "@/lib/course-filters";
import type { Course } from "@/types";
import { CourseBrowser } from "./CourseBrowser";

interface CourseExplorerProps {
  courses: Course[];
  categoryRows: string[][];
  featuredCategory: string;
}

export function CourseExplorer({ courses, categoryRows, featuredCategory }: CourseExplorerProps) {
  const searchParams = useSearchParams();
  const query = (searchParams.get(SEARCH_PARAM) ?? "").trim();
  const requestedCategory = searchParams.get(CATEGORY_PARAM);
  const activeCategory =
    requestedCategory && categoryRows.some((row) => row.includes(requestedCategory))
      ? requestedCategory
      : featuredCategory;

  function updateParams(changes: Record<string, string | null>) {
    const params = new URLSearchParams(searchParams.toString());
    for (const [key, value] of Object.entries(changes)) {
      if (value) params.set(key, value);
      else params.delete(key);
    }
    const search = params.toString();
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${search ? `?${search}` : ""}${window.location.hash}`,
    );
  }

  const visibleCourses = filterCourses(courses, {
    category: activeCategory,
    query,
    featuredCategory,
  });

  return (
    <CourseBrowser
      categoryRows={categoryRows}
      activeCategory={activeCategory}
      query={query}
      courses={visibleCourses}
      onSelectCategory={(category) =>
        updateParams({ [CATEGORY_PARAM]: category === featuredCategory ? null : category })
      }
      onClearSearch={() => updateParams({ [SEARCH_PARAM]: null })}
      onReset={() => updateParams({ [SEARCH_PARAM]: null, [CATEGORY_PARAM]: null })}
    />
  );
}

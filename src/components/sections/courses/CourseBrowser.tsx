import Link from "next/link";
import { Button } from "@/components/buttons/Button";
import { CourseCard } from "@/components/cards/CourseCard";
import { cn } from "@/lib/cn";
import type { Course } from "@/types";

const CATEGORY_LIST_ID = "course-categories";
const COLLAPSED_CATEGORY_COUNT = 8;

function categoryIndex(rows: string[][], category: string) {
  return rows.flat().indexOf(category);
}

interface CourseBrowserProps {
  categoryRows: string[][];
  activeCategory: string;
  query: string;
  courses: Course[];
  showAllCategories?: boolean;
  onToggleCategories?: () => void;
  onSelectCategory?: (category: string) => void;
  onClearSearch?: () => void;
  onReset?: () => void;
}

export function CourseBrowser({
  categoryRows,
  activeCategory,
  query,
  courses,
  showAllCategories = false,
  onToggleCategories,
  onSelectCategory,
  onClearSearch,
  onReset,
}: CourseBrowserProps) {
  return (
    <>
      <div
        id={CATEGORY_LIST_ID}
        role="group"
        aria-label="Filter courses by category"
        className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3 md:mt-10.5 md:gap-4 xl:gap-y-5.25"
      >
        {categoryRows.map((row, rowIndex) => (
          <div
            key={row[0]}
            className="contents xl:flex xl:w-full xl:items-center xl:justify-center xl:gap-4"
          >
            {row.map((category) => {
              const isActive = category === activeCategory;
              const isCollapsedExtra =
                !showAllCategories && !isActive && categoryIndex(categoryRows, category) >= COLLAPSED_CATEGORY_COUNT;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={onSelectCategory && (() => onSelectCategory(category))}
                  className={cn(
                    "rounded-3xl px-3.5 py-2.5 text-label-s font-medium whitespace-nowrap transition-colors md:px-4 md:py-3 md:text-label-m",
                    isActive
                      ? "bg-secondary-400 text-neutral-950"
                      : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950",
                    isCollapsedExtra && "max-xl:hidden",
                  )}
                >
                  {category}
                </button>
              );
            })}
            {rowIndex === categoryRows.length - 1 && (
              <Link
                href="#categories"
                className="hidden shrink-0 self-center rounded-sm px-1 text-label-m font-medium whitespace-nowrap text-primary-800 hover:underline xl:inline"
              >
                + More
              </Link>
            )}
          </div>
        ))}
        <button
          type="button"
          aria-expanded={showAllCategories}
          aria-controls={CATEGORY_LIST_ID}
          onClick={onToggleCategories}
          className="self-center rounded-sm px-2 py-2 text-label-s font-medium whitespace-nowrap text-primary-800 hover:underline md:text-label-m xl:hidden"
        >
          {showAllCategories ? "Show less" : "+ More"}
        </button>
      </div>

      {query && (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-body-m text-neutral-700">
          <p>
            Showing results for <span className="font-medium text-neutral-950">“{query}”</span>
          </p>
          <button
            type="button"
            onClick={onClearSearch}
            className="rounded-sm font-medium text-primary-800 underline-offset-4 hover:underline"
          >
            Clear search
          </button>
        </div>
      )}

      <p aria-live="polite" className="sr-only">
        {courses.length === 1 ? "1 course shown" : `${courses.length} courses shown`}
      </p>

      {courses.length > 0 ? (
        <ul
          className={cn(
            "mx-auto grid max-w-[480px] grid-cols-1 gap-6 md:max-w-none md:grid-cols-2 xl:grid-cols-3 xl:gap-10",
            query ? "mt-10" : "mt-12 lg:mt-19.25",
          )}
        >
          {courses.map((course) => (
            <li key={course.id}>
              <CourseCard course={course} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mx-auto mt-12 flex max-w-md flex-col items-center gap-4 rounded-3xl border border-dashed border-neutral-200 px-6 py-12 text-center">
          <p className="font-display text-heading-xs font-semibold text-neutral-950">
            No courses found
          </p>
          <p className="text-body-m text-neutral-500">
            We couldn’t find courses matching your filters yet. Try another category or search term.
          </p>
          <Button onClick={onReset}>Show featured courses</Button>
        </div>
      )}
    </>
  );
}

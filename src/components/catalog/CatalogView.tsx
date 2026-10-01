import { Button } from "@/components/buttons/Button";
import { CourseCard } from "@/components/cards/CourseCard";
import { SelectMenu } from "@/components/common/SelectMenu";
import { CategoryIcon, FilterIcon, SignalIcon, SortIcon } from "@/components/icons";
import {
  ALL,
  levelOptions,
  ratingOptions,
  sortOptions,
  type CatalogState,
  type SelectOption,
} from "@/lib/catalog";
import { cn } from "@/lib/cn";
import type { Course } from "@/types";
import { Pagination } from "./Pagination";

type CatalogKey = "category" | "level" | "rating" | "sort";

interface CatalogViewProps {
  state: CatalogState;
  courses: Course[];
  totalResults: number;
  totalPages: number;
  featuredCategory: string;
  categoryOptions: SelectOption[];
  categoryTabs?: string[];
  showPagination?: boolean;
  onChange?: (key: CatalogKey, value: string) => void;
  onPageChange?: (page: number) => void;
  onReset?: () => void;
}

export function CatalogView({
  state,
  courses,
  totalResults,
  totalPages,
  featuredCategory,
  categoryOptions,
  categoryTabs,
  showPagination = true,
  onChange,
  onPageChange,
  onReset,
}: CatalogViewProps) {
  const change = (key: CatalogKey) => onChange && ((value: string) => onChange(key, value));

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3">
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <SelectMenu
            label="Filter"
            icon={<FilterIcon className="size-5 text-neutral-950 sm:size-6" />}
            options={ratingOptions}
            value={state.rating}
            defaultValue={ALL}
            onChange={change("rating")}
          />
          <SelectMenu
            label="Level"
            icon={<SignalIcon className="size-5 text-neutral-950 sm:size-6" />}
            options={levelOptions}
            value={state.level}
            defaultValue={ALL}
            onChange={change("level")}
          />
          <SelectMenu
            label="Category"
            icon={<CategoryIcon className="size-5 text-neutral-950 sm:size-6" />}
            options={categoryOptions}
            value={state.category}
            defaultValue={featuredCategory}
            onChange={change("category")}
          />
        </div>
        <SelectMenu
          label="Sort by"
          icon={<SortIcon className="size-5 text-neutral-950 sm:size-6" />}
          options={sortOptions}
          value={state.sort}
          showValue
          align="end"
          onChange={change("sort")}
        />
      </div>

      {categoryTabs && (
        <div
          role="group"
          aria-label="Filter courses by category"
          className="mt-6 flex flex-wrap gap-2 sm:gap-3 lg:mt-8 xl:justify-between xl:gap-4"
        >
          {categoryTabs.map((category) => {
            const isActive = category === state.category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={onChange && (() => onChange("category", category))}
                className={cn(
                  "rounded-3xl px-3.5 py-2.5 text-label-s font-medium whitespace-nowrap transition-colors md:px-4 md:py-3 md:text-label-m",
                  isActive
                    ? "bg-secondary-400 text-neutral-950"
                    : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950",
                )}
              >
                {category}
              </button>
            );
          })}
        </div>
      )}

      <p aria-live="polite" className="sr-only">
        {totalResults === 1 ? "1 course found" : `${totalResults} courses found`}
      </p>

      {courses.length > 0 ? (
        <ul
          className={cn(
            "mx-auto grid max-w-[480px] grid-cols-1 gap-6 md:max-w-none md:grid-cols-2 xl:grid-cols-3 xl:gap-10",
            categoryTabs ? "mt-10 lg:mt-19.25" : "mt-8 lg:mt-10",
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
          <p className="font-display text-heading-xs font-semibold text-neutral-950">No courses found</p>
          <p className="text-body-m text-neutral-500">
            Try a different search term or remove some filters to see more courses.
          </p>
          <Button onClick={onReset}>Clear all filters</Button>
        </div>
      )}

      {showPagination && courses.length > 0 && (
        <Pagination currentPage={state.page} totalPages={totalPages} onPageChange={onPageChange} />
      )}
    </div>
  );
}

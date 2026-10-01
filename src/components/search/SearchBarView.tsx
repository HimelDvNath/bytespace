import type { FormEvent } from "react";
import { SelectMenu } from "@/components/common/SelectMenu";
import { SearchIcon } from "@/components/icons";
import { catalogParams, searchScopeOptions } from "@/lib/catalog";

export const SEARCH_RESULTS_ID = "search-results";

interface SearchBarViewProps {
  query: string;
  scope: string;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  onScopeChange?: (scope: string) => void;
}

export function SearchBarView({ query, scope, onSubmit, onScopeChange }: SearchBarViewProps) {
  return (
    <form
      role="search"
      action="/courses"
      onSubmit={onSubmit}
      className="flex w-full max-w-156 items-start gap-3 sm:gap-4"
    >
      <label htmlFor="course-search" className="sr-only">
        Search {scope}
      </label>
      <div className="flex h-13 min-w-0 flex-1 items-center gap-2 rounded-3xl bg-white px-4 focus-within:outline-2 focus-within:outline-offset-3 focus-within:outline-white sm:px-6">
        <SearchIcon className="size-6 shrink-0 text-neutral-400" />
        <input
          key={query}
          id="course-search"
          name={catalogParams.query}
          type="search"
          defaultValue={query}
          placeholder="Search"
          autoComplete="off"
          className="min-w-0 flex-1 bg-transparent text-body-m text-neutral-950 outline-none placeholder:text-neutral-400 focus-visible:outline-none sm:text-body-l"
        />
      </div>
      <SelectMenu
        label="Search in"
        variant="lime"
        options={searchScopeOptions}
        value={scope}
        showValue
        align="end"
        onChange={onScopeChange}
      />
    </form>
  );
}

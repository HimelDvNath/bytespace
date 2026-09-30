"use client";

import { useId, type FormEvent } from "react";
import { SearchIcon } from "@/components/icons";
import { Button } from "@/components/buttons/Button";
import { COURSES_SECTION_ID, SEARCH_PARAM } from "@/lib/course-filters";

export function HeroSearchForm() {
  const inputId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = String(new FormData(event.currentTarget).get(SEARCH_PARAM) ?? "").trim();
    const params = new URLSearchParams(window.location.search);

    if (query) params.set(SEARCH_PARAM, query);
    else params.delete(SEARCH_PARAM);

    const search = params.toString();
    window.history.pushState(null, "", `${window.location.pathname}${search ? `?${search}` : ""}`);
    document.getElementById(COURSES_SECTION_ID)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <form
      role="search"
      action="/"
      onSubmit={handleSubmit}
      className="flex w-full max-w-[581px] items-start gap-2 sm:gap-4"
    >
      <label htmlFor={inputId} className="sr-only">
        Search courses, topics or creators
      </label>
      <div className="flex h-13 min-w-0 flex-1 items-center gap-2 rounded-3xl bg-white px-3 py-3 focus-within:outline-2 focus-within:outline-offset-3 focus-within:outline-white sm:px-6">
        <SearchIcon className="size-6 shrink-0 text-neutral-400" />
        <input
          id={inputId}
          name={SEARCH_PARAM}
          type="search"
          placeholder="Course, topic, creator"
          autoComplete="off"
          className="min-w-0 flex-1 bg-transparent text-body-m text-neutral-950 outline-none placeholder:text-neutral-400 focus-visible:outline-none sm:text-body-l"
        />
      </div>
      <Button type="submit" className="px-4 sm:px-6">
        Search
      </Button>
    </form>
  );
}

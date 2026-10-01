"use client";

import { useSearchParams } from "next/navigation";
import type { FormEvent } from "react";
import { catalogParams } from "@/lib/catalog";
import { SEARCH_RESULTS_ID, SearchBarView } from "./SearchBarView";

function pushParams(params: URLSearchParams) {
  const search = params.toString();
  window.history.pushState(null, "", `${window.location.pathname}${search ? `?${search}` : ""}`);
}

export function SearchBar() {
  const searchParams = useSearchParams();
  const query = searchParams.get(catalogParams.query) ?? "";
  const scope = searchParams.get(catalogParams.scope) === "creators" ? "creators" : "courses";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextQuery = String(new FormData(event.currentTarget).get(catalogParams.query) ?? "").trim();
    const params = new URLSearchParams(searchParams.toString());
    if (nextQuery) params.set(catalogParams.query, nextQuery);
    else params.delete(catalogParams.query);
    params.delete(catalogParams.page);
    pushParams(params);
    document.getElementById(SEARCH_RESULTS_ID)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleScopeChange(nextScope: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (nextScope === "courses") params.delete(catalogParams.scope);
    else params.set(catalogParams.scope, nextScope);
    params.delete(catalogParams.page);
    pushParams(params);
  }

  return (
    <SearchBarView
      query={query}
      scope={scope}
      onSubmit={handleSubmit}
      onScopeChange={handleScopeChange}
    />
  );
}

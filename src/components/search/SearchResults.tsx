"use client";

import { useSearchParams } from "next/navigation";
import { CatalogExplorer } from "@/components/catalog/CatalogExplorer";
import { catalogParams, type SelectOption } from "@/lib/catalog";
import type { Course, Creator } from "@/types";
import { CreatorResults } from "./CreatorResults";

interface SearchResultsProps {
  courses: Course[];
  creators: Creator[];
  featuredCategory: string;
  categoryOptions: SelectOption[];
  categoryTabs: string[];
}

export function SearchResults({ creators, ...catalogProps }: SearchResultsProps) {
  const searchParams = useSearchParams();

  if (searchParams.get(catalogParams.scope) === "creators") {
    const query = (searchParams.get(catalogParams.query) ?? "").trim();
    const normalized = query.toLowerCase();
    const matches = creators.filter((creator) =>
      [creator.name, creator.headline].some((field) => field.toLowerCase().includes(normalized)),
    );
    return <CreatorResults creators={matches} query={query} />;
  }

  return <CatalogExplorer {...catalogProps} />;
}

import type { Course, CourseLevel } from "@/types";

export const CATALOG_PAGE_SIZE = 12;

export const catalogParams = {
  query: "q",
  scope: "scope",
  category: "category",
  level: "level",
  rating: "rating",
  sort: "sort",
  page: "page",
} as const;

export interface SelectOption {
  value: string;
  label: string;
}

export const ALL = "all";

export const searchScopeOptions: SelectOption[] = [
  { value: "courses", label: "Courses" },
  { value: "creators", label: "Creators" },
];

export const ratingOptions: SelectOption[] = [
  { value: ALL, label: "All ratings" },
  { value: "4.5", label: "4.5 & up" },
  { value: "4", label: "4.0 & up" },
  { value: "3.5", label: "3.5 & up" },
];

const levels: CourseLevel[] = ["Beginner", "Intermediate", "Advanced"];

export const levelOptions: SelectOption[] = [
  { value: ALL, label: "All levels" },
  ...levels.map((level) => ({ value: level, label: level })),
];

export const sortOptions: SelectOption[] = [
  { value: "relevant", label: "Most relevant" },
  { value: "rating", label: "Highest rated" },
  { value: "title-asc", label: "Title: A to Z" },
  { value: "title-desc", label: "Title: Z to A" },
];

export interface CatalogState {
  query: string;
  category: string;
  level: string;
  rating: string;
  sort: string;
  page: number;
}

export function readCatalogState(
  params: URLSearchParams,
  { categories, featuredCategory }: { categories: string[]; featuredCategory: string },
): CatalogState {
  const pick = (key: string, options: SelectOption[], fallback: string) => {
    const value = params.get(key);
    return value && options.some((option) => option.value === value) ? value : fallback;
  };
  const category = params.get(catalogParams.category);
  const page = Number.parseInt(params.get(catalogParams.page) ?? "1", 10);

  return {
    query: (params.get(catalogParams.query) ?? "").trim(),
    category: category && categories.includes(category) ? category : featuredCategory,
    level: pick(catalogParams.level, levelOptions, ALL),
    rating: pick(catalogParams.rating, ratingOptions, ALL),
    sort: pick(catalogParams.sort, sortOptions, sortOptions[0].value),
    page: Number.isFinite(page) && page > 0 ? page : 1,
  };
}

export function applyCatalogFilters(
  courses: Course[],
  state: CatalogState,
  featuredCategory: string,
): Course[] {
  const query = state.query.toLowerCase();
  const minRating = state.rating === ALL ? 0 : Number(state.rating);

  const filtered = courses.filter((course) => {
    if (state.category !== featuredCategory && !course.categories.includes(state.category)) return false;
    if (state.level !== ALL && course.level !== state.level) return false;
    if (course.rating < minRating) return false;
    if (!query) return true;
    return [course.title, course.creator, ...course.categories].some((field) =>
      field.toLowerCase().includes(query),
    );
  });

  switch (state.sort) {
    case "rating":
      return [...filtered].sort((a, b) => b.rating - a.rating);
    case "title-asc":
      return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    case "title-desc":
      return [...filtered].sort((a, b) => b.title.localeCompare(a.title));
    default:
      return filtered;
  }
}

export function paginate<T>(items: T[], page: number, pageSize = CATALOG_PAGE_SIZE) {
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * pageSize;
  return { items: items.slice(start, start + pageSize), currentPage, totalPages };
}

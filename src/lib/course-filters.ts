import type { Course } from "@/types";

export const COURSES_SECTION_ID = "courses";
export const SEARCH_PARAM = "q";
export const CATEGORY_PARAM = "category";

export function filterCourses(
  courses: Course[],
  { category, query, featuredCategory }: { category: string; query: string; featuredCategory: string },
): Course[] {
  const normalizedQuery = query.toLowerCase();

  return courses.filter((course) => {
    const inCategory = category === featuredCategory || course.categories.includes(category);
    if (!inCategory) return false;
    if (!normalizedQuery) return true;

    return [course.title, course.creator, ...course.categories].some((field) =>
      field.toLowerCase().includes(normalizedQuery),
    );
  });
}

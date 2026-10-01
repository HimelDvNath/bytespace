import type { Metadata } from "next";
import { Suspense } from "react";
import { CatalogView } from "@/components/catalog/CatalogView";
import { Container } from "@/components/common/Container";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import { SearchBar } from "@/components/search/SearchBar";
import { SEARCH_RESULTS_ID, SearchBarView } from "@/components/search/SearchBarView";
import { SearchResults } from "@/components/search/SearchResults";
import { ALL, paginate } from "@/lib/catalog";
import { creators } from "@/lib/creators";
import { courseCategoryRows, courses, FEATURED_CATEGORY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Find Your Next Course",
  description:
    "Search ByteSpace courses by topic, category, level and creator, and find the right course to grow your skills.",
};

const allCategories = courseCategoryRows.flat();
const categoryOptions = allCategories.map((category) => ({
  value: category,
  label: category === FEATURED_CATEGORY ? "All categories" : category,
}));
const categoryTabs = [
  FEATURED_CATEGORY,
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

export default function CoursesPage() {
  const firstPage = paginate(courses, 1);

  return (
    <>
      <Navbar currentPath="/courses" />
      <main>
        <section
          aria-labelledby="search-heading"
          className="relative bg-grid text-neutral-50 lg:h-90"
        >
          <Container className="flex flex-col items-center pt-28 pb-16 text-center lg:pt-41 lg:pb-0">
            <h1
              id="search-heading"
              className="font-display text-[30px] leading-[1.2] font-semibold tracking-[-0.01em] sm:text-heading-s"
            >
              Find Your Next Course
            </h1>
            <div className="mt-8 flex w-full justify-center">
              <Suspense fallback={<SearchBarView query="" scope="courses" />}>
                <SearchBar />
              </Suspense>
            </div>
          </Container>
        </section>

        <section id={SEARCH_RESULTS_ID} aria-label="Search results" className="scroll-mt-6 pt-12 pb-16 lg:pt-18 lg:pb-18">
          <Container>
            <Suspense
              fallback={
                <CatalogView
                  state={{
                    query: "",
                    category: FEATURED_CATEGORY,
                    level: ALL,
                    rating: ALL,
                    sort: "relevant",
                    page: 1,
                  }}
                  courses={firstPage.items}
                  totalResults={courses.length}
                  totalPages={firstPage.totalPages}
                  featuredCategory={FEATURED_CATEGORY}
                  categoryOptions={categoryOptions}
                  categoryTabs={categoryTabs}
                />
              }
            >
              <SearchResults
                courses={courses}
                creators={creators}
                featuredCategory={FEATURED_CATEGORY}
                categoryOptions={categoryOptions}
                categoryTabs={categoryTabs}
              />
            </Suspense>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

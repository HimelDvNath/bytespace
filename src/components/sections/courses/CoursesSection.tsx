import { Suspense } from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { COURSES_SECTION_ID } from "@/lib/course-filters";
import { courseCategoryRows, courses, FEATURED_CATEGORY } from "@/lib/data";
import { CourseBrowser } from "./CourseBrowser";
import { CourseExplorer } from "./CourseExplorer";

export function CoursesSection() {
  return (
    <section
      id={COURSES_SECTION_ID}
      aria-labelledby="courses-heading"
      className="pt-16 lg:pt-18"
    >
      <Container>
        <SectionHeading
          id="courses-heading"
          title={
            <>
              Discover Your Passion, <br />
              Build Your Skills
            </>
          }
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />
        <Suspense
          fallback={
            <CourseBrowser
              categoryRows={courseCategoryRows}
              activeCategory={FEATURED_CATEGORY}
              query=""
              courses={courses}
            />
          }
        >
          <CourseExplorer
            courses={courses}
            categoryRows={courseCategoryRows}
            featuredCategory={FEATURED_CATEGORY}
          />
        </Suspense>
      </Container>
    </section>
  );
}

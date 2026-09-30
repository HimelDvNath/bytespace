import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { CourseHero } from "@/components/course-detail/CourseHero";
import { CourseSidebar } from "@/components/course-detail/CourseSidebar";
import { CourseTabs } from "@/components/course-detail/CourseTabs";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import { courseStaticParams, getCourseBundle } from "@/lib/courses";

export const dynamicParams = false;

export function generateStaticParams() {
  return courseStaticParams();
}

export async function generateMetadata({
  params,
}: LayoutProps<"/courses/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const { detail } = getCourseBundle(slug);
  return {
    title: detail.title,
    description: `${detail.tagline}. ${detail.description[0].slice(0, 120)}…`,
    openGraph: { title: detail.title, description: detail.tagline },
  };
}

export default async function CourseLayout({ children, params }: LayoutProps<"/courses/[slug]">) {
  const { slug } = await params;
  const { course, detail, creator } = getCourseBundle(slug);

  return (
    <>
      <Navbar currentPath="/courses" />
      <main>
        <section className="bg-grid text-neutral-50">
          <Container className="pt-28 pb-10 lg:pt-43 xl:pb-15.5">
            <CourseHero course={course} detail={detail} />
          </Container>
        </section>

        <Container className="grid gap-10 pt-10 pb-16 xl:grid-cols-[725px_412px] xl:justify-between xl:gap-x-10 xl:pt-0">
          <aside aria-label="Course summary" className="xl:col-start-2 xl:row-start-1 xl:-mt-[541px]">
            <CourseSidebar course={course} detail={detail} creator={creator} />
          </aside>
          <div className="min-w-0 xl:col-start-1 xl:row-start-1 xl:pt-15.75">
            <CourseTabs courseId={course.id} />
            <div className="mt-10">{children}</div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

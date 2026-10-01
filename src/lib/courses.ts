import { notFound } from "next/navigation";
import { getCourseDetail } from "@/lib/course-details";
import { getCreator } from "@/lib/creators";
import { courses } from "@/lib/data";

export function getCourseBundle(courseId: string) {
  const course = courses.find((item) => item.id === courseId);
  const detail = getCourseDetail(courseId);
  const creator = course && getCreator(course.creatorSlug);
  if (!course || !detail || !creator) notFound();
  return { course, detail, creator };
}

export function courseStaticParams() {
  return courses.map((course) => ({ slug: course.id }));
}

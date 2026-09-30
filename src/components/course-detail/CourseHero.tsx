import Image from "next/image";
import Link from "next/link";
import { PlayCircleIcon, SignalIcon, StarOutlineIcon, StudentsIcon } from "@/components/icons";
import coursePreview from "@/assets/images/course-preview.webp";
import type { Course, CourseDetail } from "@/types";
import { ShareButton } from "./ShareButton";

interface CourseHeroProps {
  course: Course;
  detail: CourseDetail;
}

export function CourseHero({ course, detail }: CourseHeroProps) {
  const stats = [
    { icon: SignalIcon, label: detail.level },
    { icon: StarOutlineIcon, label: `${detail.rating} (${detail.reviewCount} reviews)` },
    { icon: StudentsIcon, label: `${detail.students} Students` },
  ];

  return (
    <>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="font-display text-[28px] leading-[1.2] font-semibold tracking-[-0.01em] sm:text-heading-s">
              {detail.title}
            </h1>
            <p className="font-display text-lg leading-[1.2] font-semibold tracking-[-0.01em] sm:text-heading-xs">
              {detail.tagline}
            </p>
          </div>
          <p className="text-label-l font-medium text-[#f1f4fe]">
            by{" "}
            <Link
              href={`/creators/${course.creatorSlug}`}
              className="rounded-sm text-secondary-400 hover:underline"
            >
              {course.creator}
            </Link>
          </p>
          <ul className="flex flex-wrap gap-3 sm:gap-4">
            {stats.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex h-10 items-center gap-2 rounded-3xl bg-white px-6 text-label-m font-medium text-neutral-950"
              >
                <Icon className="size-6 text-primary-800" />
                {label}
              </li>
            ))}
          </ul>
        </div>
        <ShareButton title={detail.title} />
      </div>

      <div className="relative mt-10 aspect-[720/479] w-full overflow-hidden rounded-3xl bg-[#443131] xl:mt-14.75 xl:w-180">
        <Image
          src={coursePreview}
          alt={`Preview of the ${detail.title} course`}
          fill
          preload
          sizes="(min-width: 1280px) 720px, 100vw"
          className="object-cover"
        />
        <Link
          href={`/courses/${course.id}/lessons`}
          scroll={false}
          aria-label="Watch the course lessons"
          className="absolute top-1/2 left-1/2 flex size-18 -translate-1/2 items-center justify-center rounded-3xl border border-body bg-[#3d3d3d]/24 backdrop-blur-[20px] transition-transform hover:scale-105 sm:size-26"
        >
          <PlayCircleIcon className="size-12 text-[#f5f2ff] sm:size-18" />
        </Link>
      </div>
    </>
  );
}

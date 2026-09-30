import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/buttons/Button";
import {
  CertificateIcon,
  MarketingIcon,
  ResourcesIcon,
  VideoIcon,
} from "@/components/icons";
import type { Course, CourseDetail, Creator } from "@/types";

const inclusions = [
  { label: "Learning Resources", icon: ResourcesIcon },
  { label: "Quality Lesson Videos", icon: VideoIcon },
  { label: "Certificate of Completion", icon: CertificateIcon },
  { label: "Private Consultation", icon: MarketingIcon },
];

const PREVIEW_LESSON_COUNT = 3;
const enrollPitch = "Ready to Dive In? Enroll Now and Start Building Your Digital Future!";

interface CourseSidebarProps {
  course: Course;
  detail: CourseDetail;
  creator: Creator;
}

export function CourseSidebar({ course, detail, creator }: CourseSidebarProps) {
  const previewLessons = detail.modules.slice(0, PREVIEW_LESSON_COUNT);
  const remaining = detail.totalLessons - previewLessons.length;

  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10">
      <section aria-labelledby="course-outline-heading" className="flex flex-col gap-6">
        <h2 id="course-outline-heading" className="font-display text-heading-xs font-semibold text-neutral-950">
          {detail.totalLessons} Lessons ({detail.totalHours} hours)
        </h2>
        <div className="flex flex-col gap-3">
          <ol className="flex flex-col gap-3">
            {previewLessons.map((lesson, index) => (
              <li key={lesson.title} className="flex items-start justify-between gap-4">
                <span className="flex gap-2 text-label-m font-medium text-neutral-950">
                  <span className="w-6 shrink-0">{String(index + 1).padStart(2, "0")}</span>
                  <span className="max-w-50">{lesson.title}</span>
                </span>
                <span className="shrink-0 text-body-m text-primary-800">{lesson.minutes} mins</span>
              </li>
            ))}
          </ol>
          {remaining > 0 && <p className="text-body-m text-neutral-700">{remaining} more videos</p>}
        </div>
      </section>

      <div className="flex flex-col gap-6">
        <p className="text-body-m text-neutral-700">{enrollPitch}</p>
        <p className="flex items-end">
          <span className="font-display text-heading-s leading-[38px] font-semibold text-primary-800">
            ${course.price}
          </span>
          <span className="text-body-m text-neutral-700">/lifetime</span>
        </p>
        <ButtonLink href="/register" className="w-full">
          Enroll Now
        </ButtonLink>
      </div>

      <section aria-labelledby="course-includes-heading" className="flex flex-col gap-6">
        <h2 id="course-includes-heading" className="font-display text-heading-xs font-semibold text-neutral-950">
          This course include
        </h2>
        <ul className="flex flex-col gap-3">
          {inclusions.map(({ label, icon: Icon }) => (
            <li key={label} className="flex items-center gap-2 text-body-m text-neutral-700">
              <Icon className="size-6 shrink-0 text-primary-800" />
              {label}
            </li>
          ))}
        </ul>
      </section>

      <hr className="border-neutral-200" />

      <section aria-label="About the creator" className="flex flex-col items-start gap-6">
        <div className="flex items-center gap-3">
          <Image
            src={creator.avatar}
            alt=""
            width={52}
            height={52}
            sizes="52px"
            className="size-13 rounded-full object-cover"
          />
          <div>
            <p className="text-label-l font-medium text-neutral-950">{creator.name}</p>
            <p className="text-body-m text-neutral-700">{creator.role}</p>
          </div>
        </div>
        <p className="text-body-m text-neutral-700">{enrollPitch}</p>
        <Link
          href={`/creators/${creator.slug}`}
          className="rounded-3xl border border-neutral-200 px-4 py-2 text-label-m font-medium text-neutral-700 transition-colors hover:border-neutral-400 hover:text-neutral-950"
        >
          See Full Profile
        </Link>
      </section>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { AvatarStack } from "@/components/common/AvatarStack";
import { SignalIcon, StarIcon, StarOutlineIcon } from "@/components/icons";
import { cn } from "@/lib/cn";
import type { Course } from "@/types";

interface CourseCardProps {
  course: Course;
  highlighted?: boolean;
  interactive?: boolean;
  headingLevel?: "h3" | "h2";
  className?: string;
}

export function CourseCard({
  course,
  highlighted = false,
  interactive = true,
  headingLevel: Heading = "h3",
  className,
}: CourseCardProps) {
  const RatingStar = highlighted ? StarIcon : StarOutlineIcon;

  return (
    <article
      className={cn(
        "relative flex flex-col rounded-3xl border border-neutral-200 bg-white p-4 pb-[21px]",
        interactive &&
          "transition-shadow hover:shadow-[0_16px_40px_rgb(36_37_40/0.1)] has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-primary-800",
        className,
      )}
    >
      <div className="relative aspect-[341/195] overflow-hidden rounded-xl bg-[#443131]">
        <Image
          src={course.image}
          alt=""
          fill
          sizes="(min-width: 1280px) 341px, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <ul className="absolute inset-x-2 bottom-[19px] flex flex-wrap gap-1.5 sm:inset-x-3 sm:gap-2 xl:left-[13px] xl:gap-3">
          {[`${course.lessons} Lessons`, course.duration, `${course.comments} Comments`].map(
            (meta) => (
              <li
                key={meta}
                className="rounded-3xl bg-[#f6f6f6]/60 px-2 py-1.5 sm:px-2.5 text-center text-label-xs font-medium text-body backdrop-blur-[4px] xl:px-3"
              >
                {meta}
              </li>
            ),
          )}
        </ul>
      </div>

      <div className="mt-[21px] flex items-start justify-between gap-2.5">
        <div className="min-w-0">
          <Heading className="truncate font-display text-heading-xs font-semibold text-black">
            {interactive ? (
              <Link
                href={`/courses/${course.id}`}
                className="outline-none after:absolute after:inset-0 after:rounded-3xl"
              >
                {course.title}
              </Link>
            ) : (
              course.title
            )}
          </Heading>
          <p className="text-body-xs text-body">
            by{" "}
            {interactive ? (
              <Link
                href={`/creators/${course.creatorSlug}`}
                className="relative z-10 rounded-sm text-primary-800 hover:underline"
              >
                {course.creator}
              </Link>
            ) : (
              <span className="text-primary-800">{course.creator}</span>
            )}
          </p>
        </div>
        <p className="flex shrink-0 items-center text-body-l text-body">
          {course.rating}
          <RatingStar
            className={cn("size-6", highlighted ? "text-secondary-400" : "text-neutral-200")}
          />
          <span className="sr-only">out of 5 stars</span>
        </p>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <span className="flex items-center gap-1 rounded-3xl bg-neutral-50 px-3 py-1.5 text-label-xs font-medium text-neutral-700">
          <SignalIcon className="size-5" />
          {course.level}
        </span>
        <AvatarStack
          avatars={course.learners}
          extraLabel={course.enrolledExtra}
          size="sm"
          label={`${course.enrolledExtra} learners enrolled`}
          badgeClassName={highlighted ? "bg-black text-white" : "bg-secondary-400 text-neutral-950"}
        />
      </div>

      <p className="mt-4 flex items-end">
        <span className="font-display text-heading-xs font-semibold text-primary-800">
          ${course.price}
        </span>
        <span className="text-body-xs text-body">/lifetime</span>
      </p>
    </article>
  );
}

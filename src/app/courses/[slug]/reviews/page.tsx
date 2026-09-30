import type { Metadata } from "next";
import { ReviewList } from "@/components/course-detail/ReviewList";
import { StarRow } from "@/components/course-detail/StarRow";
import { TabSection } from "@/components/course-detail/TabSection";
import { StarIcon } from "@/components/icons";
import { averageRating } from "@/lib/course-details";
import { getCourseBundle } from "@/lib/courses";
import type { StarRating } from "@/types";

export async function generateMetadata({
  params,
}: PageProps<"/courses/[slug]/reviews">): Promise<Metadata> {
  const { slug } = await params;
  return { title: `Reviews · ${getCourseBundle(slug).detail.title}` };
}

const starLevels: StarRating[] = [5, 4, 3, 2, 1];

export default async function CourseReviewsPage({ params }: PageProps<"/courses/[slug]/reviews">) {
  const { slug } = await params;
  const { detail } = getCourseBundle(slug);
  const breakdown = detail.ratingBreakdown;
  const maxCount = Math.max(...Object.values(breakdown));

  return (
    <div className="flex flex-col gap-6">
      <TabSection title="What Learners Are Saying">
        <p className="text-body-m text-neutral-700">
          Discover what our learners have to say about their experience with &lsquo;{detail.title}.&rsquo;
          Read reviews and ratings from individuals who have embarked on the transformative journey of
          this course.
        </p>
        <div className="flex flex-col items-stretch gap-6 rounded-2xl border border-neutral-200 bg-white p-6 sm:flex-row sm:items-center sm:p-10">
          <div className="flex flex-col items-center justify-center rounded-lg bg-secondary-400 px-10 py-6 sm:h-35 sm:w-32.25 sm:py-0">
            <p className="text-label-s font-medium text-neutral-950">Ratings</p>
            <p className="font-display text-heading-s font-semibold text-neutral-950">
              {averageRating(breakdown)}
            </p>
          </div>
          <dl className="flex flex-1 flex-col gap-1">
            {starLevels.map((stars) => (
              <div key={stars} className="flex items-center gap-3 sm:gap-4">
                <dt className="flex w-8 shrink-0 items-center gap-0.5 text-label-s font-medium text-neutral-700 sm:sr-only">
                  {stars}
                  <StarIcon className="size-3.5" />
                  <span className="sr-only"> stars</span>
                </dt>
                <div aria-hidden="true" className="h-2 flex-1 overflow-hidden rounded-3xl bg-neutral-100">
                  <div
                    className="h-full rounded-3xl bg-secondary-400"
                    style={{ width: `${(breakdown[stars] / maxCount) * 92}%` }}
                  />
                </div>
                <StarRow rating={stars} className="hidden sm:flex" />
                <dd className="w-10 text-right text-body-m text-neutral-700">{breakdown[stars]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </TabSection>

      <TabSection title="Individual Reviews:">
        <ReviewList reviews={detail.reviews} />
      </TabSection>
    </div>
  );
}

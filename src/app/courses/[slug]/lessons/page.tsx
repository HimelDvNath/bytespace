import type { Metadata } from "next";
import { TabSection } from "@/components/course-detail/TabSection";
import { VideoIcon } from "@/components/icons";
import { getCourseBundle } from "@/lib/courses";

export async function generateMetadata({
  params,
}: PageProps<"/courses/[slug]/lessons">): Promise<Metadata> {
  const { slug } = await params;
  return { title: `Lessons · ${getCourseBundle(slug).detail.title}` };
}

const LEARNING_PROGRESS = 55;

export default async function CourseLessonsPage({ params }: PageProps<"/courses/[slug]/lessons">) {
  const { slug } = await params;
  const { detail } = getCourseBundle(slug);

  return (
    <div className="flex flex-col gap-6">
      <TabSection title="Explore the Modules">
        <p className="text-body-m text-neutral-700">
          Immerse yourself in the course content as we break down each module into comprehensive
          lessons, providing practical insights and hands-on experiences.
        </p>
      </TabSection>

      <TabSection title="Lesson List">
        <ol className="flex flex-col gap-6">
          {detail.modules.map((module, index) => (
            <li key={module.title} className="flex items-center gap-3.25">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-3xl bg-secondary-400 sm:size-18">
                <VideoIcon className="size-8 text-neutral-950 sm:size-10" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-label-m font-medium text-neutral-950">
                  Module {index + 1}: {module.title}
                </h3>
                <p className="text-body-m text-neutral-700">{module.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </TabSection>

      <TabSection title="Lesson Content">
        <p className="text-body-m text-neutral-700">
          Engage with each lesson through captivating video content, detailed textual explanations,
          and interactive elements. Download resources, complete assignments, and test your
          understanding with quizzes.
        </p>
      </TabSection>

      <TabSection title="Lesson Progress Tracking">
        <p className="text-body-m text-neutral-700">
          Witness your growth as you complete lessons, with an intuitive progress tracking feature
          guiding you through your learning journey.
        </p>
        <div className="flex flex-col gap-2 rounded-2xl border border-neutral-200 bg-white p-4">
          <p id="learning-progress-label" className="text-label-s font-medium text-neutral-950">
            Learning Progress
          </p>
          <p className="font-display text-heading-s font-semibold text-neutral-950">{LEARNING_PROGRESS}%</p>
          <div
            role="progressbar"
            aria-labelledby="learning-progress-label"
            aria-valuenow={LEARNING_PROGRESS}
            aria-valuemin={0}
            aria-valuemax={100}
            className="h-2 w-full overflow-hidden rounded-3xl bg-neutral-100"
          >
            <div className="h-full rounded-3xl bg-secondary-400" style={{ width: `${LEARNING_PROGRESS}%` }} />
          </div>
        </div>
      </TabSection>
    </div>
  );
}

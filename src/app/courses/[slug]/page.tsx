import Image from "next/image";
import { TabSection } from "@/components/course-detail/TabSection";
import { CheckCircleIcon } from "@/components/icons";
import { getCourseBundle } from "@/lib/courses";

export default async function CourseAboutPage({ params }: PageProps<"/courses/[slug]">) {
  const { slug } = await params;
  const { detail } = getCourseBundle(slug);

  return (
    <div className="flex flex-col gap-6">
      <TabSection title="Description">
        <div className="flex flex-col gap-6.5 text-body-m text-neutral-700">
          {detail.description.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </TabSection>

      {detail.sneakPeek.length > 0 && (
        <TabSection title="Sneak Peak">
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5 xl:gap-4.75">
            {detail.sneakPeek.map((image, index) => (
              <li key={image.src} className="relative aspect-[167/125] overflow-hidden rounded-2xl bg-[#d9d9d9]">
                <Image
                  src={image}
                  alt={`Preview ${index + 1} from ${detail.title}`}
                  fill
                  sizes="(min-width: 640px) 167px, 50vw"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </TabSection>
      )}

      <TabSection title="Key Points">
        <ul className="flex flex-col gap-3">
          {detail.keyPoints.map((point) => (
            <li key={point} className="flex items-start gap-2 text-body-m text-neutral-700">
              <CheckCircleIcon className="size-6 shrink-0 text-primary-800" />
              {point}
            </li>
          ))}
        </ul>
      </TabSection>
    </div>
  );
}

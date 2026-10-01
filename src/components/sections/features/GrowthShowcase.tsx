import Image from "next/image";
import { CourseCard } from "@/components/cards/CourseCard";
import { LearningProgressCard } from "@/components/cards/StatCards";
import { Ornament } from "@/components/common/Ornament";
import { courses } from "@/lib/data";
import heroStudent from "@/assets/images/hero-student.webp";

export function GrowthShowcase() {
  return (
    <div
      role="img"
      aria-label="A ByteSpace course card next to a student tracking 55% learning progress"
      className="relative mx-auto h-[254px] w-[286px] shrink-0 min-[375px]:h-76 min-[375px]:w-[342px] sm:h-[442px] sm:w-[497px] md:h-138 md:w-[621px] lg:h-[442px] lg:w-[497px] xl:mx-0 xl:h-138 xl:w-[621px]"
    >
      <div className="absolute top-0 left-0 h-138 w-[621px] origin-top-left scale-[0.4605] min-[375px]:scale-[0.5507] sm:scale-80 md:scale-100 lg:scale-80 xl:scale-100">
        <CourseCard
          course={courses[0]}
          highlighted
          interactive={false}
          className="absolute top-0 left-0 w-[373px]"
        />
        <Image
          src={heroStudent}
          alt=""
          sizes="577px"
          className="absolute top-3 left-0 w-[577px] max-w-none drop-shadow-photo"
        />
        <LearningProgressCard className="absolute top-[213px] left-[345px]" />
        <Ornament name="springLime" sizes="215px" className="top-[67px] left-[406px] w-[215px]" />
      </div>
    </div>
  );
}

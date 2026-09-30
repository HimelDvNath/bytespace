import { CourseCard } from "@/components/cards/CourseCard";
import { HappyStudentsCard } from "@/components/cards/StatCards";
import { Ornament } from "@/components/common/Ornament";
import { courses } from "@/lib/data";

export function AuthShowcase() {
  const [, digitalAssetCourse, bigDataCourse] = courses;

  return (
    <div aria-hidden="true" className="relative h-[585px] w-[548px]">
      <CourseCard
        course={digitalAssetCourse}
        highlighted
        className="absolute top-[89px] left-[25px] w-[373px]"
      />
      <CourseCard
        course={bigDataCourse}
        highlighted
        className="absolute top-0 left-[136px] w-[373px]"
      />
      <HappyStudentsCard variant="lime" className="absolute top-[435px] left-[251px]" />
      <Ornament name="spiralWhite" sizes="175px" className="top-[321px] left-[373px] w-[175px]" />
      <Ornament name="torusLime" sizes="146px" className="top-[15px] left-[54px] w-[146px]" />
      <Ornament name="pyramidLime" sizes="188px" className="top-[397px] left-0 w-[188px]" />
    </div>
  );
}

import Image from "next/image";
import { HappyStudentsCard, RevenueCard } from "@/components/cards/StatCards";
import { Ornament } from "@/components/common/Ornament";
import creatorStudent from "@/assets/images/creator-student.webp";

export function CreatorShowcase() {
  return (
    <div
      role="img"
      aria-label="A course creator with revenue statistics and a community of over 2,000 happy students"
      className="relative mx-auto h-[315px] w-[286px] shrink-0 min-[375px]:h-[377px] min-[375px]:w-[342px] sm:h-[477px] sm:w-[433px] md:h-149 md:w-[541px] lg:h-[477px] lg:w-[433px] xl:mx-0 xl:h-149 xl:w-[541px]"
    >
      <div className="absolute top-0 left-0 h-149 w-[541px] origin-top-left scale-[0.5287] min-[375px]:scale-[0.632] sm:scale-80 md:scale-100 lg:scale-80 xl:scale-100">
        <RevenueCard
          title="Total Revenue"
          period="July 1-28"
          amount="$120.29"
          withProgress
          className="absolute top-11 left-0 w-58"
        />
        <RevenueCard
          title="Year to Date"
          period="2023"
          amount="$1,200.38"
          className="absolute top-[194px] left-0 w-[134px]"
        />
        <Image
          src={creatorStudent}
          alt=""
          sizes="435px"
          className="absolute top-0 left-7 h-149 w-[435px] max-w-none object-cover drop-shadow-photo"
        />
        <HappyStudentsCard variant="light" className="absolute top-[413px] left-[283px]" />
        <Ornament name="spiralLime" sizes="215px" className="top-[114px] left-[305px] w-[215px]" />
      </div>
    </div>
  );
}

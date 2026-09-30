import Image from "next/image";
import { Container } from "@/components/common/Container";
import { OrnamentLayer, type OrnamentPlacement } from "@/components/common/OrnamentLayer";
import {
  CategoryHighlightCard,
  HappyStudentsCard,
  LearningProgressCard,
} from "@/components/cards/StatCards";
import heroStudent from "@/assets/images/hero-student.webp";
import { HeroSearchForm } from "./HeroSearchForm";

const heroOrnaments: OrnamentPlacement[] = [
  {
    name: "spiralLime",
    sizes: "(min-width: 1024px) 385px, 180px",
    className:
      "-left-10 bottom-47.5 w-27.5 sm:bottom-62.5 sm:w-37.5 md:w-45 lg:bottom-auto lg:-left-29.5 lg:top-55.25 lg:w-96.25",
  },
  {
    name: "spiralWhite",
    sizes: "175px",
    className: "hidden lg:block lg:left-45.75 lg:top-119.25 lg:w-43.75",
  },
  {
    name: "torusWhite",
    sizes: "(min-width: 1024px) 342px, 190px",
    className:
      "-bottom-8 -left-8 w-30 sm:w-40 md:w-47.5 lg:bottom-auto lg:left-4.5 lg:top-170.5 lg:w-85.5",
  },
  {
    name: "springWhite",
    sizes: "(min-width: 1024px) 330px, 170px",
    className:
      "-right-5 bottom-2.5 w-27.5 sm:w-37.5 md:w-42.5 lg:right-auto lg:bottom-auto lg:left-281.75 lg:top-168 lg:w-82.5",
  },
  {
    name: "cylinderLime",
    sizes: "(min-width: 1024px) 370px, 170px",
    className:
      "-right-12 bottom-52.5 w-27.5 sm:bottom-65 sm:w-37.5 md:w-42.5 lg:right-auto lg:bottom-auto lg:left-307.75 lg:top-55.25 lg:w-92.5",
  },
  {
    name: "pyramidWhite",
    sizes: "188px",
    className: "hidden lg:block lg:left-276.5 lg:top-116 lg:w-47",
  },
];

function HeroVisual() {
  return (
    <div className="relative mx-auto mt-8 h-67.5 w-full max-w-140 sm:h-86.25 md:h-100 lg:left-1/2 lg:mx-0 lg:-mt-0.5 lg:-ml-[574.5px] lg:h-127.5 lg:w-[1149px] lg:max-w-none">
      <svg
        aria-hidden="true"
        viewBox="0 0 1149 1149"
        className="absolute top-9 left-1/2 w-149 -translate-x-1/2 sm:top-11.5 sm:w-[755px] md:top-13.25 md:w-[875px] lg:top-17 lg:left-0 lg:w-[1149px] lg:translate-x-0"
      >
        <circle cx="574.5" cy="574.5" r="414.5" fill="none" stroke="#cbfc01" strokeWidth="320" />
      </svg>

      <Image
        src={heroStudent}
        alt="Smiling student wearing headphones while holding a laptop"
        preload
        sizes="(min-width: 1024px) 578px, (min-width: 768px) 440px, (min-width: 640px) 380px, 300px"
        className="absolute top-0 left-1/2 z-10 w-75 -translate-x-1/2 drop-shadow-photo sm:w-95 md:w-110 lg:left-71.5 lg:w-144.5 lg:translate-x-0"
      />

      <LearningProgressCard className="absolute top-30 right-0 z-10 origin-top-right scale-70 sm:top-27.5 sm:scale-85 md:top-25 md:scale-100 lg:top-34.75 lg:right-auto lg:left-174.25" />
      <HappyStudentsCard className="absolute bottom-2.5 left-0 z-10 origin-bottom-left scale-70 sm:scale-85 md:scale-100 lg:top-81.25 lg:bottom-auto lg:left-45.75" />
      <CategoryHighlightCard className="absolute top-10 left-0 z-30 hidden md:block lg:top-31.75 lg:left-64.75" />
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-grid text-white lg:h-256"
    >
      <OrnamentLayer placements={heroOrnaments} className="lg:z-20" />

      <Container className="relative z-40 flex flex-col items-center pt-28 text-center lg:pt-42.25">
        <h1
          id="hero-heading"
          className="max-w-[935px] font-display text-[40px] leading-[1.2] font-semibold tracking-[-0.01em] sm:text-[56px] lg:text-heading-xl"
        >
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mt-4 max-w-[819px] text-body-m text-neutral-100 sm:text-body-l lg:mt-8">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide
          range of courses.
        </p>
        <div className="mt-8 flex w-full justify-center lg:mt-15">
          <HeroSearchForm />
        </div>
      </Container>

      <HeroVisual />
    </section>
  );
}

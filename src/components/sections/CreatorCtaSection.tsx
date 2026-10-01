import { ButtonLink } from "@/components/buttons/Button";
import { Container } from "@/components/common/Container";
import { OrnamentLayer, type OrnamentPlacement } from "@/components/common/OrnamentLayer";

const ctaOrnaments: OrnamentPlacement[] = [
  {
    name: "spiralLime",
    sizes: "(min-width: 1024px) 385px, 130px",
    className: "-top-12 -left-12 w-32.5 lg:-top-40.5 lg:-left-29.5 lg:w-96.25",
  },
  {
    name: "spiralWhite",
    sizes: "175px",
    className: "hidden lg:block lg:top-1.25 lg:left-44.5 lg:w-43.75",
  },
  {
    name: "coneWhite",
    sizes: "188px",
    className: "hidden lg:block lg:top-56.25 lg:-left-12 lg:w-47",
  },
  {
    name: "torusLime",
    sizes: "(min-width: 1024px) 342px, 130px",
    className: "-bottom-12 -left-10 w-32.5 lg:top-74.75 lg:bottom-auto lg:left-5 lg:w-85.5",
  },
  {
    name: "pyramidLime",
    sizes: "188px",
    className: "hidden lg:block lg:top-0 lg:left-270 lg:w-47",
  },
  {
    name: "springLime",
    sizes: "(min-width: 1024px) 330px, 120px",
    className: "-right-8 -bottom-10 w-30 lg:top-72.25 lg:right-auto lg:bottom-auto lg:left-277.5 lg:w-82.5",
  },
  {
    name: "cylinderWhite",
    sizes: "(min-width: 1024px) 370px, 120px",
    className: "-top-8 -right-12 w-30 lg:top-1.5 lg:right-auto lg:left-306.5 lg:w-92.5",
  },
];

export function CreatorCtaSection() {
  return (
    <section
      id="creators"
      aria-labelledby="creators-heading"
      className="relative isolate overflow-hidden bg-grid"
    >
      <OrnamentLayer placements={ctaOrnaments} />
      <Container className="relative flex flex-col items-center py-24 text-center lg:pt-21.25 lg:pb-21">
        <h2
          id="creators-heading"
          className="max-w-[710px] font-display text-[30px] leading-[1.2] font-semibold tracking-[-0.01em] text-neutral-50 sm:text-heading-s lg:text-heading-m"
        >
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mt-6 max-w-[964px] text-body-m text-neutral-50 sm:text-body-l lg:mt-10">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>
        <ButtonLink href="/register" className="mt-8 lg:mt-10">
          Join as Creator
        </ButtonLink>
      </Container>
    </section>
  );
}

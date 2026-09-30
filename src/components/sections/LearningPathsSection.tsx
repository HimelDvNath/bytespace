import { LearningPathCard } from "@/components/cards/LearningPathCard";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { learningPaths } from "@/lib/data";

export function LearningPathsSection() {
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="pt-16 pb-16 lg:pt-18 lg:pb-30"
    >
      <Container>
        <SectionHeading
          id="categories-heading"
          size="s"
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:mt-17 lg:grid-cols-6 xl:gap-10">
          {learningPaths.map((path) => (
            <li key={path.name}>
              <LearningPathCard path={path} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

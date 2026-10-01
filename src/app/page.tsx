import { HeroSection } from "@/components/hero/HeroSection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import { CoursesSection } from "@/components/sections/courses/CoursesSection";
import { CreatorCtaSection } from "@/components/sections/CreatorCtaSection";
import { FeaturesSection } from "@/components/sections/features/FeaturesSection";
import { LearningPathsSection } from "@/components/sections/LearningPathsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <Navbar currentPath="/" />
      <main>
        <HeroSection />
        <PartnersSection />
        <CoursesSection />
        <LearningPathsSection />
        <FeaturesSection />
        <CreatorCtaSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}

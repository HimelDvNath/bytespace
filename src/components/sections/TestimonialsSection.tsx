import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Container } from "@/components/common/Container";
import { GlowBackground, type Glow } from "@/components/common/GlowBackground";
import { testimonials } from "@/lib/data";

const testimonialGlows: Glow[] = [
  { tone: "lime", size: 1137, left: "58.47%", top: "-30.7%", opacity: 0.4 },
  { tone: "lime", size: 672, left: "27.43%", top: "-17.6%", opacity: 0.6 },
  { tone: "blue", size: 1137, left: "-30.69%", top: "19%", opacity: 0.24 },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative isolate overflow-hidden bg-surface py-16 lg:pt-18.5 lg:pb-14.25"
    >
      <GlowBackground glows={testimonialGlows} className="-z-10" />
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-10.75">
          <h2
            id="testimonials-heading"
            className="font-display text-[30px] leading-[1.2] font-semibold tracking-[-0.01em] text-black sm:text-heading-s lg:w-[577px] lg:shrink-0 lg:text-heading-m"
          >
            Discover What Our <br className="hidden sm:inline" />
            Community Is Saying
          </h2>
          <p className="text-body-m text-body sm:text-body-l lg:w-145">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we
            do. Hear directly from those who have experienced the transformative journey of learning
            and creating on our platform. Explore testimonials that reflect the diverse perspectives
            of enthusiastic learners and accomplished creators.
          </p>
        </div>
        <ul className="mt-10 grid items-start gap-6 md:grid-cols-2 lg:mt-18 lg:grid-cols-3 lg:gap-10">
          {testimonials.map((testimonial) => (
            <li key={testimonial.name}>
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

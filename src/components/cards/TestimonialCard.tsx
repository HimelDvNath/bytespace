import Image from "next/image";
import type { Testimonial } from "@/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex flex-col gap-6 rounded-3xl bg-white p-6">
      <Image
        src={testimonial.avatar}
        alt={`Portrait of ${testimonial.name}`}
        width={80}
        height={80}
        sizes="80px"
        className="size-20 rounded-full object-cover"
      />
      <figcaption>
        <p className="font-display text-heading-xs leading-7 font-semibold text-black">
          {testimonial.name}
        </p>
        <p className="text-body-l text-primary-800">{testimonial.role}</p>
      </figcaption>
      <blockquote className="text-body-m text-body sm:text-body-l">
        <p>{`"${testimonial.quote}"`}</p>
      </blockquote>
    </figure>
  );
}

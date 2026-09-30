import Image from "next/image";
import { Container } from "@/components/common/Container";
import { partnerLogos } from "@/lib/data";

export function PartnersSection() {
  return (
    <section aria-label="Trusted by our partners" className="bg-neutral-50 py-12 lg:py-20">
      <Container>
        <ul className="flex flex-wrap items-end justify-center gap-x-8 gap-y-8 sm:gap-x-10 xl:gap-x-18">
          {partnerLogos.map((logo) => (
            <li key={logo.src}>
              <Image
                src={logo.src}
                alt="Logoipsum"
                width={logo.width}
                height={logo.height}
                className="h-8 w-auto sm:h-9 xl:h-auto"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import { ButtonLink } from "@/components/buttons/Button";
import { Container } from "@/components/common/Container";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <section
          aria-labelledby="not-found-heading"
          className="relative isolate overflow-hidden bg-grid text-white lg:h-[957px]"
        >
          <Container className="flex flex-col items-center pt-28 pb-24 text-center lg:pt-40 lg:pb-0">
            <p
              aria-hidden="true"
              className="bg-[linear-gradient(180deg,#d4fb20_0%,rgb(212_251_32/0.96)_25%,rgb(212_251_32/0.81)_50%,rgb(212_251_32/0.61)_68%,rgb(255_255_255/0)_100%)] bg-clip-text font-display text-[160px] leading-none font-semibold tracking-[-0.01em] text-transparent sm:text-[280px] lg:text-[480px]"
            >
              404
            </p>
            <h1
              id="not-found-heading"
              className="-mt-10 max-w-[935px] font-display text-[36px] leading-[1.2] font-semibold tracking-[-0.01em] sm:-mt-16 sm:text-[56px] lg:-mt-29.75 lg:text-heading-xl"
            >
              The page you are looking for doesn’t exist
            </h1>
            <p className="mt-6 text-body-m text-neutral-100 sm:text-body-l lg:mt-8">
              Try to use a correct url or go back to homepage to start again
            </p>
            <ButtonLink href="/" className="mt-8">
              Back to Home
            </ButtonLink>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

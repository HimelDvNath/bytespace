import { Container } from "@/components/common/Container";
import { GlowBackground, type Glow } from "@/components/common/GlowBackground";
import { CheckCircleIcon } from "@/components/icons";
import { creatorBenefits, growthStats } from "@/lib/data";
import { CreatorShowcase } from "./CreatorShowcase";
import { GrowthShowcase } from "./GrowthShowcase";

const featureGlows: Glow[] = [
  { tone: "lime", size: 1137, left: "-10.56%", top: "-31.9%", opacity: 0.4 },
  { tone: "blue", size: 1137, left: "56.32%", top: "-31.4%", opacity: 0.08 },
  { tone: "blue", size: 1137, left: "-35.28%", top: "12.5%", opacity: 0.16 },
  { tone: "blue", size: 1137, left: "50.14%", top: "53.97%", opacity: 0.24 },
  { tone: "lime", size: 672, left: "-19.93%", top: "64.8%", opacity: 0.6 },
];

const headingStyles =
  "font-display text-[30px] leading-[1.2] font-semibold tracking-[-0.01em] text-neutral-950 sm:text-heading-s lg:text-heading-m";

export function FeaturesSection() {
  return (
    <section id="about" aria-label="Why ByteSpace" className="relative isolate overflow-hidden bg-surface py-16 lg:py-30">
      <GlowBackground glows={featureGlows} className="-z-10" />

      <Container className="flex flex-col gap-16 lg:gap-18">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-10 xl:gap-15.75">
          <div className="w-full lg:flex-1 xl:w-[574px] xl:flex-none">
            <h2 className={headingStyles}>
              Your Path to Professional <br className="hidden sm:inline" />
              Growth Starts Here!
            </h2>
            <p className="mt-6 max-w-[477px] text-body-m text-neutral-700 sm:text-body-l lg:mt-10">
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills,
              gain industry expertise, or embark on a new career path entirely, we have the
              resources you need.
            </p>
            <dl className="mt-8 flex flex-wrap gap-x-14 gap-y-6 lg:mt-10">
              {growthStats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse">
                  <dt className="text-body-l text-neutral-700">{stat.label}</dt>
                  <dd className="font-display text-[30px] leading-11 font-medium tracking-[-0.01em] text-primary-800 sm:text-heading-s sm:leading-11">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <GrowthShowcase />
        </div>

        <div className="flex flex-col items-center gap-10 lg:flex-row-reverse lg:gap-10 xl:gap-19.75">
          <div className="w-full lg:flex-1 xl:w-145 xl:flex-none">
            <h2 className={headingStyles}>
              Create &amp; Manage <br className="hidden sm:inline" />
              Courses Easily.
            </h2>
            <p className="mt-6 text-body-m text-neutral-700 sm:text-body-l lg:mt-10">
              <strong className="font-bold text-neutral-950">ByteSpace</strong> supports individuals
              or entities in the creation, publication, and administration of educational courses.
            </p>
            <ul className="mt-8 flex flex-col gap-4 lg:mt-10">
              {creatorBenefits.map((benefit) => (
                <li key={benefit} className="flex items-end gap-2">
                  <CheckCircleIcon className="size-6 shrink-0 text-primary-800" />
                  <span className="text-label-l font-medium text-neutral-950">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <CreatorShowcase />
        </div>
      </Container>
    </section>
  );
}

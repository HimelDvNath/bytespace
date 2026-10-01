import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  id: string;
  title: ReactNode;
  description: ReactNode;
  size?: "m" | "s";
  titleClassName?: string;
  className?: string;
}

const titleSizes = {
  m: "text-[30px] sm:text-heading-s lg:text-heading-m",
  s: "text-[28px] sm:text-heading-s",
} as const;

export function SectionHeading({
  id,
  title,
  description,
  size = "m",
  titleClassName,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center", className)}>
      <h2
        id={id}
        className={cn(
          "font-display leading-[1.2] font-semibold tracking-[-0.01em] text-ink",
          titleSizes[size],
          titleClassName,
        )}
      >
        {title}
      </h2>
      <p className="text-body-m text-neutral-400 sm:text-body-l">{description}</p>
    </div>
  );
}

import { cn } from "@/lib/cn";

export interface Glow {
  tone: "blue" | "lime";
  size: number;
  left: string;
  top: string;
  opacity: number;
}

const glowColor = {
  blue: "0 59 226",
  lime: "203 252 1",
} as const;

function glowGradient(tone: Glow["tone"]) {
  const rgb = glowColor[tone];
  return `radial-gradient(circle closest-side, rgb(${rgb}) 0%, rgb(${rgb} / 0.23) 53%, rgb(${rgb} / 0.06) 75%, rgb(${rgb} / 0) 100%)`;
}

export function GlowBackground({ glows, className }: { glows: Glow[]; className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {glows.map((glow, index) => (
        <div
          key={index}
          className="absolute rounded-full"
          style={{
            width: glow.size,
            height: glow.size,
            left: glow.left,
            top: glow.top,
            opacity: glow.opacity,
            backgroundImage: glowGradient(glow.tone),
          }}
        />
      ))}
    </div>
  );
}

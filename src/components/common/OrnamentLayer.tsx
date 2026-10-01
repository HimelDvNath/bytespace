import { cn } from "@/lib/cn";
import type { OrnamentName } from "@/lib/ornaments";
import { Ornament } from "./Ornament";

export interface OrnamentPlacement {
  name: OrnamentName;
  sizes: string;
  className: string;
}

interface OrnamentLayerProps {
  placements: OrnamentPlacement[];
  className?: string;
}

export function OrnamentLayer({ placements, className }: OrnamentLayerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 lg:right-auto lg:left-1/2 lg:-ml-180 lg:w-360",
        className,
      )}
    >
      {placements.map((placement) => (
        <Ornament
          key={`${placement.name}-${placement.className}`}
          name={placement.name}
          sizes={placement.sizes}
          className={placement.className}
        />
      ))}
    </div>
  );
}

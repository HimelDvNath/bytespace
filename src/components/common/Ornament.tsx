import Image from "next/image";
import { cn } from "@/lib/cn";
import { ornaments, type OrnamentName } from "@/lib/ornaments";

interface OrnamentProps {
  name: OrnamentName;
  sizes: string;
  className?: string;
}

export function Ornament({ name, sizes, className }: OrnamentProps) {
  return (
    <Image
      src={ornaments[name]}
      alt=""
      sizes={sizes}
      className={cn("pointer-events-none absolute h-auto max-w-none select-none", className)}
    />
  );
}

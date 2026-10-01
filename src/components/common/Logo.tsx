import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

interface LogoProps {
  tone?: "light" | "dark";
  markOnly?: boolean;
  className?: string;
}

export function Logo({ tone = "light", markOnly = false, className }: LogoProps) {
  const image = markOnly
    ? { src: "/brand/logo-mark.svg", width: 29, height: 32 }
    : { src: `/brand/logo-${tone}.svg`, width: 171, height: 35 };

  return (
    <Link
      href="/"
      aria-label="ByteSpace home"
      className={cn(
        "flex w-fit shrink-0 rounded-md",
        tone === "light" ? "text-white" : "text-neutral-950",
        className,
      )}
    >
      <Image src={image.src} alt="" width={image.width} height={image.height} preload />
    </Link>
  );
}

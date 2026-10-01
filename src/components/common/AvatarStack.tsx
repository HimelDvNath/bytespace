import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Avatar } from "@/types";

interface AvatarStackProps {
  avatars: Avatar[];
  extraLabel: string;
  size: "sm" | "md";
  badgeClassName: string;
  label: string;
}

const sizeStyles = {
  sm: { item: "size-8 -ml-2 first:ml-0", pixels: 32, badge: "text-label-xs leading-5 font-medium" },
  md: { item: "size-[43px] -ml-4 first:ml-0", pixels: 43, badge: "text-label-xs leading-[18px] font-bold" },
} as const;

export function AvatarStack({ avatars, extraLabel, size, badgeClassName, label }: AvatarStackProps) {
  const styles = sizeStyles[size];

  return (
    <div role="img" aria-label={label} className="flex items-center">
      {avatars.map((avatar, index) => (
        <Image
          key={index}
          src={avatar.src}
          alt={avatar.alt}
          width={styles.pixels}
          height={styles.pixels}
          sizes={`${styles.pixels}px`}
          className={cn("shrink-0 rounded-full object-cover", styles.item)}
        />
      ))}
      <span
        aria-hidden="true"
        className={cn(
          "flex shrink-0 items-center justify-center rounded-full",
          styles.item,
          styles.badge,
          badgeClassName,
        )}
      >
        {extraLabel}
      </span>
    </div>
  );
}

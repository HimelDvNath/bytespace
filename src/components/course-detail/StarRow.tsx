import { StarIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

export function StarRow({ rating, className }: { rating: number; className?: string }) {
  return (
    <span role="img" aria-label={`${rating} out of 5 stars`} className={cn("flex gap-1", className)}>
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon
          key={index}
          className={cn("size-6", index < rating ? "text-neutral-700" : "text-neutral-200")}
        />
      ))}
    </span>
  );
}

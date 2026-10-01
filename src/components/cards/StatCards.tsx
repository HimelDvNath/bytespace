import { AvatarStack } from "@/components/common/AvatarStack";
import { RoundedStarIcon } from "@/components/icons";
import { cn } from "@/lib/cn";
import { happyStudents } from "@/lib/data";

interface StatCardProps {
  className?: string;
}

function ProgressBar({ value, trackClassName }: { value: number; trackClassName: string }) {
  return (
    <div className={cn("h-2 w-[200px] overflow-hidden rounded-3xl", trackClassName)}>
      <div className="h-full rounded-3xl bg-secondary-400" style={{ width: `${value}%` }} />
    </div>
  );
}

export function LearningProgressCard({ className }: StatCardProps) {
  return (
    <div aria-hidden="true" className={cn("w-[232px] rounded-2xl bg-white p-4", className)}>
      <p className="text-label-s font-medium text-neutral-950">Learning Progress</p>
      <p className="mt-2 font-display text-heading-l font-semibold text-neutral-950">55%</p>
      <div className="mt-2">
        <ProgressBar value={56} trackClassName="bg-[#f6f6f6]" />
      </div>
    </div>
  );
}

type HappyStudentsVariant = "hero" | "light" | "lime";

const happyStudentsStyles: Record<
  HappyStudentsVariant,
  { card: string; rating: string; score: string; star: string; badge: string }
> = {
  hero: {
    card: "bg-white",
    rating: "text-label-xs leading-[19.2px]",
    score: "text-neutral-950",
    star: "text-secondary-400",
    badge: "bg-secondary-400 text-neutral-950",
  },
  light: {
    card: "bg-white",
    rating: "text-[10px] leading-[15px]",
    score: "font-bold text-neutral-950",
    star: "text-secondary-400",
    badge: "bg-secondary-400 text-neutral-950",
  },
  lime: {
    card: "bg-secondary-400",
    rating: "text-[10px] leading-[15px]",
    score: "font-bold text-neutral-950",
    star: "text-primary-800",
    badge: "bg-neutral-950 text-neutral-50",
  },
};

export function HappyStudentsCard({
  variant = "hero",
  className,
}: StatCardProps & { variant?: HappyStudentsVariant }) {
  const styles = happyStudentsStyles[variant];

  return (
    <div
      aria-hidden="true"
      className={cn("flex w-[258px] flex-col gap-2 rounded-2xl p-4", styles.card, className)}
    >
      <div>
        <p className="text-label-m font-medium text-neutral-950">Happy Students</p>
        <p className={cn("flex items-center text-neutral-400", styles.rating)}>
          <span className={styles.score}>4.5</span>
          &nbsp;(240)
          <span className="flex size-4 items-center justify-center">
            <RoundedStarIcon className={cn("h-[13px] w-[14px]", styles.star)} />
          </span>
        </p>
      </div>
      <AvatarStack
        avatars={happyStudents}
        extraLabel="2K+"
        size="md"
        label="Over 2,000 happy students"
        badgeClassName={styles.badge}
      />
    </div>
  );
}

export function CategoryHighlightCard({ className }: StatCardProps) {
  return (
    <div aria-hidden="true" className={cn("w-[208px] rounded-2xl bg-white p-4", className)}>
      <p className="text-label-m font-medium text-neutral-950">UI/UX Design</p>
      <p className="flex items-center gap-2 text-body-xs text-neutral-400">
        <span>200 Courses</span>
        <span className="text-[10px] leading-[15px]">•</span>
        <span>1000+ Students</span>
      </p>
    </div>
  );
}

interface RevenueCardProps extends StatCardProps {
  title: string;
  period: string;
  amount: string;
  withProgress?: boolean;
}

function GrowthPill() {
  return (
    <span className="rounded-3xl bg-secondary-500 px-2 py-0.5 text-[10px] font-medium leading-5 text-neutral-950">
      +12$
    </span>
  );
}

export function RevenueCard({ title, period, amount, withProgress = false, className }: RevenueCardProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("flex flex-col gap-2 rounded-2xl bg-primary-800 p-4 text-neutral-50", className)}
    >
      <div>
        <p className="text-label-m font-medium">{title}</p>
        <p className="text-[10px] leading-3">{period}</p>
      </div>
      {withProgress ? (
        <>
          <div className="flex items-center justify-between gap-2">
            <p className="font-display text-2xl leading-8 font-semibold tracking-[-0.01em]">{amount}</p>
            <GrowthPill />
          </div>
          <ProgressBar value={56} trackClassName="bg-white" />
        </>
      ) : (
        <>
          <p className="font-display text-2xl leading-8 font-semibold tracking-[-0.01em]">{amount}</p>
          <div>
            <GrowthPill />
          </div>
        </>
      )}
    </div>
  );
}

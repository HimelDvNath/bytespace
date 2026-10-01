import type { LearningPath } from "@/types";

export function LearningPathCard({ path }: { path: LearningPath }) {
  const Icon = path.icon;

  return (
    <div className="flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl border border-neutral-200 bg-white p-2 text-center">
      <span className="flex size-[60px] items-center justify-center rounded-[40px] bg-secondary-400">
        <Icon className="size-9 text-neutral-950" />
      </span>
      <span className="text-lg leading-6 font-medium text-neutral-950 sm:text-xl">{path.name}</span>
    </div>
  );
}

import type { ReactNode } from "react";

export function TabSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="font-display text-heading-xs font-semibold text-neutral-950">{title}</h2>
      {children}
    </section>
  );
}

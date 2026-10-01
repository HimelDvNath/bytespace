export function AuthFormHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-body-l text-primary-800">{eyebrow}</p>
      <h1 className="font-display text-[34px] leading-[1.2] font-semibold tracking-[-0.01em] text-neutral-950 sm:text-heading-m">
        {title}
      </h1>
    </div>
  );
}

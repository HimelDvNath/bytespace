import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

const baseStyles =
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-3xl bg-secondary-400 px-6 py-3 font-sans text-label-l font-medium text-neutral-950 transition-colors hover:bg-secondary-300 active:bg-secondary-500 disabled:cursor-not-allowed disabled:opacity-60";

type ButtonProps = ComponentPropsWithoutRef<"button">;

export function Button({ className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={cn(baseStyles, className)} {...props} />;
}

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link>;

export function ButtonLink({ className, ...props }: ButtonLinkProps) {
  return <Link className={cn(baseStyles, className)} {...props} />;
}

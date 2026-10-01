import type { ReactNode } from "react";
import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";
import { AuthShowcase } from "./AuthShowcase";

interface AuthShellProps {
  tagline: string;
  description: string;
  children: ReactNode;
}

export function AuthShell({ tagline, description, children }: AuthShellProps) {
  return (
    <main className="relative isolate min-h-dvh overflow-hidden bg-grid text-neutral-50">
      <Container className="flex min-h-dvh flex-col gap-8 pt-8.75 pb-10 xl:flex-row xl:items-start xl:justify-between xl:pb-30">
        <div className="relative mx-auto flex w-full max-w-[579px] flex-col xl:mx-0 xl:w-[523px] xl:max-w-none xl:shrink-0">
          <Logo markOnly className="self-start" />
          <div className="mt-8 max-w-[475px] xl:mt-13.25">
            <p className="font-display text-heading-xs font-semibold">{tagline}</p>
            <p className="mt-4 text-body-m sm:text-body-l">{description}</p>
          </div>
          <div className="absolute top-[270px] -left-5.75 hidden xl:block">
            <AuthShowcase />
          </div>
        </div>

        <div className="mx-auto w-full max-w-[579px] rounded-3xl bg-white px-6 py-8 text-neutral-950 sm:px-12 sm:py-12 xl:mx-0 xl:mt-21.25 xl:w-[579px] xl:max-w-none xl:shrink-0 xl:px-15.75 xl:pt-15.25 xl:pb-10">
          {children}
        </div>
      </Container>
    </main>
  );
}

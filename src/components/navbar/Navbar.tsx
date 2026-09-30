import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";
import { BagIcon } from "@/components/icons";
import { cn } from "@/lib/cn";
import { accountNav, primaryNav } from "@/lib/data";
import { MobileMenu } from "./MobileMenu";

interface NavbarProps {
  currentPath?: string;
}

const linkStyles = "rounded-sm text-label-m text-neutral-50 transition-colors hover:text-secondary-400";

export function Navbar({ currentPath }: NavbarProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container className="flex h-20 items-center justify-between lg:grid lg:h-30 lg:grid-cols-[1fr_auto_1fr] lg:items-start lg:pt-8.75">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:mt-3 lg:block">
          <ul className="flex items-start gap-6">
            {primaryNav.map((link) => {
              const isCurrent = link.href === currentPath;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={cn(linkStyles, isCurrent ? "font-medium" : "leading-[25.6px]")}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center justify-end gap-6 lg:mt-3.25 lg:flex">
          {accountNav.map((link) => (
            <Link key={link.href} href={link.href} className={cn(linkStyles, "leading-6")}>
              {link.label}
            </Link>
          ))}
          <Link href="/login" aria-label="Cart" className={cn(linkStyles, "block")}>
            <BagIcon className="size-6" />
          </Link>
        </div>

        <MobileMenu primaryLinks={primaryNav} accountLinks={accountNav} currentPath={currentPath} />
      </Container>
    </header>
  );
}

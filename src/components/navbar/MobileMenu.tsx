"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Container } from "@/components/common/Container";
import { BagIcon, CloseIcon, MenuIcon } from "@/components/icons";
import type { NavLink } from "@/types";

interface MobileMenuProps {
  primaryLinks: NavLink[];
  accountLinks: NavLink[];
  currentPath?: string;
}

export function MobileMenu({ primaryLinks, accountLinks, currentPath }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const close = () => setIsOpen(false);
  const [signIn, joinUs] = accountLinks;

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((open) => !open)}
        className="-mr-2 flex size-11 items-center justify-center rounded-lg text-neutral-50 transition-colors hover:bg-white/10"
      >
        {isOpen ? <CloseIcon className="size-7" /> : <MenuIcon className="size-7" />}
      </button>

      <div
        id={panelId}
        hidden={!isOpen}
        className="absolute inset-x-0 top-full border-t border-white/15 bg-primary-800 shadow-[0_24px_48px_rgb(7_30_95/0.35)]"
      >
        <Container className="pb-6 pt-2">
          <nav aria-label="Mobile">
            <ul className="divide-y divide-white/10">
              {primaryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={close}
                    aria-current={link.href === currentPath ? "page" : undefined}
                    className="block py-4 text-label-l text-neutral-50 transition-colors hover:text-secondary-400 aria-[current=page]:font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-3">
              <Link
                href={signIn.href}
                onClick={close}
                className="flex-1 rounded-3xl border border-white/40 px-6 py-3 text-center text-label-l font-medium text-neutral-50 transition-colors hover:bg-white/10"
              >
                {signIn.label}
              </Link>
              <Link
                href={joinUs.href}
                onClick={close}
                className="flex-1 rounded-3xl bg-secondary-400 px-6 py-3 text-center text-label-l font-medium text-neutral-950 transition-colors hover:bg-secondary-300"
              >
                {joinUs.label}
              </Link>
              <Link
                href="/login"
                onClick={close}
                aria-label="Cart"
                className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/40 text-neutral-50 transition-colors hover:bg-white/10"
              >
                <BagIcon className="size-6" />
              </Link>
            </div>
          </nav>
        </Container>
      </div>
    </div>
  );
}

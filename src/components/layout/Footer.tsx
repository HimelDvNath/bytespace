import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";
import { footerColumns, legalLinks } from "@/lib/data";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <Container className="pt-14 pb-12 lg:pt-17.5">
        <div className="flex flex-col gap-12 xl:flex-row xl:gap-23">
          <div className="xl:w-132 xl:shrink-0">
            <Logo tone="dark" />
            <p className="mt-4.5 text-body-s text-neutral-950">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <NewsletterForm />
          </div>

          <nav aria-label="Footer" className="grid flex-1 grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:gap-x-10 xl:max-w-145">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h2 className="sr-only">{column.title}</h2>
                <ul className="flex flex-col gap-4 xl:pt-12">
                  {column.links.map((link) => (
                    <li key={link.label} className="text-body-s text-neutral-950">
                      {link.href ? (
                        <Link
                          href={link.href}
                          className="rounded-sm transition-colors hover:text-primary-800"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        link.label
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 border-t border-neutral-200 pt-6 xl:mt-32.5">
          <div className="flex flex-col gap-4 text-body-xs text-neutral-950 sm:flex-row sm:items-center sm:justify-between">
            <p>@ 2023 ByteSpace. All rights reserved.</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legalLinks.map((label) => (
                <li key={label}>{label}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

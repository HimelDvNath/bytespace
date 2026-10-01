import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

const arrowStyles =
  "flex h-12 w-14 items-center justify-center rounded-3xl border border-neutral-200 bg-white transition-colors hover:border-neutral-400 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-neutral-200";

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav aria-label="Pagination" className="mt-12 flex justify-center lg:mt-18">
      <ul className="flex items-center gap-4 sm:gap-6">
        <li>
          <button
            type="button"
            aria-label="Previous page"
            disabled={currentPage <= 1}
            onClick={onPageChange && (() => onPageChange(currentPage - 1))}
            className={cn(arrowStyles, "text-neutral-700")}
          >
            <ChevronLeftIcon className="size-6" />
          </button>
        </li>
        {pages.map((page) => {
          const isCurrent = page === currentPage;
          return (
            <li key={page}>
              <button
                type="button"
                aria-label={`Page ${page}`}
                aria-current={isCurrent ? "page" : undefined}
                onClick={onPageChange && (() => onPageChange(page))}
                className={cn(
                  "min-w-6 rounded-sm font-display text-xl leading-7 font-semibold tracking-[-0.01em] transition-colors",
                  isCurrent ? "text-neutral-200" : "text-neutral-950 hover:text-primary-800",
                )}
              >
                {page}
              </button>
            </li>
          );
        })}
        <li>
          <button
            type="button"
            aria-label="Next page"
            disabled={currentPage >= totalPages}
            onClick={onPageChange && (() => onPageChange(currentPage + 1))}
            className={cn(arrowStyles, "text-neutral-950")}
          >
            <ChevronRightIcon className="size-6" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

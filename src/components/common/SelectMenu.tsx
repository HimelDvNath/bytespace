"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { ChevronDownIcon } from "@/components/icons";
import { cn } from "@/lib/cn";
import type { SelectOption } from "@/lib/catalog";

interface SelectMenuProps {
  label: string;
  options: SelectOption[];
  value: string;
  onChange?: (value: string) => void;
  icon?: ReactNode;
  defaultValue?: string;
  showValue?: boolean;
  align?: "start" | "end";
  variant?: "outline" | "lime";
  className?: string;
}

export function SelectMenu({
  label,
  options,
  value,
  onChange,
  icon,
  defaultValue = options[0]?.value,
  showValue = false,
  align = "start",
  variant = "outline",
  className,
}: SelectMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLLIElement | null>>([]);
  const listId = useId();

  const selected = options.find((option) => option.value === value);
  const isFiltered = value !== defaultValue;
  const buttonText = showValue || isFiltered ? (selected?.label ?? label) : label;

  useEffect(() => {
    if (!isOpen) return;
    const selectedIndex = Math.max(0, options.findIndex((option) => option.value === value));
    optionRefs.current[selectedIndex]?.focus();

    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false);
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen, options, value]);

  function close() {
    setIsOpen(false);
    buttonRef.current?.focus();
  }

  function choose(nextValue: string) {
    onChange?.(nextValue);
    close();
  }

  function handleListKeyDown(event: KeyboardEvent<HTMLUListElement>) {
    const current = optionRefs.current.findIndex((element) => element === document.activeElement);
    const focusAt = (index: number) =>
      optionRefs.current[(index + options.length) % options.length]?.focus();

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        focusAt(current + 1);
        break;
      case "ArrowUp":
        event.preventDefault();
        focusAt(current - 1);
        break;
      case "Home":
        event.preventDefault();
        focusAt(0);
        break;
      case "End":
        event.preventDefault();
        focusAt(options.length - 1);
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        if (current >= 0) choose(options[current].value);
        break;
      case "Escape":
      case "Tab":
        event.preventDefault();
        close();
        break;
    }
  }

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={isOpen ? listId : undefined}
        aria-label={`${label}: ${selected?.label ?? ""}`}
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" && !isOpen) {
            event.preventDefault();
            setIsOpen(true);
          }
        }}
        className={cn(
          "flex items-center justify-center gap-1 rounded-3xl whitespace-nowrap transition-colors",
          variant === "outline"
            ? "h-10 border bg-white px-3 text-label-s font-medium text-neutral-700 hover:border-neutral-400 sm:h-12 sm:px-4 sm:text-label-m"
            : "h-12 gap-2 bg-secondary-400 px-6 text-label-l font-medium text-neutral-950 hover:bg-secondary-300",
          variant === "outline" && (isFiltered ? "border-primary-800 text-primary-800" : "border-neutral-200"),
        )}
      >
        {icon}
        <span>{buttonText}</span>
        {variant === "lime" && (
          <ChevronDownIcon className={cn("size-6 transition-transform", isOpen && "rotate-180")} />
        )}
      </button>

      {isOpen && (
        <ul
          id={listId}
          role="listbox"
          aria-label={label}
          onKeyDown={handleListKeyDown}
          className={cn(
            "absolute top-full z-30 mt-2 min-w-48 overflow-hidden rounded-2xl border border-neutral-100 bg-white py-2 shadow-[0_16px_40px_rgb(36_37_40/0.12)]",
            align === "end" ? "right-0" : "left-0",
          )}
        >
          {options.map((option, index) => {
            const isSelected = option.value === value;
            return (
              <li
                key={option.value}
                ref={(element) => {
                  optionRefs.current[index] = element;
                }}
                role="option"
                aria-selected={isSelected}
                tabIndex={-1}
                onClick={() => choose(option.value)}
                className={cn(
                  "cursor-pointer px-4 py-2.5 text-label-m whitespace-nowrap text-neutral-700 outline-none hover:bg-neutral-50 focus:bg-neutral-50",
                  isSelected && "font-medium text-primary-800",
                )}
              >
                {option.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

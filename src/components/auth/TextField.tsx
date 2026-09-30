import { useId, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

interface TextFieldProps extends Omit<ComponentPropsWithoutRef<"input">, "id"> {
  label: string;
  error?: string;
}

export function TextField({ label, error, className, ...inputProps }: TextFieldProps) {
  const inputId = useId();
  const errorId = useId();

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={inputId} className="text-label-s font-medium text-neutral-950">
        {label}
      </label>
      <input
        id={inputId}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          "h-13 w-full rounded-xl border bg-white px-6 py-3 text-body-m text-neutral-950 outline-none transition-colors placeholder:text-neutral-400 focus-visible:border-primary-800 focus-visible:ring-2 focus-visible:ring-primary-800/20 focus-visible:outline-none sm:text-body-l",
          error ? "border-danger" : "border-neutral-100 hover:border-neutral-200",
        )}
        {...inputProps}
      />
      {error && (
        <p id={errorId} className="text-body-s text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

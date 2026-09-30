"use client";

import { useId, useState, type FormEvent } from "react";
import { Button } from "@/components/buttons/Button";
import { cn } from "@/lib/cn";
import { simulateRequest, validateEmail } from "@/lib/validation";

type Status = "idle" | "submitting" | "success";

export function NewsletterForm() {
  const inputId = useId();
  const messageId = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string>();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationError = validateEmail(email);
    setError(validationError);
    if (validationError) return;

    setStatus("submitting");
    await simulateRequest();
    setStatus("success");
    setEmail("");
  }

  return (
    <form noValidate onSubmit={handleSubmit} aria-label="Newsletter signup" className="mt-8 lg:mt-11.25">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (error) setError(undefined);
            if (status === "success") setStatus("idle");
          }}
          aria-invalid={error ? true : undefined}
          aria-describedby={messageId}
          className={cn(
            "h-13 w-full rounded-full border bg-white px-6 text-body-m text-neutral-950 outline-none transition-colors placeholder:text-neutral-950 focus-visible:border-primary-800 focus-visible:ring-2 focus-visible:ring-primary-800/20 focus-visible:outline-none sm:w-94",
            error ? "border-danger" : "border-neutral-200",
          )}
        />
        <Button type="submit" disabled={status === "submitting"} className="self-start">
          {status === "submitting" ? "Sending…" : "Search"}
        </Button>
      </div>
      <p
        id={messageId}
        role={error ? "alert" : "status"}
        className={cn(
          "text-body-s",
          error || status === "success" ? "mt-3" : "sr-only",
          error ? "text-danger" : "text-primary-800",
        )}
      >
        {error ?? (status === "success" ? "Thanks for subscribing! Check your inbox for updates." : "")}
      </p>
      <p className="mt-6 max-w-126 text-body-xs text-neutral-950">
        By subscribing, you agree to our Privacy Policy and consent to receive updates from our
        company.
      </p>
    </form>
  );
}

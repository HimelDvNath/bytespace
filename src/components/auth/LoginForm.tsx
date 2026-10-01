"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/buttons/Button";
import { FacebookIcon, GoogleIcon } from "@/components/icons";
import { validateEmail, validatePassword } from "@/lib/validation";
import { AuthFormHeader } from "./AuthFormHeader";
import { AuthSuccess } from "./AuthSuccess";
import { TextField } from "./TextField";
import { useValidatedForm } from "./useValidatedForm";

const socialProviders = [
  { name: "Facebook", icon: FacebookIcon },
  { name: "Google", icon: GoogleIcon },
] as const;

export function LoginForm() {
  const { register, handleSubmit, status, isSubmitting } = useValidatedForm({
    email: validateEmail,
    password: validatePassword,
  });
  const [socialNotice, setSocialNotice] = useState<string>();

  return (
    <div className="flex flex-col gap-12 xl:min-h-[683px] xl:justify-between">
      <div className="flex flex-col gap-10">
        <AuthFormHeader eyebrow="Sign In" title="Welcome Back" />
        {status === "success" ? (
          <AuthSuccess
            title="You're signed in"
            message="Welcome back to ByteSpace. Pick up your courses right where you left off."
          />
        ) : (
          <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-6">
            <TextField
              label="Email"
              type="email"
              autoComplete="email"
              placeholder="designer@example.com"
              {...register("email")}
            />
            <TextField
              label="Password"
              type="password"
              autoComplete="current-password"
              placeholder="********"
              {...register("password")}
            />
            <Button type="submit" disabled={isSubmitting} className="self-end">
              {isSubmitting ? "Signing In…" : "Sign In"}
            </Button>
          </form>
        )}
      </div>

      <div className="flex flex-col items-center gap-10">
        <div className="flex w-full items-center gap-2.75" role="separator" aria-label="or">
          <span className="h-px flex-1 bg-divider" />
          <span aria-hidden="true" className="text-body-l text-muted">
            or
          </span>
          <span className="h-px flex-1 bg-divider" />
        </div>
        <div className="flex gap-4">
          {socialProviders.map(({ name, icon: Icon }) => (
            <button
              key={name}
              type="button"
              aria-label={`Continue with ${name}`}
              onClick={() =>
                setSocialNotice(`${name} sign-in isn't available yet. Please use your email and password.`)
              }
              className="flex size-18 items-center justify-center rounded-3xl border border-divider text-black transition-colors hover:border-neutral-400 hover:bg-neutral-50"
            >
              <Icon className="size-10" />
            </button>
          ))}
        </div>
        <p role="status" className={socialNotice ? "text-center text-body-s text-neutral-700" : "sr-only"}>
          {socialNotice}
        </p>
      </div>

      <p className="text-center text-body-m text-muted">
        New user?{" "}
        <Link href="/register" className="rounded-sm text-primary-800 hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  );
}

"use client";

import Link from "next/link";
import { Button } from "@/components/buttons/Button";
import { validateEmail, validateFullName, validatePassword } from "@/lib/validation";
import { AuthFormHeader } from "./AuthFormHeader";
import { AuthSuccess } from "./AuthSuccess";
import { TextField } from "./TextField";
import { useValidatedForm } from "./useValidatedForm";

export function RegisterForm() {
  const { register, handleSubmit, status, isSubmitting } = useValidatedForm({
    fullName: validateFullName,
    email: validateEmail,
    password: validatePassword,
  });

  return (
    <div className="flex flex-col gap-12 xl:min-h-[672px] xl:justify-between">
      <div className="flex flex-col gap-10">
        <AuthFormHeader eyebrow="Create an Account" title="Welcome to ByteSpace" />
        {status === "success" ? (
          <AuthSuccess
            title="Your account is ready"
            message="Welcome to ByteSpace! Start exploring hundreds of courses from our creators."
          />
        ) : (
          <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-6">
            <TextField
              label="Full Name"
              type="text"
              autoComplete="name"
              placeholder="Jamie Davis"
              {...register("fullName")}
            />
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
              autoComplete="new-password"
              placeholder="********"
              {...register("password")}
            />
            <Button type="submit" disabled={isSubmitting} className="self-end">
              {isSubmitting ? "Creating…" : "Continue"}
            </Button>
          </form>
        )}
      </div>

      <p className="text-center text-body-m text-neutral-700">
        Already have an account?{" "}
        <Link href="/login" className="rounded-sm text-primary-800 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}

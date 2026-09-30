"use client";

import { useState, type ChangeEvent, type FocusEvent, type FormEvent } from "react";
import { simulateRequest } from "@/lib/validation";

type Validator = (value: string) => string | undefined;
type FormStatus = "idle" | "submitting" | "success";

export function useValidatedForm<Field extends string>(validators: Record<Field, Validator>) {
  const fields = Object.keys(validators) as Field[];
  const emptyValues = Object.fromEntries(fields.map((field) => [field, ""])) as Record<Field, string>;

  const [values, setValues] = useState(emptyValues);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  function validateField(field: Field, value: string) {
    setErrors((current) => ({ ...current, [field]: validators[field](value) }));
  }

  function register(field: Field) {
    return {
      name: field,
      value: values[field],
      error: errors[field],
      onChange: (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setValues((current) => ({ ...current, [field]: value }));
        if (errors[field]) validateField(field, value);
      },
      onBlur: (event: FocusEvent<HTMLInputElement>) => {
        if (event.target.value) validateField(field, event.target.value);
      },
    };
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = Object.fromEntries(
      fields.map((field) => [field, validators[field](values[field])]),
    ) as Partial<Record<Field, string>>;
    setErrors(nextErrors);

    const firstInvalid = fields.find((field) => nextErrors[field]);
    if (firstInvalid) {
      event.currentTarget.querySelector<HTMLInputElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    simulateRequest().then(() => setStatus("success"));
  }

  return { register, handleSubmit, status, isSubmitting: status === "submitting" };
}

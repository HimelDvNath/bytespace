import { ButtonLink } from "@/components/buttons/Button";
import { CheckCircleIcon } from "@/components/icons";

export function AuthSuccess({ title, message }: { title: string; message: string }) {
  return (
    <div role="status" className="flex flex-col items-start gap-4 rounded-2xl bg-primary-50 p-6">
      <CheckCircleIcon className="size-10 text-primary-800" />
      <p className="font-display text-heading-xs font-semibold text-neutral-950">{title}</p>
      <p className="text-body-m text-neutral-700">{message}</p>
      <ButtonLink href="/">Continue to ByteSpace</ButtonLink>
    </div>
  );
}

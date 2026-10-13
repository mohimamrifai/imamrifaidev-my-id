"use client";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export function DeleteButton({
  confirmMessage,
}: {
  confirmMessage?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="ghost"
      size="sm"
      className={confirmMessage ? "text-destructive" : undefined}
      disabled={pending}
      onClick={(event) => {
        if (confirmMessage && !window.confirm(confirmMessage)) {
          event.preventDefault();
        }
      }}
    >
      <Trash2 className="size-3" />
    </Button>
  );
}
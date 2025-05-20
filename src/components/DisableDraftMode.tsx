"use client";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { disableDraftMode } from "@/app/actions";

export function DisableDraftMode() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  if (window !== window.parent || !!window.opener) {
    return null;
  }

  const disable = () =>
    startTransition(async () => {
      await disableDraftMode();
      router.refresh();
    });

  return (
    <div>
      {pending ? (
        ""
      ) : (
        <button className="fixed bottom-0 right-4 bg-gray-50 py-2 z-50" type="button" onClick={disable}>
          Disable draft mode
        </button>
      )}
    </div>
  );
}

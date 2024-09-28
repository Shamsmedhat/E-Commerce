"use client";

import validateSession from "@/lib/utils/validate-session";
import { useEffect } from "react";

type ValidateResponseProps = {
  message: string;
  callbackUrl?: string;
};

export default function ValidateResponse({
  message,
  callbackUrl,
}: ValidateResponseProps) {
  useEffect(() => {
    (async () => {
      await validateSession(message, callbackUrl);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>Loading...</>;
}

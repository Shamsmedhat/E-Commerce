"use client";

import { AppError } from "@/lib/utils/catchAsync";
import validateSession from "@/lib/utils/validate-session";
import { useEffect } from "react";
import { CgSpinnerAlt } from "react-icons/cg";

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
      try {
        await validateSession(message, callbackUrl);
      } catch (error) {
        console.log(message, 500);
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <CgSpinnerAlt className="animate-spin" size={50} color="#febf31" />
    </div>
  );
}

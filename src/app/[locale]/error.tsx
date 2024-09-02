"use client"; // Error boundaries must be Client Components

import MyButton from "@/components/common/MyButton";
import { Ban } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-dvh w-full items-center justify-center bg-slate-200">
      <div className="flex flex-col items-center justify-center rounded-md bg-secondary p-8 text-center shadow-md">
        <div className="mb-10 w-fit rounded-full bg-primary/70 p-4">
          <Ban className="text-primary-foreground" width={100} height={100} />
        </div>
        <h2 className="mb-8 text-xl font-black">
          نأســف لقد حدث خطـأ ما يمكنك العودة للصفـحة الرئيسية لمواصلة التصـفح!
        </h2>
        <div className="flex items-center justify-center gap-5">
          <MyButton
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            المحـاولة مرة اخري ؟
          </MyButton>
          <Link
            href="/"
            className="font-semibold text-primary-foreground underline"
          >
            العـودة الي الصفـحة الرئيـسية ؟
          </Link>
        </div>
      </div>
    </div>
  );
}

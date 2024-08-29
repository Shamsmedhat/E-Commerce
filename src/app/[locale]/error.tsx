"use client"; // Error boundaries must be Client Components

import MyButton from "@/components/common/MyButton";
import { Ban } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-dvh bg-slate-200 flex items-center justify-center">
      <div className="bg-secondary p-8 text-center rounded-md shadow-md flex flex-col justify-center items-center">
        <div className="bg-primary/70 rounded-full w-fit p-4 mb-10">
          <Ban
            className="text-primary-foreground"
            width={100}
            height={100}
          />
        </div>
        <h2 className="font-black text-xl mb-8">نأســف لقد حدث خطـأ ما يمكنك العودة للصفـحة الرئيسية لمواصلة التصـفح!</h2>
        <div className="flex gap-5 justify-center items-center">
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
            className="underline font-semibold text-primary-foreground"
          >
            العـودة الي الصفـحة الرئيـسية ؟
          </Link>
        </div>
      </div>
    </div>
  );
}

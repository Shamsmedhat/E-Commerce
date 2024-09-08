"use client";

export default function error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <div className="container text-center text-lg text-red-700">{error?.message}</div>;
}

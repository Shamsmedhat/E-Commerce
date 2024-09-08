"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function RefreshRouter() {
  const router = useRouter();

  return (
    <Button variant="outline" onClick={router.refresh}>
      Refresh Router
    </Button>
  );
}

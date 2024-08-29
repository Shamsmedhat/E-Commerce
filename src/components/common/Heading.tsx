import { cn } from "@/lib/utils";
import React from "react";

type Heading = {
  className?: string;
  children: string;
};
export default function Heading({ className, children }: Heading) {
  return <h2 className={cn("font-extrabold text-primary-foreground text-3xl my-4", className)}>{children}</h2>;
}

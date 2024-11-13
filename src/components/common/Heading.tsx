"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { useMediaQuery } from "react-responsive";

type Heading = {
  className?: string;
  children: string;
};
export default function Heading({ className, children }: Heading) {
  const isPhoneScreen = useMediaQuery({ query: "(min-width: 450px)" });
  return (
    <h2
      className={cn(
        isPhoneScreen ? "text-2xl" : "text-lg",
        className,
        "my-4 font-extrabold text-primary-foreground dark:text-white sm:text-3xl",
      )}
    >
      {children}
    </h2>
  );
}

"use client";
import React from "react";
import { Button } from "../ui/button";
import LoadingSpinner from "./LoadingSpinner";

type ButtonType = {
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isPending?: boolean | undefined;
  className: string;
  children: any;
};

export default function MyButton({
  size = "lg",
  onClick,
  isPending = false,
  className,
  children,
}: ButtonType) {
  return (
    <Button
      variant="default"
      size={size}
      disabled={isPending}
      onClick={onClick}
      className={className}
    >
      {children} {isPending && <LoadingSpinner />}
    </Button>
  );
}

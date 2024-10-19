"use client";

import * as React from "react";
import { LuMoon, LuSun } from "react-icons/lu";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";

export function ModeToggler() {
  const { setTheme } = useTheme();
  const t = useTranslations();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="h-7 w-7 shadow-sm sm:h-10 sm:w-10"
        >
          <LuSun className="h-[0.7rem] w-[0.7rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 sm:h-[1.2rem] sm:w-[1.2rem]" />
          <LuMoon className="absolute h-[0.7rem] w-[0.7rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 sm:h-[1.2rem] sm:w-[1.2rem]" />
          <span className="sr-only">{t("vQbZFiSiqsnjBS6MRmAIK")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="cursor-pointer rtl:justify-end"
        >
          {t("syFHTRuZoxIXtQNiuLT4R")}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="cursor-pointer rtl:justify-end"
        >
          {t("NcZCjWbHgEt5taOcDRN4a")}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="cursor-pointer rtl:justify-end"
        >
          {t("5f1LzJQ1qDYS1k8dpQa6I")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

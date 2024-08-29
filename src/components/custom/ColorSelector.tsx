"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Palette } from "lucide-react";
import { colors } from "../../lib/constants/colors";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

export function ColorSelector() {
  React.useEffect(() => {
    const color = localStorage.getItem("color");

    if (color) handleClick(color);
  }, []);

  function handleClick(color: string) {
    const pickedColor = colors.find((c) => c.name === color)!;

    document.documentElement.setAttribute("style", pickedColor.light);
    document.querySelector(".dark")?.setAttribute("style", pickedColor.dark);

    localStorage.setItem("color", color);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
        >
          <Palette className="text-primary" />
          <span className="sr-only">Change Color</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex items-center justify-center flex-wrap gap-1 min-w-[auto] max-w-32">
        {colors.map((color) => (
          <TooltipProvider
            key={color.name}
            delayDuration={100}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className={`cursor-pointer block w-6 h-6 rounded-full`}
                  style={{ backgroundColor: `hsl(${color.primary.replaceAll(" ", ", ")})` }}
                  onClick={() => handleClick(color.name)}
                ></button>
              </TooltipTrigger>
              <TooltipContent
                sideOffset={2}
                className="font-semibold"
                style={{ color: `hsl(${color.primary.replaceAll(" ", ", ")})` }}
              >
                <p>
                  {/* {color.name[0].toUpperCase()}
                  {color.name.split("").slice(1).join("")} */}
                  {color.arName}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

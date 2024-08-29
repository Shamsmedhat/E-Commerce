"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Link } from "@/navigarion";
import { categories } from "@/_lib/data";
import { usePathname } from "@/navigarion";
import { useLocale } from "next-intl";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <NavigationMenu className="justify-center text-center">
      <NavigationMenuList>
        {categories.map((category) => (
          <NavigationMenuItem key={category.name} className="!mx-7">
            <Link href={`${category.path}`} legacyBehavior passHref>
              <NavigationMenuLink
                className={`flex items-center justify-center ${
                  pathname === `${category.path}`
                    ? "text-primary"
                    : "text-primary-foreground/70"
                } gap-2 py-3 transition-all ease-out hover:text-primary`}
              >
                <span className="hidden lg:block lg:text-[1rem]">
                  {category.name}
                </span>
                <span>{<category.icon />}</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

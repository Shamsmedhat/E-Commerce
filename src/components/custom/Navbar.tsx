"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Link } from "@/navigarion";
// import { categories } from "@/lib/utils/data-v1";
import { usePathname } from "@/navigarion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useLocale } from "next-intl";

export default function Navbar({ categories, pagination }: CategoriesData) {
  // get page path name
  const pathname = usePathname();

  // get locale to render based on it the category name
  const locale = useLocale();
  const isEn = locale === "en";

  // get the url slugs as an array to catch the category id for conditional UIs
  const categoryPageUrl = pathname.split("/");

  // get the id by access the last slug witch is the category id
  const categoryPageId = categoryPageUrl[categoryPageUrl.length - 1];

  return (
    <NavigationMenu className="justify-center !py-0 text-center">
      <NavigationMenuList>
        {/* map over categories for display its info */}
        {categories?.map((c) => (
          <NavigationMenuItem key={c._id} className="!mx-0">
            <Link href={`/categories/${c._id}`} legacyBehavior passHref>
              <NavigationMenuLink
                // make the text primary color when the user in the category page that has beign selected
                className={cn(
                  categoryPageId === c._id && "bg-primary/60",
                  "flex items-center justify-center gap-2 px-6 py-3 text-primary-foreground/70 transition-all ease-out hover:bg-primary/60",
                )}
              >
                {/* render the category name in en or ar based on the data and the current locale */}

                <span className="hidden lg:block lg:text-[1rem]">
                  {isEn
                    ? c.translations[0].data.name
                    : c.translations[1].data.name}
                </span>

                <Image
                  src={c.image}
                  alt=""
                  width={25}
                  height={25}
                  className={cn(
                    categoryPageId === c._id
                      ? "text-primary"
                      : "text-primary-foreground/70",
                  )}
                />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

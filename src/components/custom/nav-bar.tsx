"use client";

import Image from "next/image";

// get web locale
import { useLocale } from "next-intl";

//navigation
import { usePathname } from "@/navigarion";
import { Link } from "@/navigarion";

// ui
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Navbar({ categories, pagination }: CategoriesData) {
  // get locale to render based on it the category name
  const locale = useLocale();
  const isEn = locale === "en";

  // get page path name
  const pathname = usePathname();

  // get the url slugs as an array to catch the category id for conditional UIs
  const categoryPageUrl = pathname.split("/");

  // get the id by access the last slug witch is the category id by remove it and return it
  const categoryPageId = categoryPageUrl.pop();

  // Handle Empty Categories
  if (!categories?.length) {
    return (
      <div>
        <h1>No categories available</h1>
      </div>
    );
  }

  //   return (
  //     <NavigationMenu className="justify-center !py-0 text-center">
  //       <NavigationMenuList>
  //         {/* map over categories for display its info */}
  //         {categories?.map((c) => (
  //           <NavigationMenuItem key={c._id} className="!mx-0">
  //             <Link href={`/categories/${c._id}`} legacyBehavior passHref>
  //               <NavigationMenuLink
  //                 // make the text primary color when the user in the category page that has beign selected
  //                 className={cn(
  //                   categoryPageId === c._id && "bg-primary/60",
  //                   isEn && "flex-row-reverse",
  //                   "flex items-center justify-center gap-2 px-6 py-3 text-primary-foreground/80 transition-all ease-out hover:bg-primary/60",
  //                 )}
  //               >
  //                 {/* render the category name in en or ar based on the data and the current locale */}
  //                 <span className="hidden lg:block lg:text-[1rem]">
  //                   {c.translations.data.name}
  //                 </span>

  //                 {/* category image */}
  //                 <Image
  //                   src={c.image}
  //                   alt={c.translations.data.name}
  //                   width={25}
  //                   height={25}
  //                 />
  //               </NavigationMenuLink>
  //             </Link>
  //           </NavigationMenuItem>
  //         ))}
  //       </NavigationMenuList>
  //     </NavigationMenu>
  //   );
  // }

  return (
    <ul className="flex justify-center !py-0 text-center">
      {/* map over categories for display its info */}
      {categories?.map(
        (c) => (
          console.log(
            "c.translations.data.name}/${c.translations._id",
            c.translations.data.name,
            c.translations._id,
          ),
          (
            <li key={c._id} className="!mx-0">
              <Link href={`/categories/${c._id}`}>
                <div
                  // make the text primary color when the user in the category page that has beign selected
                  className={cn(
                    categoryPageId === c._id && "bg-primary/60",
                    isEn && "flex-row-reverse",
                    "flex items-center justify-center gap-2 px-6 py-3 text-primary-foreground/80 transition-all ease-out hover:bg-primary/60",
                  )}
                >
                  {/* render the category name in en or ar based on the data and the current locale */}
                  <span className="hidden lg:block lg:text-[1rem]">
                    {c.translations.data.name}
                  </span>

                  {/* category image */}
                  <Image
                    src={c.image}
                    alt={c.translations.data.name}
                    width={25}
                    height={25}
                  />
                </div>
              </Link>
            </li>
          )
        ),
      )}
    </ul>
  );
}

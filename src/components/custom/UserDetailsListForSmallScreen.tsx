"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  LuChevronDown,
  LuCreditCard,
  LuSettings,
  LuSettings2,
  LuShoppingCart,
  LuUser,
} from "react-icons/lu";
import { Link } from "@/navigarion";
import SignOut from "@/app/[locale]/(client)/(homepage)/_components/SignOut";
import { useState } from "react";
import { useTranslations } from "next-intl";
import LangBtn from "./LangBtn";

export default function UserDetailsListForSmallScreen() {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const t = useTranslations();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="focus mt-1 flex items-center gap-1 px-2">
          {t("OP29qgwvwjQThZqFJ8JrS")} <LuChevronDown className="w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          {/* Lang btn in small screen */}
          <DropdownMenuItem>
            <div>
              <li className="flex h-14 items-center justify-center border-e pe-6 font-semibold">
                <LangBtn />
              </li>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem disabled={isLoggedOut}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="focus mt-1 flex items-center gap-1 px-2">
                  {t("6_d33l3IKBE2Vu7Qw4u9W")} <LuChevronDown className="w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link
                      href="/profile"
                      className="flex w-full items-center gap-2 rtl:flex-row-reverse"
                    >
                      <LuUser className="h-4 w-4" />
                      <span>{t("A2LnQ7Mg56cFySI6-yGyD")}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/profile"
                      className="flex w-full items-center gap-2 rtl:flex-row-reverse"
                    >
                      <LuCreditCard className="h-4 w-4" />
                      <span>{t("Y30H6LYenliZ-2M0l6pQB")}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/profile"
                      className="flex w-full items-center gap-2 rtl:flex-row-reverse"
                    >
                      <LuSettings className="h-4 w-4" />
                      <span>{t("LADjF8050Hs5EOK91d2We")}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/dashboard"
                      className="flex w-full items-center gap-2 rtl:flex-row-reverse"
                    >
                      <LuSettings2 className="h-4 w-4" />
                      <span>{t("_YASznrZi5hx4_-IQJ8T2")}</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                {/* Logout section & languages */}
                <DropdownMenuItem>
                  <SignOut
                    isLoggedOut={isLoggedOut}
                    setIsLoggedOut={setIsLoggedOut}
                  />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </DropdownMenuItem>

          {/* cart in small screen */}

          <DropdownMenuItem>
            <Link href="/cart" className="relative">
              <span className="absolute right-0 top-1 flex aspect-square min-h-3 min-w-3 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-primary p-1 text-xs text-white">
                77
              </span>
              <LuShoppingCart />
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignOut isLoggedOut={isLoggedOut} setIsLoggedOut={setIsLoggedOut} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

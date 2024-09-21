"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";

export default function UserDropmenu() {
  const session = useSession();
  const t = useTranslations();
  return (
    <DropdownMenu>
      {/* dropmenu trigger setting */}
      <DropdownMenuTrigger asChild>
        <button className="focus mt-1 flex items-center gap-1 px-2">
          {t("OP29qgwvwjQThZqFJ8JrS")} <LuChevronDown className="w-4" />
        </button>
      </DropdownMenuTrigger>

      {/*  */}
      <DropdownMenuContent>
        {/* profile */}
        <DropdownMenuItem>
          <Link
            href="/profile"
            className="flex w-full items-center gap-2 rtl:flex-row-reverse"
          >
            <LuUser className="h-4 w-4" />
            <span>{t("A2LnQ7Mg56cFySI6-yGyD")}</span>
          </Link>
        </DropdownMenuItem>

        {/* cart */}
        <DropdownMenuItem>
          <Link href="/cart" className="relative">
            <span className="absolute right-0 top-1 flex aspect-square min-h-3 min-w-3 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-primary p-1 text-xs text-white">
              77
            </span>
            <LuShoppingCart />
          </Link>
        </DropdownMenuItem>

        {/* payments */}
        <DropdownMenuItem>
          <Link
            href="/profile"
            className="flex w-full items-center gap-2 rtl:flex-row-reverse"
          >
            <LuCreditCard className="h-4 w-4" />
            <span>{t("Y30H6LYenliZ-2M0l6pQB")}</span>
          </Link>
        </DropdownMenuItem>

        {/* dashboard */}
        <DropdownMenuItem>
          <Link
            href="/dashboard"
            className="flex w-full items-center gap-2 rtl:flex-row-reverse"
          >
            <LuSettings2 className="h-4 w-4" />
            <span>{t("_YASznrZi5hx4_-IQJ8T2")}</span>
          </Link>
        </DropdownMenuItem>

        {/* settings */}
        <DropdownMenuItem>
          <Link
            href="/profile"
            className="flex w-full items-center gap-2 rtl:flex-row-reverse"
          >
            <LuSettings className="h-4 w-4" />
            <span>{t("LADjF8050Hs5EOK91d2We")}</span>
          </Link>
        </DropdownMenuItem>

        {/* Logout  */}
        <DropdownMenuItem>
          <SignOut />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

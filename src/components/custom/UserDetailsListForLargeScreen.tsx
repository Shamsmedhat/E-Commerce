"use client";
import { Link, usePathname, useRouter } from "@/navigarion";

import {
  LuChevronDown,
  LuCreditCard,
  LuSettings,
  LuSettings2,
  LuUser,
} from "react-icons/lu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SignOut from "@/app/[locale]/(client)/(homepage)/_components/SignOut";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";
import { ROLE } from "@/lib/constants/roles";

export default function UserDetailsListForLargeScreen() {
  const t = useTranslations();
  const session = useSession();
  return (
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
          {session.data?.user.role === ROLE.ADMIN ||
          session.data?.user.role === ROLE.OWNER ? (
            //TODO make all links above the items to prevent the menu not auto close
            <Link href="/dashboard">
              <DropdownMenuItem className="flex w-full items-center gap-2 rtl:flex-row-reverse">
                <LuSettings2 className="h-4 w-4" />
                <span>{t("_YASznrZi5hx4_-IQJ8T2")}</span>
              </DropdownMenuItem>
            </Link>
          ) : null}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* Logout section & langues*/}
        <DropdownMenuItem>
          <SignOut />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

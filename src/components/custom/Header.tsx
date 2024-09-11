import { Link, usePathname, useRouter } from "@/navigarion";
import { Search } from "@/components/ui/search";

import {
  LuChevronDown,
  LuCreditCard,
  LuLogOut,
  LuSettings,
  LuSettings2,
  LuShoppingCart,
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
import { ColorSelector } from "./ColorSelector";
import SignOut from "@/app/[locale]/(client)/(homepage)/_components/SignOut";
import Navbar from "./Navbar";
import { ModeToggler } from "./ModeToggler";
import LangBtn from "./LangBtn";
import { getTranslations } from "next-intl/server";
import Logo from "./Logo";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions/AuthOptions";
import UserDetailsListForSmallScreen from "./UserDetailsListForSmallScreen";
import UserDetailsListForLargeScreen from "./UserDetailsListForLargeScreen";

export default async function Header() {
  const t = await getTranslations();

  const session = await getServerSession(authOptions);

  return (
    <header>
      {/* Head seaction ============================================================= */}

      <div className="border-b bg-background">
        <ul className="container flex items-center justify-between gap-4 py-8">
          {/* Logo ============================================================= */}

          <Logo />

          {/* Search ============================================================= */}

          <li>
            <Search placeholder={t("0ComiVhfwjBnZHsJ_RUxH")} />
          </li>

          {/* User section and info ============================================================= */}

          <li>
            {/* //? display a setting drop menu if the screen is small */}

            <ul className="block md:hidden">
              {!session ? (
                <li className="flex h-14 flex-col items-center justify-center border-e px-6">
                  <Link href="/login">{t("x5CK85cNmYaHmtijJxw1l")}</Link>
                </li>
              ) : (
                <UserDetailsListForSmallScreen />
              )}
            </ul>

            {/* //? display default setting in large screen */}

            <ul className="hidden md:flex">
              {/* Login section & langues*/}

              <LangBtn />
              {/* //TODO need to implement the Auth here */}
              {!session ? (
                <li className="flex h-14 flex-col items-center justify-center border-e px-6">
                  <Link href="/login">{t("x5CK85cNmYaHmtijJxw1l")}</Link>
                </li>
              ) : (
                <li className="flex h-14 flex-col items-center justify-center border-e px-6">
                  <span className="text-sm text-muted-foreground">
                    {t("GA5q4VAGgkQx9JSIoCH64")} {session.user?.name}
                  </span>

                  {/* Account dropmenu */}

                  <UserDetailsListForLargeScreen />
                </li>
              )}

              {/* User cart  ======================================= */}
              <li className="flex h-14 items-center justify-center border-e px-6 font-semibold">
                <Link href="/cart" className="relative">
                  <span className="absolute right-0 top-1 flex aspect-square min-h-3 min-w-3 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-primary p-1 text-xs text-white">
                    77
                  </span>
                  <LuShoppingCart />
                </Link>
              </li>

              {/* color selection ==================================*/}
              <li className="flex h-14 items-center justify-center gap-2 ps-6 font-semibold">
                <ColorSelector />
                <ModeToggler />
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* NavBar        ============================================================= */}

      <div className="border-b bg-background">
        <Navbar />
      </div>
    </header>
  );
}

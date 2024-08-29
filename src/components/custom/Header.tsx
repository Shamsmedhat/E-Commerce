import Image from "next/image";
import { Link } from "@/navigarion";
import { Search } from "@/components/ui/search";
import {
  ChevronDown,
  CreditCard,
  LogOut,
  Settings,
  Settings2,
  ShoppingCart,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColorSelector } from "./ColorSelector";
import SignOut from "@/app/[locale]/(homepage)/_components/SignOut";
import Navbar from "./Navbar";
import { ModeToggler } from "./ModeToggler";
import LangBtn from "./LangBtn";
import { getTranslations } from "next-intl/server";

export default async function Header() {
  const t = await getTranslations();
  return (
    <header>
      {/* Head seaction ============================================================= */}

      <div className="border-b bg-background">
        <ul className="container flex items-center justify-between gap-4 py-8">
          {/* Logo ============================================================= */}

          <li>
            <Link
              href="/"
              className="flex items-center gap-1 text-lg font-bold uppercase"
            >
              <Image
                src="/assets/Zeronet_logo.png"
                alt="E-Commerce"
                width="80"
                height="80"
                priority
              />
            </Link>
          </li>

          {/* Search ============================================================= */}

          <li>
            <Search placeholder="ابحث عن منتج ما..." />
          </li>

          {/* User section and info ============================================================= */}

          <li>
            {/* display a setting drop menu if the screen is small */}

            <ul className="block md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="focus mt-1 flex items-center gap-1 px-2">
                    {t("OP29qgwvwjQThZqFJ8JrS")} <ChevronDown className="w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    {/* Lang btn in small screen */}
                    <DropdownMenuItem>
                      <LangBtn />
                    </DropdownMenuItem>
                    {/* Account details in small screen */}
                    <DropdownMenuItem>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="focus mt-1 flex items-center gap-1 px-2">
                            تفاصيل حسابك <ChevronDown className="w-4" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuGroup>
                            <DropdownMenuItem>
                              <Link
                                href="/profile"
                                className="flex w-full items-center gap-2 rtl:flex-row-reverse"
                              >
                                <User className="h-4 w-4" />
                                <span>الملف الشخصي</span>
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link
                                href="/profile"
                                className="flex w-full items-center gap-2 rtl:flex-row-reverse"
                              >
                                <CreditCard className="h-4 w-4" />
                                <span>عمليات الدفع</span>
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link
                                href="/profile"
                                className="flex w-full items-center gap-2 rtl:flex-row-reverse"
                              >
                                <Settings className="h-4 w-4" />
                                <span>الإعدادات</span>
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link
                                href="/dashboard"
                                className="flex w-full items-center gap-2 rtl:flex-row-reverse"
                              >
                                <Settings2 className="h-4 w-4" />
                                <span>لوحة التحكم</span>
                              </Link>
                            </DropdownMenuItem>
                          </DropdownMenuGroup>

                          <DropdownMenuSeparator />

                          {/* Logout section & langues*/}
                          <DropdownMenuItem>
                            <SignOut />
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
                        <ShoppingCart />
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />

                  {/* Logout section & langues*/}
                  <DropdownMenuItem>
                    <SignOut />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </ul>

            {/* display default setting in large screen */}

            <ul className="hidden md:flex">
              {/* Login section & langues*/}
              <LangBtn />
              {/* //TODO need to implement the Auth here */}
              {false ? (
                <li className="flex h-14 flex-col items-center justify-center border-e px-6">
                  <Link href="/login">تسـجيل الدخول</Link>
                </li>
              ) : (
                <li className="flex h-14 flex-col items-center justify-center border-e px-6">
                  <span className="text-sm text-muted-foreground">
                    مرحبًا يا
                  </span>

                  {/* Account dropmenu */}

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="focus mt-1 flex items-center gap-1 px-2">
                        تفاصيل حسابك <ChevronDown className="w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <Link
                            href="/profile"
                            className="flex w-full items-center gap-2 rtl:flex-row-reverse"
                          >
                            <User className="h-4 w-4" />
                            <span>الملف الشخصي</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            href="/profile"
                            className="flex w-full items-center gap-2 rtl:flex-row-reverse"
                          >
                            <CreditCard className="h-4 w-4" />
                            <span>عمليات الدفع</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            href="/profile"
                            className="flex w-full items-center gap-2 rtl:flex-row-reverse"
                          >
                            <Settings className="h-4 w-4" />
                            <span>الإعدادات</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            href="/dashboard"
                            className="flex w-full items-center gap-2 rtl:flex-row-reverse"
                          >
                            <Settings2 className="h-4 w-4" />
                            <span>لوحة التحكم</span>
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>

                      <DropdownMenuSeparator />

                      {/* Logout section & langues*/}
                      <DropdownMenuItem>
                        <SignOut />
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              )}
              {/* User cart */}
              <li className="flex h-14 items-center justify-center border-e px-6 font-semibold">
                <Link href="/cart" className="relative">
                  <span className="absolute right-0 top-1 flex aspect-square min-h-3 min-w-3 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-primary p-1 text-xs text-white">
                    77
                  </span>
                  <ShoppingCart />
                </Link>
              </li>
              {/* color selection */}
              <li className="flex h-14 items-center justify-center gap-2 ps-6 font-semibold">
                <ColorSelector />
                <ModeToggler />
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* NavBar ============================================================= */}

      <div className="border-b bg-background">
        <Navbar />
      </div>
    </header>
  );
}

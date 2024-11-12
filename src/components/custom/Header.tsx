import { Link } from "@/navigarion";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/config/auth-options";

// translations
import { getTranslations } from "next-intl/server";

// ui
import { Search } from "@/components/ui/search";
import { LuHeart, LuShoppingCart } from "react-icons/lu";
import { ModeToggler } from "./ModeToggler";
import LangBtn from "./LangBtn";
import Logo from "./Logo";
import LoginHeaderSection from "./LoginHeaderSection";

// data
// import { getCategoriesData } from "@/lib/utils/data/categories-data";
import Navbar from "./nav-bar";
import { getCartAction } from "@/lib/actions/cart-actions";
import { getCategoriesAction } from "@/lib/actions/categories-actions";
import { getWishlistAction } from "@/lib/actions/wishlist.actions";

export default async function Header() {
  // translation
  const t = await getTranslations();

  let cart;
  let wishlist;
  let numbersOfitemsInCart = 0;
  let numbersOfitemsInWishlist = 0;

  try {
    [cart, wishlist] = await Promise.allSettled([
      getCartAction(),
      getWishlistAction(),
    ]);

    if (cart.status === "fulfilled" && !("statusCode" in cart.value)) {
      numbersOfitemsInCart = cart.value.cart.items.length;
    } else if (cart.status === "rejected") {
      console.error("Error fetching cart:", cart.reason);
      // Fallback for cart if needed
    }

    if (wishlist.status === "fulfilled" && !("statusCode" in wishlist.value)) {
      numbersOfitemsInWishlist = wishlist.value.wishlist.length;
    } else if (wishlist.status === "rejected") {
      console.error("Error fetching wishlist:", wishlist.reason);
      // Fallback for wishlist if needed
    }
  } catch (error) {
    console.error("Unexpected error:", error);
  }

  // user session
  const session = await getServerSession(authOptions);

  //TODO make sure the data came before distructure data (categories)
  // const data = await getCategoriesData();
  const data = await getCategoriesAction();

  return (
    <header>
      {/* Head seaction ============================================================= */}
      <div className="border-b bg-background">
        {/* The heder above lg screen */}
        {/* xmd: new custom breakpoint min 850px  */}
        <ul className="container hidden flex-col items-center justify-between gap-0 py-2 xmd:flex-row xmd:gap-4 xmd:py-8 lg:flex">
          {/* Logo & Search ============================================================= */}
          <li className="flex w-full flex-grow items-center justify-start xmd:w-fit">
            <Logo />
            <div className="ms-[5rem]">
              <Search placeholder={t("0ComiVhfwjBnZHsJ_RUxH")} />
            </div>
          </li>

          {/* web and user info ============================================================= */}
          <ul className="flex flex-grow items-center justify-center align-middle">
            {/* user info or auth section*/}
            {/* li is inside for making some conditional rendering */}
            <LoginHeaderSection />

            {/* cart show if there is a session*/}
            {session && (
              <>
                <li className="flex h-14 items-center justify-center border-e px-6 font-semibold">
                  {/* Cart btn */}
                  <Link href="/cart" className="relative">
                    {numbersOfitemsInCart === 0 ? null : (
                      <span className="absolute right-0 top-1 flex aspect-square min-h-4 min-w-4 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-primary p-1 text-xs text-white dark:text-background">
                        {numbersOfitemsInCart}
                      </span>
                    )}

                    <LuShoppingCart
                      size={25}
                      strokeWidth={1.5}
                      className="transition-colors hover:text-primary"
                    />
                  </Link>
                </li>

                {/* Wishlist btn */}
                <li className="flex h-7 items-center justify-center border-e px-1 font-semibold sm:h-14 sm:px-6">
                  <Link href="/wishlist" className="relative">
                    {numbersOfitemsInWishlist === 0 ? null : (
                      <span className="absolute right-0 top-1 flex aspect-square min-h-4 min-w-4 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-primary p-1 text-xs text-white dark:text-background">
                        {numbersOfitemsInWishlist}
                      </span>
                    )}

                    <LuHeart
                      size={25}
                      strokeWidth={2}
                      className="sm-h-[25px] h-[20px] transition-colors hover:text-primary"
                    />
                  </Link>
                </li>
              </>
            )}

            {/* colors */}
            <li className="flex h-14 items-center justify-center gap-2 rounded-lg ps-6 font-semibold">
              {/* <ColorSelector /> */}
              <ModeToggler />
            </li>

            {/* lang */}
            <li className="ms-4 flex cursor-pointer items-center justify-center gap-2">
              <LangBtn />
            </li>
          </ul>
        </ul>

        {/* The heder below lg screen */}
        <ul className="container flex flex-col items-center justify-between gap-2 py-4 lg:hidden">
          {/* Logo & user info ============================================================= */}
          <li className="flex w-full flex-grow items-center justify-start">
            <Logo />
            {/* web and user info ============================================================= */}
            <ul className="flex flex-grow items-center justify-end align-middle">
              {/* user info or auth section*/}
              {/* li is inside for making some conditional rendering */}
              <LoginHeaderSection />

              {/* cart show if there is a session*/}
              {session && (
                <>
                  <li className="flex h-7 items-center justify-center border-e px-1 font-semibold sm:h-14 sm:px-6">
                    <Link href="/cart" className="relative">
                      {numbersOfitemsInCart === 0 ? null : (
                        <span className="absolute right-0 top-1 flex aspect-square min-h-4 min-w-4 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-primary p-1 text-xs text-white dark:text-background">
                          {numbersOfitemsInCart}
                        </span>
                      )}

                      <LuShoppingCart
                        size={25}
                        strokeWidth={1.5}
                        className="sm-h-[25px] h-[20px] transition-colors hover:text-primary"
                      />
                    </Link>
                  </li>

                  <li className="flex h-7 items-center justify-center border-e px-1 font-semibold sm:h-14 sm:px-6">
                    <Link href="/wishlist" className="relative">
                      {numbersOfitemsInCart === 0 ? null : (
                        <span className="absolute right-0 top-1 flex aspect-square min-h-4 min-w-4 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-primary p-1 text-xs text-white dark:text-background">
                          {numbersOfitemsInCart}
                        </span>
                      )}

                      <LuHeart
                        size={25}
                        strokeWidth={1.5}
                        className="sm-h-[25px] h-[20px] transition-colors hover:text-primary"
                      />
                    </Link>
                  </li>
                </>
              )}

              {/* colors */}
              <li className="flex h-6 items-center justify-center gap-2 rounded-lg ps-1 font-semibold sm:h-14 sm:ps-6">
                {/* <ColorSelector /> */}
                <ModeToggler />
              </li>

              {/* lang */}
              <li className="ms-1 flex cursor-pointer items-center justify-center gap-2 sm:ms-4">
                <LangBtn />
              </li>
            </ul>
          </li>

          <div className="w-full">
            <Search placeholder={t("0ComiVhfwjBnZHsJ_RUxH")} />
          </div>
        </ul>
      </div>

      {/* NavBar ============================================================= */}

      <div className="border-b bg-background">
        <Navbar categories={data.categories} pagination={data.pagination} />
      </div>
    </header>
  );
}

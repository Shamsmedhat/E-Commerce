import { Link } from "@/navigarion";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/config/auth-options";

// translations
import { getTranslations } from "next-intl/server";

// ui
import { Search } from "@/components/ui/search";
import { LuShoppingCart } from "react-icons/lu";
import { ModeToggler } from "./ModeToggler";
import LangBtn from "./LangBtn";
import Logo from "./Logo";
import LoginHeaderSection from "./LoginHeaderSection";

// data
import { getCategoriesData } from "@/lib/utils/data/categories-data";
import Navbar from "./nav-bar";
import { getCartAction } from "@/lib/actions/cart-actions";

export default async function Header() {
  // translation
  const t = await getTranslations();

  let cart;
  let numbersOfitemsInCart = 0;

  try {
    cart = await getCartAction();

    // If cart is not an error and contains items, use the data
    if (cart && !("statusCode" in cart)) {
      numbersOfitemsInCart = cart.items.length;
    }
  } catch (error) {
    console.log("Error fetching cart:", error);
    // Continue rendering, but with cart fallback
  }

  // user session
  const session = await getServerSession(authOptions);

  //TODO make sure the data came before distructure data (categories)
  const { categories, pagination } = await getCategoriesData();

  return (
    <header>
      {/* Head seaction ============================================================= */}
      <div className="border-b bg-background">
        {/* xmd: new custom breakpoint min 850px  */}
        <ul className="container flex flex-col items-center justify-between gap-0 py-2 xmd:flex-row xmd:gap-4 xmd:py-8">
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
              <li className="flex h-14 items-center justify-center border-e px-6 font-semibold">
                <Link href="/cart" className="relative">
                  {numbersOfitemsInCart === 0 ? null : (
                    <span className="absolute right-0 top-1 flex aspect-square min-h-4 min-w-4 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-primary p-1 text-xs text-white">
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
      </div>

      {/* NavBar ============================================================= */}

      <div className="border-b bg-background">
        <Navbar categories={categories} pagination={pagination} />
      </div>
    </header>
  );
}

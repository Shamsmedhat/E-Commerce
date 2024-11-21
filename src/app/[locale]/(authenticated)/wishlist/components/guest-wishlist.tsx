"use client";

import LoadingSpinner from "@/components/common/LoadingSpinner";
import { useProductsByIds } from "@/lib/utils/data/products-data";

import { useLocale } from "next-intl";
import { useGuestCart } from "@/hooks/use-guest-cart";
import WishlistContent from "./wishlist-content";
import EmptyWishlist from "./empty-wishlist";
import { useGuestWishlist } from "@/hooks/use-guest-wishlist";

export default function GuestWishlist() {
  const locale = useLocale();
  const isEn = locale === "en";
  const guestWishlist = useGuestWishlist();

  const productIds = guestWishlist.map(
    (item: { product: string; quantity: number }) => item.product,
  );

  const {
    data: productsData,
    isError,
    isLoading,
  } = useProductsByIds(productIds);

  if (isLoading) return <LoadingSpinner />;
  if (isError)
    return <p>Error fetching wishlist products. Please try again later.</p>;

  const wishlist: WishlistData = {
    wishlist: productsData.map((p) => ({
      _id: p?.product._id ?? "",
      category: p?.product.category ?? "",
      subCategory: p?.product.subCategory ?? "",
      brand: p?.product.brand ?? "",
      cover: p?.product.cover ?? "",
      gallery:
        p?.product.gallery?.map((g) => ({
          image: g?.image ?? "",
          _id: g?._id ?? "",
        })) ?? [],
      price: p?.product.price ?? 0,
      stock: p?.product.stock ?? 0,
      sales: p?.product.sales ?? 0,
      translations: {
        language: (p?.product.translations?.language ?? "en") as "en" | "ar",
        data: {
          name: p?.product.translations?.data?.name ?? "",
          slug: p?.product.translations?.data?.slug ?? "",
          overview: p?.product.translations?.data?.overview ?? "",
        },
        _id: p?.product.translations?._id ?? "",
      },
    })),
  };

  if (wishlist?.wishlist.length === 0) {
    return <EmptyWishlist isEn={isEn} />;
  }
  return (
    <section
      className="container mt-7 flex flex-col md:flex-row"
      dir={isEn ? "ltr" : "rtl"}
    >
      <WishlistContent wishlist={wishlist} />
    </section>
  );
}

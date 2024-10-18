"use client";
import Image from "next/image";

// navigation
import { Link } from "@/navigarion";

// icones
import { LuHeart, LuScale } from "react-icons/lu";

// ui
import { TabsContent } from "@/components/ui/tabs";
import RatingStars from "@/components/common/RatingStars";
import AddToCart from "@/components/common/AddToCart";
import ProductCard from "./product-card";
import { useTranslations } from "next-intl";

// props type
type CategoriesAndProductsListProp = {
  categories: Category[];
  products: Product[] | undefined;
  isEn: boolean;
};

export default function TabNavContent({
  categories,
  products,
  isEn,
}: CategoriesAndProductsListProp) {
  const t = useTranslations();

  return (
    <div>
      {categories.map((category) => (
        <TabsContent
          key={category._id}
          value={category.translations.data.name}
          className="py-4"
        >
          {/* Filter products based on the current category */}
          <div>
            <ul className="grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-4 xsm:grid-cols-4">
              {products
                ?.map((p, i) => (
                  <ProductCard
                    key={p._id}
                    p={p}
                    i={i}
                    productKey={p._id}
                    isEn={isEn}
                  />
                ))

                // Only display 15 product for the UI by maxmum
                .slice(0, 15)}
            </ul>
          </div>

          <div className="flex w-full justify-center">
            <Link
              href={`/categories/${category._id}`}
              className="my-5 w-auto rounded-md bg-white px-6 py-2 text-center font-bold uppercase text-primary-foreground"
            >
              {t("K0t7CX8uPwXiTE8oJilMt")}
            </Link>
          </div>
        </TabsContent>
      ))}
    </div>
  );
}

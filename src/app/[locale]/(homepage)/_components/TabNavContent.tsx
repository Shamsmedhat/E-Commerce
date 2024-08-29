import React from "react";
import { categories, products } from "@/_lib/data";
import { TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import RatingStars from "./RatingStars";
import { Heart, Scale, ShoppingCartIcon } from "lucide-react";
import { Link } from "@/navigarion";
import { useTranslations } from "next-intl";

export default function TabNavContent() {
  const t = useTranslations();
  // data will be change after API arrive
  const allCategories = categories;
  const allProducts = products;
  const data = allProducts.map((ele) => ele.data);

  return (
    <>
      {allCategories.map((category) => (
        <TabsContent key={category.name} value={category.name} className="py-4">
          {/* Filter products based on the current category */}
          <div>
            <ul className="grid auto-rows-auto grid-cols-4 gap-4">
              {data
                .filter((product) => product.category === category.name)
                .map((filteredProduct, i) => (
                  <>
                    {
                      //is first product to be rendered differently
                      i === 0 ? (
                        <li
                          key={filteredProduct.name}
                          className="col-span-2 row-span-2 flex h-fit flex-col items-center justify-between bg-white p-5 shadow-sm"
                        >
                          {/* product full info */}
                          <Link href={category.path}>
                            <div className="flex h-[20rem] flex-row-reverse gap-[1.5rem]">
                              {/* product image */}
                              <div className="relative h-[20rem] w-[75%]">
                                <Image
                                  src={filteredProduct.images[0]}
                                  alt={filteredProduct.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              {/* product details */}
                              <div className="space-y-7">
                                {/* sub category */}
                                <span className="font-bold text-primary-foreground/70">
                                  {filteredProduct.subCategory}
                                </span>
                                {/* Product title */}
                                <h3 className="text-2xl font-bold text-primary-foreground">
                                  {filteredProduct.name}
                                </h3>
                                {/* Product description */}
                                <p className="text-primary-foreground/70">
                                  {filteredProduct.overview.overview
                                    .split(" ")
                                    .slice(0, 15)
                                    .join(" ")}{" "}
                                  ...
                                </p>
                                <RatingStars rate={3} />

                                {/* Priceing */}
                                <span className="flex gap-2">
                                  <span className="text-primary-foreground/40 line-through">
                                    10000 جنية
                                  </span>
                                  <span className="text-xl font-extrabold text-primary-foreground">
                                    {filteredProduct.price} جنية
                                  </span>
                                </span>
                              </div>
                            </div>
                          </Link>

                          {/* Buttons Section */}
                          <div className="flex w-full items-center justify-start gap-3">
                            <div className="w-[9.5rem]">
                              <button className="flex items-center justify-start gap-3 rounded-full bg-primary py-1 pe-4 ps-1 align-middle text-sm text-white transition-colors hover:bg-primary/80">
                                <span className="rounded-full bg-white p-2">
                                  <ShoppingCartIcon
                                    className="text-primary-foreground"
                                    size={15}
                                  />
                                </span>
                                <Link href="/cart">
                                  {t("-k0yk9GUHIDLWvq7B4mRs")}
                                </Link>
                              </button>
                            </div>
                            <button>
                              <div className="rounded-full bg-primary-foreground/20 p-2">
                                <Heart strokeWidth={1} size={18} />
                              </div>
                            </button>
                            <button>
                              <div className="rounded-full bg-primary-foreground/20 p-2">
                                <Scale strokeWidth={1} size={18} />
                              </div>
                            </button>
                          </div>
                        </li>
                      ) : //is Sec & 3rd product to be rendered differently
                      i === 1 || i === 2 ? (
                        <li
                          key={filteredProduct.name}
                          className="col-span-2 row-span-1 bg-white p-5 shadow-sm"
                        >
                          <Link href={category.path}>
                            <div>{filteredProduct.name}</div>
                            <div>{filteredProduct.category}</div>
                          </Link>
                        </li>
                      ) : (
                        //Rest of products
                        <li
                          key={filteredProduct.name}
                          className="col-span-1 row-span-1 bg-white p-5 shadow-sm"
                        >
                          <Link href={category.path}>
                            <div>{filteredProduct.name}</div>
                            <div>{filteredProduct.category}</div>
                          </Link>
                        </li>
                      )
                    }
                  </>
                ))
                // Only display 15 product for the UI by maxmum
                .slice(0, 15)}
            </ul>
          </div>

          <div className="flex w-full justify-center">
            <Link
              href=""
              className="my-5 w-auto rounded-md bg-white px-6 py-2 text-center font-bold uppercase text-primary-foreground"
            >
              أكتــشف المزيد
            </Link>
          </div>
        </TabsContent>
      ))}
    </>
  );
}

"use client";
import Image from "next/image";
import { products } from "@/lib/utils/data-v1";

// navigation
import { Link } from "@/navigarion";

// icones
import { LuHeart, LuScale } from "react-icons/lu";

// ui
import { TabsContent } from "@/components/ui/tabs";
import RatingStars from "@/components/common/RatingStars";
import AddToCart from "@/components/common/AddToCart";

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
  // data will be change after API arrive

  // const allProducts = products;
  // const data = allProducts.map((ele) => ele);
  console.log("products", products);

  return (
    <>
      {categories.map((category) => (
        <TabsContent
          key={category._id}
          value={category.translations.data.name}
          className="py-4"
        >
          {/* Filter products based on the current category */}
          <div>
            <ul className="grid auto-rows-auto grid-cols-4 gap-4">
              {products
                ?.map((p, i) => (
                  <>
                    {
                      //is first product to be rendered differently
                      i === 0 ? (
                        <li
                          key={p._id}
                          className="col-span-2 row-span-2 flex h-fit flex-col items-center justify-between bg-white p-5 shadow-sm"
                        >
                          {/* product full info */}
                          <Link href={`/product/${p._id}`}>
                            <div className="flex h-[20rem] flex-row-reverse gap-[1.5rem]">
                              {/* product image */}
                              <div className="relative h-[20rem] w-[75%]">
                                <Image
                                  src={p.cover}
                                  alt={p.translations.data.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              {/* product details */}
                              <div className="space-y-7">
                                {/* sub category */}
                                <span className="font-bold text-primary-foreground/70">
                                  {p.subCategory.translations.data.name}
                                </span>
                                {/* Product title */}
                                <h3 className="text-2xl font-bold text-primary-foreground">
                                  {p.translations.data.name}
                                </h3>
                                {/* Product description */}
                                <p className="text-primary-foreground/70">
                                  {p.translations.data.overview
                                    ?.split(" ")
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
                                    {p.price} جنية
                                  </span>
                                </span>
                              </div>
                            </div>
                          </Link>

                          {/* Buttons Section */}
                          <div className="flex w-full items-center justify-start gap-3">
                            <AddToCart />
                            <button>
                              <div className="rounded-full bg-primary-foreground/20 p-2">
                                <LuHeart strokeWidth={1} size={18} />
                              </div>
                            </button>
                            <button>
                              <div className="rounded-full bg-primary-foreground/20 p-2">
                                <LuScale strokeWidth={1} size={18} />
                              </div>
                            </button>
                          </div>
                        </li>
                      ) : //is Sec & 3rd product to be rendered differently
                      i === 1 || i === 2 ? (
                        <li
                          key={p._id}
                          className="col-span-2 row-span-1 bg-white p-5 shadow-sm"
                        >
                          <Link href={`/product/${p._id}`}>
                            <div>{p.translations.data.name}</div>
                            <div>{p.category.translations.data.name}</div>
                          </Link>
                        </li>
                      ) : (
                        //Rest of products
                        <li
                          key={p._id}
                          className="col-span-1 row-span-1 bg-white p-5 shadow-sm"
                        >
                          <Link href={`/product/${p._id}`}>
                            <div>{p.translations.data.name}</div>
                            <div>{p.category.translations.data.name}</div>
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

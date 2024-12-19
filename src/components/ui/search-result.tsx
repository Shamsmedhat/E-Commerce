"use client";
import { useProductByQueryData } from "@/lib/utils/data/products-data";
import { Link } from "@/navigarion";
import Image from "next/image";
import React from "react";
import LoadingSpinner from "../common/LoadingSpinner";
import { useTranslations } from "next-intl";
import { CgSpinnerAlt } from "react-icons/cg";

export default function SearchResult({
  className,
  productByQuery,
  isFetching,
  isError,
  setQuery,
}: {
  className: string;
  query: string;
  productByQuery: ProductData | undefined;
  isFetching: boolean;
  isError: boolean;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}) {
  const t = useTranslations();
  if (!productByQuery?.products) return;

  return (
    <div className={className}>
      <ul>
        {productByQuery?.products.length === 0 && (
          <p className="text-sm text-primary-foreground">
            {t("KYNwHufTggK5KNtXNIunJ")}
          </p>
        )}
        {isFetching && (
          <CgSpinnerAlt className="animate-spin" size={50} color="#febf31" />
        )}
        {productByQuery?.products.map((p) => {
          return (
            <Link
              key={p._id}
              href={`/product/${p._id}`}
              onClick={() => setQuery("")}
            >
              <li className="flex cursor-pointer items-center justify-start gap-2 border-b border-primary/60 p-2 transition-all last:border-0 hover:bg-primary-foreground/5">
                <Image
                  src={p.cover}
                  alt={p.translations.data.name}
                  width={30}
                  height={30}
                  className="h-8 w-12 object-contain"
                />
                <p className="text-sm">
                  ..{p.translations.data.name.slice(0, 50)}
                </p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

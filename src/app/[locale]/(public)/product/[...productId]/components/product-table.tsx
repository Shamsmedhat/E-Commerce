"use client";

import RatingStars from "@/components/common/RatingStars";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { PRODUCT_DATA } from "@/models/products";
import { LuUserCircle } from "react-icons/lu";

import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { AddReviewForm } from "./add-review-form";
import { getSession, useSession } from "next-auth/react";
import UserReview from "./user-review";

type ProductTableProps = {
  category: string;
  brand: string;
  subCategory: string;
  reviews: ReviewsData;
  translations: any;
  productId: string;
};
export default function ProductTable({
  category,
  brand,
  subCategory,
  reviews,
  translations,
  productId,
}: ProductTableProps) {
  const t = useTranslations();

  const locale = useLocale();
  const isEn = locale === "en";
  const dir = isEn ? "ltr" : "rtl";
  const maxRatingStars = 5;
  const totalReviews = reviews?.reviews.length || 0;
  const session: UserSession = useSession();

  const countOfUserRatingMaxRating =
    reviews?.reviews.filter((r) => r.rating === maxRatingStars).length || 0;
  const countOfUserRating4 =
    reviews?.reviews.filter((r) => r.rating === 4).length || 0;
  const countOfUserRating3 =
    reviews?.reviews.filter((r) => r.rating === 3).length || 0;
  const countOfUserRating2 =
    reviews?.reviews.filter((r) => r.rating === 2).length || 0;
  const countOfUserRating1 =
    reviews?.reviews.filter((r) => r.rating === 1).length || 0;

  const userHasReviewed = reviews?.reviews.some(
    (r) => r.user.email === session.data?.user.email,
  );

  const getPercentage = (count: number) =>
    totalReviews ? (count / totalReviews) * 100 : 0;

  return (
    <div>
      <Tabs defaultValue="Specifications" dir={dir}>
        {/* Tabs list */}
        <TabsList className="mb-3 bg-white">
          <TabsTrigger
            value="Specifications"
            className="me-4 rounded-none border-transparent py-3 text-sm font-bold data-[state=active]:border-b-2 data-[state=active]:border-primary md:text-xl"
          >
            {t("KzO_7oERWTdtyXABYy4AD")}
          </TabsTrigger>
          <TabsTrigger
            value="Description"
            className="me-4 rounded-none border-transparent py-3 text-sm font-bold data-[state=active]:border-b-2 data-[state=active]:border-primary md:text-xl"
          >
            {t("50-4lWEWRLiw7Bh_yTQuo")}
          </TabsTrigger>
          <TabsTrigger
            value="Reviews&Ratings"
            className="me-4 rounded-none border-transparent py-3 text-sm font-bold data-[state=active]:border-b-2 data-[state=active]:border-primary md:text-xl"
          >
            {t("ExlDLpe-akYBrf_OKvbbS")}
          </TabsTrigger>
        </TabsList>

        {/* Specifications content */}
        <TabsContent value="Specifications">
          <ul
            className={cn(
              isEn && "text-left",
              "my-4 flex !list-inside list-disc flex-col gap-3 px-7",
            )}
          >
            <li className="line-hieght flex items-center gap-40 bg-primary-foreground/5 ps-2 font-semibold leading-8 text-primary-foreground/70">
              <span className="w-36 font-bold">
                {t("9DGUyxCbWagDhi7rBaBgJ")}:{" "}
              </span>
              <span>{translations?.data.name}</span>
            </li>
            <li className="line-hieght flex items-center gap-40 ps-2 font-semibold leading-8 text-primary-foreground/70">
              <span className="w-36 font-bold">
                {t("fHxQkBf-__PPbP8Av8QT2")}:{" "}
              </span>
              <span>{translations?.data.details?.model}</span>
            </li>
            <li className="line-hieght flex items-center gap-40 bg-primary-foreground/5 ps-2 font-semibold leading-8 text-primary-foreground/70">
              <span className="w-36 font-bold">
                {t("r8AmQp0KoM6Aeum5viXK-")}:{" "}
              </span>
              <span>{brand?.translations.data.name}</span>
            </li>
            <li className="line-hieght flex items-center gap-40 ps-2 font-semibold leading-8 text-primary-foreground/70">
              <span className="w-36 font-bold">
                {t("zOItEysA70YIzajHcTuYo")}:{" "}
              </span>
              <span>{category?.translations.data.name}</span>
            </li>
            <li className="line-hieght flex items-center gap-40 bg-primary-foreground/5 ps-2 font-semibold leading-8 text-primary-foreground/70">
              <span className="w-36 font-bold">
                {t("dKK2yEL4B-GcSul9ZivDx")}:{" "}
              </span>
              <span>{subCategory?.translations.data.name}</span>
            </li>
          </ul>
        </TabsContent>

        {/* Description content */}
        <TabsContent value="Description">
          {translations?.data.overview?.length ? (
            <p
              className={cn(
                isEn && "text-left",
                "line-hieght flex items-center ps-2 font-semibold leading-8 text-primary-foreground/70",
              )}
            >
              {translations.data.overview}
            </p>
          ) : (
            <p className="text-gray-500">{t("GeWbVUzRI8XCxSpv_9ucp")}.</p>
          )}
        </TabsContent>

        {/* Reviews&Ratings content */}
        <TabsContent value="Reviews&Ratings">
          <div className="flex">
            {/* Users reviews */}
            <div className="my-2 w-1/2">
              <h4 className="text-xl font-semibold text-primary">
                {t("nA2_BG-9DmiBUbklDZw8Z")}
              </h4>
              {reviews?.reviews.map((r) => (
                <UserReview
                  review={r}
                  session={session}
                  key={r._id}
                  myReview={session.data?.user.email === r.user.email}
                />
              ))}
              {userHasReviewed ? null : <AddReviewForm productId={productId} />}
              {/* <AddReviewForm productId={productId} /> */}
            </div>

            {/* Stars percentage */}
            <div className="w-1/2">
              <h4 className="text-xl font-semibold text-primary">
                {/* {reviews?.length} {t("_j9aUg9_1lQ5ekSOGOROU")} */}
              </h4>
              <div className="mt-6 flex flex-col gap-4">
                {/* 5 stars progress */}
                <div className="flex items-center justify-start gap-6">
                  <span>5 {t("N4Kq8AbMtmFJMa6sKicR_")}</span>
                  <div className="w-[80%]">
                    <Progress
                      value={getPercentage(countOfUserRatingMaxRating)}
                      max={maxRatingStars}
                    />
                  </div>
                  <span className="text-xs text-backup">
                    {getPercentage(countOfUserRatingMaxRating)} %
                  </span>
                </div>

                {/* 4 stars progress */}
                <div className="flex items-center justify-start gap-6">
                  <span>4 {t("N4Kq8AbMtmFJMa6sKicR_")}</span>
                  <span className="w-[80%]">
                    <Progress
                      value={getPercentage(countOfUserRating4)}
                      max={maxRatingStars}
                    />
                  </span>
                  <span className="text-xs text-backup">
                    {getPercentage(countOfUserRating4)} %
                  </span>
                </div>

                {/* 3 stars progress */}
                <div className="flex items-center justify-start gap-6">
                  <span>3 {t("N4Kq8AbMtmFJMa6sKicR_")}</span>
                  <span className="w-[80%]">
                    <Progress
                      value={getPercentage(countOfUserRating3)}
                      max={maxRatingStars}
                    />
                  </span>
                  <span className="text-xs text-backup">
                    {getPercentage(countOfUserRating3)} %
                  </span>
                </div>

                {/* 2 stars progress */}
                <div className="flex items-center justify-start gap-6">
                  <span>2 {t("N4Kq8AbMtmFJMa6sKicR_")}</span>
                  <span className="w-[80%]">
                    <Progress
                      value={getPercentage(countOfUserRating2)}
                      max={maxRatingStars}
                    />
                  </span>
                  <span className="text-xs text-backup">
                    {getPercentage(countOfUserRating2)} %
                  </span>
                </div>

                {/* 1 stars progress */}
                <div className="flex items-center justify-start gap-6">
                  <span>1 {t("N4Kq8AbMtmFJMa6sKicR_")}</span>
                  <span className="w-[80%]">
                    <Progress
                      value={getPercentage(countOfUserRating1)}
                      max={maxRatingStars}
                    />
                  </span>
                  <span className="text-xs text-backup">
                    {getPercentage(countOfUserRating1)} %
                  </span>
                </div>
                {/* ============ */}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

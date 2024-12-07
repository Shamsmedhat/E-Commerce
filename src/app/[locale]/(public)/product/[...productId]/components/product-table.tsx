"use client";

import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { PRODUCT_DATA } from "@/models/products";
import { FaStar } from "react-icons/fa";

import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
import { AddReviewForm } from "./add-review-form";
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
        <TabsList className="mb-3 bg-white dark:bg-background">
          <TabsTrigger
            value="Specifications"
            className="me-4 rounded-none border-transparent px-1 py-3 text-sm font-bold data-[state=active]:border-b-2 data-[state=active]:border-primary md:px-3 md:text-xl"
          >
            {t("KzO_7oERWTdtyXABYy4AD")}
          </TabsTrigger>
          <TabsTrigger
            value="Description"
            className="me-4 rounded-none border-transparent px-1 py-3 text-sm font-bold data-[state=active]:border-b-2 data-[state=active]:border-primary md:px-3 md:text-xl"
          >
            {t("50-4lWEWRLiw7Bh_yTQuo")}
          </TabsTrigger>
          <TabsTrigger
            value="Reviews&Ratings"
            className="me-4 rounded-none border-transparent px-1 py-3 text-sm font-bold data-[state=active]:border-b-2 data-[state=active]:border-primary md:px-3 md:text-xl"
          >
            {t("ExlDLpe-akYBrf_OKvbbS")}
          </TabsTrigger>
        </TabsList>

        {/* Specifications content */}
        <TabsContent value="Specifications">
          <ul
            className={cn(
              isEn && "text-left",
              "my-4 flex !list-inside list-disc flex-col gap-3 md:px-7",
            )}
          >
            <li className="line-hieght flex items-center gap-3 bg-primary-foreground/5 ps-2 font-semibold leading-8 text-primary-foreground/70 dark:bg-white/5 md:gap-40">
              <span className="w-36 font-bold dark:text-white">
                {t("9DGUyxCbWagDhi7rBaBgJ")}:{" "}
              </span>
              <span className="dark:text-slate-50/50">
                {translations?.data.name}
              </span>
            </li>
            <li className="line-hieght flex items-center ps-2 font-semibold leading-8 text-primary-foreground/70 md:gap-40">
              <span className="w-36 font-bold dark:text-white">
                {t("fHxQkBf-__PPbP8Av8QT2")}:{" "}
              </span>
              <span className="dark:text-slate-50/50">
                {translations?.data.details?.model}
              </span>
            </li>
            <li className="line-hieght flex items-center bg-primary-foreground/5 ps-2 font-semibold leading-8 text-primary-foreground/70 dark:bg-white/5 md:gap-40">
              <span className="w-36 font-bold dark:text-white">
                {t("r8AmQp0KoM6Aeum5viXK-")}:{" "}
              </span>
              <span className="dark:text-slate-50/50">
                {/* todo */}
                {(brand as any)?.translations.data.name}
              </span>
            </li>
            <li className="line-hieght flex items-center ps-2 font-semibold leading-8 text-primary-foreground/70 md:gap-40">
              <span className="w-36 font-bold dark:text-white">
                {t("zOItEysA70YIzajHcTuYo")}:{" "}
              </span>
              <span className="dark:text-slate-50/50">
                {/* todo */}
                {(category as any)?.translations.data.name}
              </span>
            </li>
            <li className="line-hieght flex items-center bg-primary-foreground/5 ps-2 font-semibold leading-8 text-primary-foreground/70 dark:bg-white/5 md:gap-40">
              <span className="w-36 font-bold dark:text-white">
                {t("dKK2yEL4B-GcSul9ZivDx")}:{" "}
              </span>
              <span className="dark:text-slate-50/50">
                {/* todo */}
                {(subCategory as any)?.translations.data.name}
              </span>
            </li>
          </ul>
        </TabsContent>

        {/* Description content */}
        <TabsContent value="Description">
          {translations?.data.overview?.length ? (
            <p
              className={cn(
                isEn && "text-left",
                "line-hieght flex items-center ps-2 font-semibold leading-8 text-primary-foreground/70 dark:text-white/50",
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
          <div className="flex flex-col md:flex-row">
            {/* Users reviews */}
            <div className="my-2 md:w-1/2">
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
            <div className="md:w-1/2">
              <h4 className="text-xl font-semibold text-primary">
                {/* {reviews?.length} {t("_j9aUg9_1lQ5ekSOGOROU")} */}
              </h4>
              <div className="mt-6 flex flex-col gap-4">
                {/* 5 stars progress */}
                <div className="flex items-center justify-start gap-[2px] text-sm md:gap-6 md:text-base">
                  <p className="flex items-center gap-2">
                    <span>5</span>
                    <span>
                      <FaStar color="#febf31" />
                    </span>
                  </p>
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
                <div className="flex items-center justify-start gap-2 text-sm md:gap-6 md:text-base">
                  <p className="flex items-center gap-2">
                    <span>4</span>
                    <span>
                      <FaStar color="#febf31" />
                    </span>
                  </p>

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
                <div className="flex items-center justify-start gap-2 text-sm md:gap-6 md:text-base">
                  <p className="flex items-center gap-2">
                    <span>3</span>
                    <span>
                      <FaStar color="#febf31" />
                    </span>
                  </p>
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
                <div className="flex items-center justify-start gap-2 text-sm md:gap-6 md:text-base">
                  <p className="flex items-center gap-2">
                    <span>2</span>
                    <span>
                      <FaStar color="#febf31" />
                    </span>
                  </p>
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
                <div className="flex items-center justify-start gap-2 text-sm md:gap-6 md:text-base">
                  <p className="flex items-center gap-2">
                    <span>1</span>
                    <span>
                      <FaStar color="#febf31" />
                    </span>
                  </p>
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

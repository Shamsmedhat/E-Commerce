import RatingStars from "@/components/common/RatingStars";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PRODUCT_DATA } from "@/models/products";
import { LuUserCircle } from "react-icons/lu";

import { useTranslations } from "next-intl";

export default function ProductTable({ overview, reviews }: PRODUCT_DATA) {
  const t = useTranslations();

  const maxRatingStars = 5;
  const countOfUserRatingMaxRating =
    reviews?.filter((r) => r.rating === maxRatingStars).length || 0;
  const countOfUserRating4 = reviews?.filter((r) => r.rating === 4).length || 0;
  const countOfUserRating3 = reviews?.filter((r) => r.rating === 3).length || 0;
  const countOfUserRating2 = reviews?.filter((r) => r.rating === 2).length || 0;
  const countOfUserRating1 = reviews?.filter((r) => r.rating === 1).length || 0;

  return (
    <div>
      <Tabs defaultValue="Specifications" dir="rtl">
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
          {overview?.specifications?.length ? (
            <ul className="my-4 px-7">
              {overview.specifications.map((el) =>
                Object.entries(el).map(([key, value]) => (
                  <li
                    className="flex h-[3rem] items-center ps-2 font-semibold odd:bg-primary-foreground/5"
                    key={key}
                  >
                    <span className="w-[30%]">{key}</span>{" "}
                    <span className="text-primary-foreground/70">{value}</span>
                  </li>
                )),
              )}
            </ul>
          ) : (
            <p className="text-gray-500">No specifications available.</p>
          )}
        </TabsContent>

        {/* Description content */}
        <TabsContent value="Description">
          <p className="text-lg leading-8 text-primary-foreground/80">
            {overview?.overview}
          </p>
        </TabsContent>

        {/* Reviews&Ratings content */}
        <TabsContent value="Reviews&Ratings">
          <div className="flex">
            {/* Users reviews */}
            <div className="my-2 w-1/2">
              <h4 className="text-xl font-semibold text-primary">
                {t("nA2_BG-9DmiBUbklDZw8Z")}
              </h4>
              {reviews?.map((r) => (
                <div
                  key={r.user}
                  className="w-[70%] border-b-2 border-primary-foreground/5 pb-4"
                >
                  <div className="mt-5 flex gap-2 align-middle">
                    <span>
                      <LuUserCircle strokeWidth={1} />
                    </span>
                    <span className="font-semibold">{r.user}</span>
                  </div>
                  <p className="mb-3 mt-1">
                    <RatingStars rate={r.rating} />
                  </p>
                  <p className="text-primary-foreground">{r.review}</p>
                </div>
              ))}
            </div>
            {/* Stars percentage */}
            <div className="w-1/2">
              <h4 className="text-xl font-semibold text-primary">
                {reviews?.length} {t("_j9aUg9_1lQ5ekSOGOROU")}
              </h4>
              <div className="mt-6 flex flex-col gap-4">
                {/* 5 stars progress */}
                <div className="flex items-center justify-start gap-6">
                  <span>{t("N4Kq8AbMtmFJMa6sKicR_")}</span>
                  <div className="w-[80%]">
                    <Progress
                      value={
                        (countOfUserRatingMaxRating / maxRatingStars) * 100
                      }
                      max={maxRatingStars}
                    />
                  </div>
                  <span className="text-backup">
                    {(countOfUserRatingMaxRating / maxRatingStars) * 100} %
                  </span>
                </div>

                {/* 4 stars progress */}
                <div className="flex items-center justify-start gap-6">
                  <span>4 نجوم</span>
                  <span className="w-[80%]">
                    <Progress
                      value={(countOfUserRating4 / maxRatingStars) * 100}
                      max={maxRatingStars}
                    />
                  </span>
                  <span className="text-backup">
                    {(countOfUserRating4 / maxRatingStars) * 100} %
                  </span>
                </div>

                {/* 3 stars progress */}
                <div className="flex items-center justify-start gap-6">
                  <span>3 نجوم</span>
                  <span className="w-[80%]">
                    <Progress
                      value={(countOfUserRating3 / maxRatingStars) * 100}
                      max={maxRatingStars}
                    />
                  </span>
                  <span className="text-backup">
                    {(countOfUserRating3 / maxRatingStars) * 100} %
                  </span>
                </div>

                {/* 2 stars progress */}
                <div className="flex items-center justify-start gap-6">
                  <span>2 نجوم</span>
                  <span className="w-[80%]">
                    <Progress
                      value={(countOfUserRating2 / maxRatingStars) * 100}
                      max={maxRatingStars}
                    />
                  </span>
                  <span className="text-backup">
                    {(countOfUserRating2 / maxRatingStars) * 100} %
                  </span>
                </div>

                {/* 1 stars progress */}
                <div className="flex items-center justify-start gap-6">
                  <span>1 نجوم</span>
                  <span className="w-[80%]">
                    <Progress
                      value={(countOfUserRating1 / maxRatingStars) * 100}
                      max={maxRatingStars}
                    />
                  </span>
                  <span className="text-backup">
                    {(countOfUserRating1 / maxRatingStars) * 100} %
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

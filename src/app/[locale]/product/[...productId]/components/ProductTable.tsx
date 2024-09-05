import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PRODUCT_DATA } from "@/models/products";
import { useTranslations } from "next-intl";

export default function ProductTable({ overview }: PRODUCT_DATA) {
  const t = useTranslations();
  return (
    <div className="">
      <Tabs defaultValue="Specifications" dir="rtl">
        {/* Tabs list */}
        <TabsList className="mb-3 bg-white">
          <TabsTrigger
            value="Specifications"
            className="me-4 rounded-none border-transparent py-3 text-xl font-bold data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            {t("KzO_7oERWTdtyXABYy4AD")}
          </TabsTrigger>
          <TabsTrigger
            value="Description"
            className="me-4 rounded-none border-transparent py-3 text-xl font-bold data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            {t("50-4lWEWRLiw7Bh_yTQuo")}
          </TabsTrigger>
          <TabsTrigger
            value="Reviews&Ratings"
            className="me-4 rounded-none border-transparent py-3 text-xl font-bold data-[state=active]:border-b-2 data-[state=active]:border-primary"
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
          <h1>TEST 2</h1>
        </TabsContent>
      </Tabs>
    </div>
  );
}

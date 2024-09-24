import Heading from "@/components/common/Heading";
import TabNav from "./tab-nav";
import { useLocale, useTranslations } from "next-intl";
import { handleEnText } from "@/lib/utils/helpers";
import { getLocale, getTranslations } from "next-intl/server";
import { getCategoriesData } from "@/lib/utils/categories-data";
import { getProductsData } from "@/lib/utils/products-data";

export default async function DealsOfTheDay() {
  const t = await getTranslations();

  // get web locale
  const locale = await getLocale();
  const isEn = locale === "en";

  // data ( categories , products ) use Promise.all to get one promise and in parallel
  const [
    { categories, pagination: categoriesPagination },
    { products, pagination: productsPagination },
  ] = await Promise.all([getCategoriesData(), getProductsData()]);

  return (
    <section className="container my-9">
      {/* h2 heading */}
      <Heading className={handleEnText(locale)}>
        {t("EMm4-Oay1VcXIpDa1EQ_Y")}
      </Heading>
      <TabNav categories={categories} isEn={isEn} products={products} />
    </section>
  );
}

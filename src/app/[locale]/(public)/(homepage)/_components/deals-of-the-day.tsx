import Heading from "@/components/common/Heading";
// import { getCategoriesData } from "@/lib/utils/data/categories-data";
import { handleEnText } from "@/lib/utils/helpers";
import { getLocale, getTranslations } from "next-intl/server";
import TabNav from "./tab-nav";
import { cn } from "@/lib/utils";
import { getCategoriesAction } from "@/lib/actions/categories-actions";

export default async function DealsOfTheDay() {
  const t = await getTranslations();

  // get web locale
  const locale = await getLocale();
  const isEn = locale === "en";

  // Declare categories & pagination variables to assign the data
  let categories: Category[] = [];
  let pagination = {};

  // const data = await getCategoriesData();
  const data = await getCategoriesAction();

  // if no data is received we show no data available
  if (!data.categories) {
    return (
      <section className="container my-9">
        {/* h2 heading */}
        <Heading className={cn(handleEnText(locale), "dark:text-white")}>
          {t("EMm4-Oay1VcXIpDa1EQ_Y")}
        </Heading>

        <p>No data available</p>
      </section>
    );

    // if the data received we assign the data to variable to show it in UI
  } else {
    categories = data.categories;
    pagination = data.pagination;
  }
  return (
    <section className="container md:my-9">
      {/* h2 heading */}
      <Heading className={cn(handleEnText(locale), "dark:text-white")}>
        {t("EMm4-Oay1VcXIpDa1EQ_Y")}
      </Heading>

      <TabNav categories={categories} pagination={pagination} isEn={isEn} />
    </section>
  );
}

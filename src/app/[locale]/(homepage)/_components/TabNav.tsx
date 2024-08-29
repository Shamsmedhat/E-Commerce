import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { categories, products } from "@/_lib/data";
import TabNavContent from "./TabNavContent";
import { useLocale } from "next-intl";

export default function TabNav() {
  const allCategories = categories;
  const locale = useLocale();
  return (
    <Tabs
      defaultValue={allCategories[0].name}
      className="my-[2rem] w-full"
      dir={locale === "en" ? "ltr" : "rtl"}
    >
      {/* Tabnav categories list */}
      <TabsList className="flex justify-center gap-5 rounded-md bg-white px-4 pt-2 shadow-sm lg:justify-start">
        {allCategories.map((category, i) => (
          <TabsTrigger
            key={category.name}
            value={category.name}
            className="cursor-pointer border-transparent px-4 py-2 text-base font-medium text-primary-foreground/70 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary"
          >
            <span className="flex gap-2">
              <span>{<category.icon />}</span>
              <span className="hidden lg:block">{category.name}</span>
            </span>
          </TabsTrigger>
        ))}
      </TabsList>

      {/* // Render the content of each Tab*/}
      <TabNavContent />
    </Tabs>
  );
}

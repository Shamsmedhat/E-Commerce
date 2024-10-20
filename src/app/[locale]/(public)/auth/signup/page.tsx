import { getLocale, getTranslations } from "next-intl/server";
import SignUpForm from "./components/SignUpForm";
import { cn } from "@/lib/utils";

export default async function page() {
  const t = await getTranslations();
  const locale = await getLocale();
  const isEn = locale === "en";

  return (
    <section
      className={cn(
        "mb-10 mt-5 flex w-full flex-col items-center justify-center",
      )}
    >
      <div
        className={cn(
          isEn ? "items-end text-end" : "items-start text-start",
          "relative flex w-[95%] flex-col justify-center rounded-2xl bg-white p-10 shadow-lg sm:w-[85%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[35%]",
        )}
      >
        <h2 className="mb-3 w-[70%] border-b-2 border-primary pb-4 text-3xl font-bold text-primary-foreground">
          {t("MqDcksQc8iUgj8zhVdnry")}
        </h2>
        <SignUpForm />
      </div>
    </section>
  );
}

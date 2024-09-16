import { getTranslations } from "next-intl/server";
import SignUpForm from "./components/SignUpForm";

export default async function page() {
  const t = await getTranslations();
  return (
    <section className="mb-10 mt-5 flex w-full flex-col items-center justify-center">
      <div className="relative w-[35%] rounded-2xl bg-white p-10 shadow-lg">
        <h2 className="mb-3 w-[70%] border-b-2 border-primary pb-4 text-3xl font-bold text-primary-foreground">
          {t("MqDcksQc8iUgj8zhVdnry")}
        </h2>
        <SignUpForm />
      </div>
    </section>
  );
}

import { getServerSession, Session } from "next-auth";
import LoginForm from "./components/LoginForm";
import { authOptions } from "@/lib/config/auth-options";
import { getLocale, getTranslations } from "next-intl/server";
import SignInProviders from "./components/SignInProviders";
import Image, { StaticImageData } from "next/image";
import LogoutBtn from "./components/LogoutBtn";
import { GoArrowUpLeft } from "react-icons/go";
import { cn } from "@/lib/utils";

export default async function Page() {
  const session: Session | null = await getServerSession(authOptions);
  const locale = await getLocale();
  const isEn = locale === "en";

  // TODO handle image comes from DB

  const UserImage: string | StaticImageData = session?.user?.image;

  const t = await getTranslations();

  return (
    <>
      {!session ? (
        <section
          className={cn(
            "mb-5 mt-5 flex w-full flex-col items-center justify-center",
          )}
        >
          <div
            className={cn(
              isEn ? "text-end" : "text-start",
              "relative rounded-2xl bg-white p-10 shadow-lg",
            )}
          >
            <h2 className="mb-3 text-3xl font-bold text-primary-foreground">
              {t("x5CK85cNmYaHmtijJxw1l")}
            </h2>
            <p className="mb-4 text-lg text-primary-foreground/70">
              {t("IQ0KGx9ZU0j2k7BpbvyBZ")}
            </p>
            <LoginForm session={session} />
            <div className="relative flex items-center justify-center p-3 text-[16px] before:absolute before:h-[1px] before:w-full before:bg-primary-foreground/20 before:content-['']">
              <span className="z-10 bg-white px-3">أو</span>
            </div>
            <SignInProviders />
          </div>
        </section>
      ) : (
        <section className="mt-5 flex w-full flex-col items-center justify-center">
          <div className="relative flex w-[40%] flex-col gap-2 rounded-2xl bg-white p-10 shadow-lg">
            <div className="flex flex-row gap-2">
              <Image
                src={UserImage}
                alt={`the ${session.user?.name} image`}
                width={70}
                height={70}
                className="rounded-full"
              />

              <div>
                <h2 className="text-2xl font-bold text-primary-foreground">
                  {t("3bmpktaFAugrjDrLFz0p5")} {session.user?.name} !
                </h2>
                <p className="text-primary-foreground/80">
                  {session.user?.email}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-lg font-semibold">لديك بالفعل حساب!</p>
              <p className="flex gap-2">
                <span>تريد التسجيل بحساب اخر</span>
                <LogoutBtn className="flex underline">
                  <span>اضغط هنا</span> <GoArrowUpLeft />
                </LogoutBtn>
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

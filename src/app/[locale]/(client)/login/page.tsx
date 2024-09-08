import { Label } from "@/components/ui/label";
// import { SignIn } from "../(homepage)/_components/SignIn";
import { Input } from "@/components/ui/input";

export default async function Page() {
  return (
    <>
      <section className="flex w-full flex-col items-center justify-center">
        <div className="relative rounded-2xl bg-white p-10 shadow-lg">
          <h2 className="mb-3 text-3xl font-bold text-primary-foreground">
            تسـجيل الدخول
          </h2>
          <p className="mb-4 text-lg text-primary-foreground/70">
            أدخل بريدك الإلكتروني وكلمة المرور للوصول إلى حسابك.
          </p>
          <form action="" className="space-y-6 p-4">
            <div className="flex flex-col gap-3">
              <Label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
              >
                البريد الإلكتروني
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="m@example.com"
                className="focus:!outline-primary"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="password">كلمة المرور</Label>
              <Input
                type="password"
                id="password"
                placeholder="••••••••"
                className="focus:!outline-primary"
                required
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/80"
            >
              تسـجيل الدخول
            </button>
          </form>
          <div className="my-5 h-[0.01rem] w-full bg-primary-foreground/30 after:absolute after:bottom-[30%] after:right-1/2 after:bg-white after:px-3 after:content-['أو']"></div>
          {/* <SignIn /> */}
        </div>
      </section>
    </>
  );
}

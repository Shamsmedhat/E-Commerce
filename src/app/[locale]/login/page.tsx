import { Label } from "@/components/ui/label";
import { SignIn } from "../(homepage)/_components/SignIn";
import { Input } from "@/components/ui/input";

export default async function Page() {
  return (
    <>
      <section className="w-full flex justify-center items-center flex-col ">
        <div className=" bg-white p-10 rounded-2xl relative shadow-lg">
          <h2 className="text-primary-foreground text-3xl font-bold mb-3">تسـجيل الدخول</h2>
          <p className="text-primary-foreground/70 text-lg mb-4">أدخل بريدك الإلكتروني وكلمة المرور للوصول إلى حسابك.</p>
          <form
            action=""
            className="space-y-6 p-4"
          >
            <div className="flex flex-col gap-3">
              <Label
                htmlFor="email"
                className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"
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
              className="bg-primary text-white py-2 px-4 rounded-full hover:bg-primary/80 transition-colors"
            >
              تسـجيل الدخول
            </button>
          </form>
          <div className="after:absolute h-[0.01rem] w-full bg-primary-foreground/30 my-5  after:content-['أو'] after:right-1/2 after:bottom-[30%] after:bg-white after:px-3"></div>
          <SignIn />
        </div>
      </section>
    </>
  );
}

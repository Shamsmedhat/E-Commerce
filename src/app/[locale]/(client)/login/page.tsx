import { Label } from "@/components/ui/label";
// import { SignIn } from "../(homepage)/_components/SignIn";
import { Input } from "@/components/ui/input";
import Login from "./components/Login";

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
          <Login />
          <div className="my-5 h-[0.01rem] w-full bg-primary-foreground/30 after:absolute after:bottom-[30%] after:right-1/2 after:bg-white after:px-3 after:content-['أو']"></div>
          {/* <SignIn /> */}
        </div>
      </section>
    </>
  );
}

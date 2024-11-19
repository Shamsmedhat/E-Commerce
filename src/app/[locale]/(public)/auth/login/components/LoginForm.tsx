"use client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { handleSignInToaster } from "@/lib/utils/helpers";

// auth
import { Session } from "next-auth";
import { signIn } from "next-auth/react";

// zod validation
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// ui
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// icons
import { BsInfoCircle } from "react-icons/bs";
import { ImSpinner3 } from "react-icons/im";

// translations
import { useLocale, useTranslations } from "next-intl";

// navigation
import { useRouter } from "@/navigarion";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { useGuestCart } from "@/hooks/use-guest-cart";
import { useAddToCart } from "@/lib/utils/data/cart-data";

export default function LoginForm({ session }: { session: Session | null }) {
  const t = useTranslations();
  const locale = useLocale();
  const isEn = locale === "en";
  // navigation
  const router = useRouter();
  const searchParams = useSearchParams();
  const guestCart = useGuestCart();
  const { addMultipleToCart } = useAddToCart();

  const guestCartData = guestCart.map((p) => {
    return {
      product: p.product,
      quantity: p.quantity,
    };
  });

  // state if the credentials is incorrect
  const [credentialsIncorrect, setCredentialsIncorrect] = useState<
    string | null | undefined
  >(null);

  // user schema
  const userSchema = z
    .object({
      username: z.string().min(6, t("-sPVtQitY0Jhzx6ENcLR7")).max(20),
      password: z.string().min(6, t("B_JuNT9lU4oZyI2Unt0IY")),
    })
    .required();

  // inputs type
  type Inputs = z.infer<typeof userSchema>;

  // useForm setup
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Inputs>({ resolver: zodResolver(userSchema) });

  // handle signin function with params username and password
  async function handleSignIn({ username, password }: Inputs) {
    try {
      // wait the signin response
      const res = await signIn("credentials", {
        redirect: false,
        username,
        password,
      });

      // if the res is oky
      if (res?.ok) {
        // navigate to home
        router.replace(searchParams.get("callbackUrl") || "/");

        // then show the toaster
        handleSignInToaster();
        // refresh to show the cart - rerender and check if there is a session
        router.refresh();
        guestCart.length === 0 ? null : addMultipleToCart(guestCartData);
      } else {
        // if the credentials is incorrect
        setCredentialsIncorrect(res?.error);
      }
    } catch (error) {
      throw new Error("Sign-in failed.");
    }

    //TODO handling errors
  }

  // on submit to pass the form data to the signin function
  const onSubmit: SubmitHandler<Inputs> = (data) => handleSignIn(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-4">
      {/* if the credentials is incorrect show error */}
      {credentialsIncorrect && (
        <div className="flex justify-center">
          <p className="text-lg text-red-500">{t("1_Rj400Z4SXDwCJt3kFzN")}</p>
        </div>
      )}

      {/* //TODO setup new form setup from chadcn */}
      <div className="flex flex-col gap-3">
        <Label
          htmlFor="username"
          className={cn(
            "block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']",
          )}
        >
          {t("WWMnAVYyfUEaHuf4cn2sj")}
        </Label>
        <Input
          type="text"
          id="username"
          placeholder={t("noEUTjMtwAO4g4FyCobhx")}
          className={cn(
            isEn ? "text-end" : "text-start",
            "placeholder:text-primary-foreground/40 focus:!outline-primary",
          )}
          defaultValue="exampleusername"
          {...register("username")}
        />
        {errors.username && (
          <p className="flex items-center gap-2 text-sm text-red-600">
            <BsInfoCircle />
            <span>{errors.username.message}</span>
          </p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="password">{t("6Ga5ADgKW5t7UIaqd1jBF")}</Label>
        <Input
          type="password"
          id="password"
          placeholder="••••••••"
          className={cn(
            isEn ? "text-end" : "text-start",
            "placeholder:text-primary-foreground/20 focus:!outline-primary",
          )}
          {...register("password")}
          defaultValue="Pass50091"
        />
        {errors.password && (
          <p className="flex items-center gap-2 text-sm text-red-600">
            <BsInfoCircle />
            <span>{errors.password.message}</span>
          </p>
        )}
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/80"
        disabled={isSubmitting || isSubmitSuccessful}
      >
        {isSubmitting || isSubmitSuccessful ? (
          <span className="flex justify-center">
            <ImSpinner3 className="animate-spin" size={25} />
          </span>
        ) : (
          <span>{t("x5CK85cNmYaHmtijJxw1l")}</span>
        )}
      </button>
    </form>
  );
}

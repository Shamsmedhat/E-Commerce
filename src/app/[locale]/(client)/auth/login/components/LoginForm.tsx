"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { BsInfoCircle } from "react-icons/bs";
import { ImSpinner3 } from "react-icons/im";

import { handleSignInToaster } from "@/lib/utils/helpers";
import { useRouter } from "@/navigarion";
import { useState } from "react";

export default function LoginForm({ session }: { session: Session | null }) {
  const t = useTranslations();
  const router = useRouter();
  const [credentialsIncorrect, setCredentialsIncorrect] = useState<
    string | null | undefined
  >(null);
  const userSchema = z
    .object({
      username: z.string().min(6, t("-sPVtQitY0Jhzx6ENcLR7")).max(20),
      password: z.string().min(6, t("B_JuNT9lU4oZyI2Unt0IY")),
    })
    .required();

  type Inputs = z.infer<typeof userSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Inputs>({ resolver: zodResolver(userSchema) });

  async function handleSignIn({ username, password }: Inputs) {
    try {
      const res = await signIn("credentials", {
        redirect: false,
        callbackUrl: "/",
        username,
        password,
      });

      if (res?.ok) {
        router.push("/");
        handleSignInToaster();
      } else {
        setCredentialsIncorrect(res?.error);
      }
    } catch (error) {
      throw new Error("Sign-in failed.");
    }

    //TODO handling errors
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => handleSignIn(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-4">
      {credentialsIncorrect && (
        <div className="flex justify-center">
          <p className="text-lg text-red-500">{t("1_Rj400Z4SXDwCJt3kFzN")}</p>
        </div>
      )}
      <div className="flex flex-col gap-3">
        <Label
          htmlFor="username"
          className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"
        >
          {t("WWMnAVYyfUEaHuf4cn2sj")}
        </Label>
        <Input
          type="text"
          id="username"
          placeholder={t("noEUTjMtwAO4g4FyCobhx")}
          className="placeholder:text-primary-foreground/40 focus:!outline-primary"
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
          className="placeholder:text-primary-foreground/20 focus:!outline-primary"
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
        disabled={isSubmitting}
      >
        {isSubmitting ? (
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

"use client";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { handleSignInToaster } from "@/lib/utils/helpers";

export default function SignInProviders() {
  const t = useTranslations();

  async function handleGoogleLogin() {
    await signIn("google", {
      redirect: true,
      callbackUrl: "/",
    }).then(handleSignInToaster);
  }
  async function handleFacebookLogin() {
    await signIn("facebook", {
      redirect: true,
      callbackUrl: "/",
    }).then(handleSignInToaster);
  }

  return (
    <div className="mt-8 space-y-6">
      <button
        onClick={handleGoogleLogin}
        className="text-md flex w-full items-center justify-center gap-6 rounded-lg border border-primary-foreground/20 px-10 py-3 font-medium transition-all duration-300 hover:bg-primary-foreground/5"
      >
        <FcGoogle size={30} />
        <span>{t("6y11Nt0JHr5IblKxDZseB")}</span>
      </button>
      <button
        onClick={handleFacebookLogin}
        className="text-md flex w-full items-center justify-center gap-6 rounded-lg border border-primary-foreground/20 px-10 py-3 font-medium transition-all duration-300 hover:bg-primary-foreground/5"
      >
        <FaFacebookF color="#1877F2" size={30} />
        <span>{t("ynC-q9AhGvwzIflOBBytm")}</span>
      </button>
    </div>
  );
}

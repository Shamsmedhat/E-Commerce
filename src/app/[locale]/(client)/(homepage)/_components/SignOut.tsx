"use client";
import { LuLogOut } from "react-icons/lu";
import { signOut } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { useTranslations } from "next-intl";
import { handleSignOutToaster } from "@/lib/utils/helpers";

export default function SignOut({
  setIsLoggedOut,
}: {
  setIsLoggedOut: Dispatch<SetStateAction<boolean>>;
}) {
  const t = useTranslations();
  const router = useRouter();

  async function handleSignOut() {
    await signOut({ redirect: true, callbackUrl: "/" }).then(
      handleSignOutToaster,
    );
    // loggedOutSuccessfully();
    setIsLoggedOut(true); // Mark as logged out
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSignOut();
      }}
      className="w-full"
    >
      <button
        type="submit"
        className="flex w-full items-center gap-2 rtl:flex-row-reverse"
      >
        <LuLogOut className="h-4 w-4" />
        <span>{t("dXsyMrHp8XrWC15uBDTV3")}</span>
      </button>
    </form>
  );
}

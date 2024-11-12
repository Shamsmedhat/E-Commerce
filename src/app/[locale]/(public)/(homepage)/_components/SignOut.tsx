"use client";
import { LuLogOut } from "react-icons/lu";
import { signOut } from "next-auth/react";

import { useTranslations } from "next-intl";
import { handleSignOutToaster } from "@/lib/utils/helpers";
import { cookies } from "next/headers";
import { removeUserToken } from "@/lib/actions/remove-token-actions";

export default function SignOut() {
  const t = useTranslations();

  async function handleSignOut() {
    await signOut({ redirect: true, callbackUrl: "/" }).then(
      handleSignOutToaster,
    );
    removeUserToken();
    // loggedOutSuccessfully();
    // setIsLoggedOut(true); // Mark as logged out
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

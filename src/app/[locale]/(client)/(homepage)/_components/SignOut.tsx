"use client";
import { LuLogOut } from "react-icons/lu";
import { signOut } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { useTranslations } from "next-intl";

export default function SignOut({
  isLoggedOut,
  setIsLoggedOut,
}: {
  isLoggedOut: boolean;
  setIsLoggedOut: Dispatch<SetStateAction<boolean>>;
}) {
  const t = useTranslations();
  const router = useRouter();

  const loggedOutSuccessfully = () => {
    toast.info("Logged out Successfully!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      onClose: () => {
        router.refresh(); // Refresh the router after successful logout
      },
    });
  };

  async function handleSignOut() {
    await signOut({ redirect: false });
    loggedOutSuccessfully();
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

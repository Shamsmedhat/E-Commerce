import { signOutAction } from "@/actions/actions";
import { LuLogOut } from "react-icons/lu";
import React from "react";

export default function SignOut() {
  return (
    <form action={signOutAction} className="w-full">
      <button
        type="submit"
        className="flex w-full items-center gap-2 rtl:flex-row-reverse"
      >
        <LuLogOut className="h-4 w-4" />
        <span>تسجيل الخروج</span>
      </button>
    </form>
  );
}

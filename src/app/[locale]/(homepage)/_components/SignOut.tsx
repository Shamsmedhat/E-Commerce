import { signOutAction } from "@/actions/actions";
import { LogOut } from "lucide-react";
import React from "react";

export default function SignOut() {
    return (
        <form
            action={signOutAction}
            className="w-full"
        >
            <button
                type="submit"
                className="flex rtl:flex-row-reverse gap-2 items-center w-full "
            >
                <LogOut className="h-4 w-4" />
                <span>تسجيل الخروج</span>
            </button>
        </form>
    );
}

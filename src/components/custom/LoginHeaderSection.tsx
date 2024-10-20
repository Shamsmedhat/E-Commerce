"use client";

import { Link } from "@/navigarion";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

import { Skeleton } from "../ui/skeleton";
import useAuthToast from "@/hooks/useAuthToast";
import { FiUser } from "react-icons/fi";
import UserDropmenu from "./user-dropmenu";
import { useEffect, useState } from "react";

export default function LoginHeaderSection() {
  const t = useTranslations();
  const { data, status } = useSession();
  const [userName, setUserName] = useState();

  useAuthToast();
  useEffect(() => {
    setUserName(data?.user.name);
  }, [data]);

  if (status === "loading") {
    return (
      <div className="mx-3">
        <Skeleton className="mb-2 h-7 w-[9rem] px-6" />
        <Skeleton className="h-7 w-[9rem] px-6" />
      </div>
    );
  } else if (status === "unauthenticated" || !data) {
    return (
      <li className="flex h-14 flex-col items-center justify-center gap-3 border-e px-2 xsm:mr-4 xsm:px-6">
        <Link
          href="/auth/login"
          className="flex items-center gap-1 text-[12px] font-normal transition-colors hover:text-primary xsm:text-[14px] xsm:font-semibold"
        >
          {t("x5CK85cNmYaHmtijJxw1l")}
          <FiUser size={20} strokeWidth={1} className="h-15 xsm:h-[20px]" />
        </Link>
        <Link
          href="/auth/signup"
          className="rounded-full bg-primary px-2 py-2 text-[12px] font-normal text-white transition-colors hover:bg-primary/70 xsm:px-4 xsm:text-[14px] xsm:font-semibold"
        >
          {t("vaXK79U6F-qTNzxkZPiJv")}
        </Link>
      </li>
    );
  } else if (status === "authenticated" || data) {
    return (
      <li className="flex h-7 flex-col items-center justify-center border-e px-1 sm:h-14 sm:px-6">
        <span className="text-xs text-muted-foreground sm:text-sm">
          {t("GA5q4VAGgkQx9JSIoCH64")} {userName}
        </span>

        {/* Account dropmenu */}
        <UserDropmenu />
      </li>
    );
  }
}

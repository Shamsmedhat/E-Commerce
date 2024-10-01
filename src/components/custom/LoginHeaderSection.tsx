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
      <li className="mr-4 flex h-14 items-center justify-center gap-3 border-e px-6 xmd:flex-col">
        <Link
          href="/auth/login"
          className="flex items-center gap-1 text-[14px] font-semibold transition-colors hover:text-primary"
        >
          {t("x5CK85cNmYaHmtijJxw1l")}
          <FiUser size={20} strokeWidth={1} />
        </Link>
        <Link
          href="/auth/signup"
          className="rounded-full bg-primary px-4 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-primary/70"
        >
          {t("vaXK79U6F-qTNzxkZPiJv")}
        </Link>
      </li>
    );
  } else if (status === "authenticated" || data) {
    return (
      <li className="flex h-14 flex-col items-center justify-center border-e px-6">
        <span className="text-sm text-muted-foreground">
          {t("GA5q4VAGgkQx9JSIoCH64")} {userName}
        </span>

        {/* Account dropmenu */}
        <UserDropmenu />
      </li>
    );
  }
}

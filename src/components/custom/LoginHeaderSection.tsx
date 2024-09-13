"use client";

import { Link } from "@/navigarion";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import UserDetailsListForLargeScreen from "./UserDetailsListForLargeScreen";

import useAuthToast from "@/lib/hooks/useAuthToast";
import { Skeleton } from "../ui/skeleton";

export default function LoginHeaderSection() {
  const { data, status } = useSession();
  const t = useTranslations();
  useAuthToast();

  if (status === "unauthenticated") {
    return (
      <li className="flex h-14 flex-col items-center justify-center border-e px-6">
        <Link href="/login">{t("x5CK85cNmYaHmtijJxw1l")}</Link>
      </li>
    );
  } else if (status === "loading") {
    return (
      <div className="mx-3">
        <Skeleton className="mb-4 h-7 w-[9rem] px-6" />
        <Skeleton className="h-7 w-[9rem] px-6" />
      </div>
    );
  } else if (status === "authenticated") {
    return (
      <li className="flex h-14 flex-col items-center justify-center border-e px-6">
        <span className="text-sm text-muted-foreground">
          {t("GA5q4VAGgkQx9JSIoCH64")} {data?.user.name}
        </span>

        {/* Account dropmenu */}

        <UserDetailsListForLargeScreen />
      </li>
    );
  }
}

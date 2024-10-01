import UsersListSkeleton from "@/components/skeletons/users-list-skeleton";
import { getTranslations } from "next-intl/server";
import React from "react";

export default async function loading() {
  const t = await getTranslations();
  return (
    <>
      <section className="container">
        <h2 className="py-2 text-3xl font-bold text-primary-foreground/90">
          {t("CpQmdnnSTadNa9eAOznLu")}
        </h2>
        <div className="mx-auto py-10">
          <UsersListSkeleton />
        </div>
      </section>
    </>
  );
}

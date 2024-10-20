import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { getLocale } from "next-intl/server";

export default async function SignupSkeleton() {
  const locale = await getLocale();
  const isEn = locale === "en";

  return (
    <>
      <h2 className="mb-3 text-3xl font-bold text-primary-foreground">
        <Skeleton className="h-12 w-[15rem] rounded-full bg-primary-foreground/20" />
      </h2>
      <p className="mb-4 text-lg text-primary-foreground/70">
        <Skeleton className="h-9 w-[20rem] rounded-full bg-primary-foreground/20" />
      </p>
      {/* <LoginForm session={session} /> */}
      <form className="w-full space-y-6 p-4">
        <div
          className={cn(
            isEn ? "items-end" : "items-start",
            "flex flex-col gap-3",
          )}
        >
          {/* <Label></Label> */}
          <Skeleton
            className={cn("h-7 w-[10rem] rounded-lg bg-primary-foreground/20")}
          />
          {/* <Input /> */}
          <Skeleton className="h-10 w-full rounded-lg bg-primary-foreground/20" />
        </div>
        <div
          className={cn(
            isEn ? "items-end" : "items-start",
            "flex flex-col gap-3",
          )}
        >
          {/* <Label htmlFor="password"></Label> */}
          <Skeleton className="h-7 w-[10rem] rounded-lg bg-primary-foreground/20" />

          {/* <Input />  */}
          <Skeleton className="h-10 w-full rounded-lg bg-primary-foreground/20" />
        </div>
        <div
          className={cn(
            isEn ? "items-end" : "items-start",
            "flex flex-col gap-3",
          )}
        >
          {/* <Label htmlFor="password"></Label> */}
          <Skeleton className="h-7 w-[10rem] rounded-lg bg-primary-foreground/20" />

          {/* <Input />  */}
          <Skeleton className="h-10 w-full rounded-lg bg-primary-foreground/20" />
        </div>
        <div
          className={cn(
            isEn ? "items-end" : "items-start",
            "flex flex-col gap-3",
          )}
        >
          {/* <Label htmlFor="password"></Label> */}
          <Skeleton className="h-7 w-[10rem] rounded-lg bg-primary-foreground/20" />

          {/* <Input />  */}
          <Skeleton className="h-10 w-full rounded-lg bg-primary-foreground/20" />
        </div>
        <div
          className={cn(
            isEn ? "items-end" : "items-start",
            "flex flex-col gap-3",
          )}
        >
          {/* <Label htmlFor="password"></Label> */}
          <Skeleton className="h-7 w-[10rem] rounded-lg bg-primary-foreground/20" />

          {/* <Input />  */}
          <Skeleton className="h-10 w-full rounded-lg bg-primary-foreground/20" />
        </div>
        {/* <button></button> */}
        <Skeleton className="h-12 w-full rounded-lg bg-primary-foreground/20" />
      </form>
    </>
  );
}

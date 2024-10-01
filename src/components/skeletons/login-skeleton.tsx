import { Skeleton } from "@/components/ui/skeleton";

export default function LoginSkeleton() {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="relative w-[40%] rounded-2xl bg-white p-10 shadow-lg">
        <h2 className="mb-3 text-3xl font-bold text-primary-foreground">
          <Skeleton className="h-12 w-[15rem] rounded-full bg-primary-foreground/20" />
        </h2>
        <p className="mb-4 text-lg text-primary-foreground/70">
          <Skeleton className="h-9 w-[20rem] rounded-full bg-primary-foreground/20" />
        </p>
        {/* <LoginForm session={session} /> */}
        <form className="space-y-6 p-4">
          <div className="flex flex-col gap-3">
            {/* <Label></Label> */}
            <Skeleton className="h-7 w-[10rem] rounded-lg bg-primary-foreground/20" />
            {/* <Input /> */}
            <Skeleton className="h-10 w-full rounded-lg bg-primary-foreground/20" />
          </div>
          <div className="flex flex-col gap-3">
            {/* <Label htmlFor="password"></Label> */}
            <Skeleton className="h-7 w-[10rem] rounded-lg bg-primary-foreground/20" />

            {/* <Input />  */}
            <Skeleton className="h-10 w-full rounded-lg bg-primary-foreground/20" />
          </div>
          {/* <button></button> */}
          <Skeleton className="h-12 w-full rounded-lg bg-primary-foreground/20" />
        </form>
        <div className="relative flex items-center justify-center p-3 text-[16px] before:absolute before:h-[1px] before:w-full before:bg-primary-foreground/20 before:content-['']">
          <span className="z-10 bg-white px-3">أو</span>
        </div>
        {/* <SignInProviders /> */}
        <div className="mt-8 space-y-6">
          {/* <button></button> */}
          <Skeleton className="h-14 w-full rounded-lg bg-primary-foreground/20" />

          {/* <button></button> */}
          <Skeleton className="h-14 w-full rounded-lg bg-primary-foreground/20" />
        </div>
      </div>
    </section>
  );
}

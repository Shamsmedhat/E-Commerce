import { Skeleton } from "../ui/skeleton";

export default function TabNavSkeleton({ isEn }: { isEn: boolean }) {
  return (
    <div dir={isEn ? "ltr" : "rtl"}>
      <div className="mb-6 flex justify-center gap-5 rounded-md bg-white px-4 pt-2 shadow-sm dark:bg-background/40 lg:justify-start">
        {/* Tabnav categories list */}
        <div className="flex gap-8 border-transparent px-4 py-2 text-base font-medium text-primary-foreground/70 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary">
          {/* render category image with name based on locale*/}
          <span className="flex gap-2">
            <Skeleton className="h-[1.5rem] w-[4rem] bg-primary-foreground/20" />
          </span>
          <span className="flex gap-2">
            <Skeleton className="h-[1.5rem] w-[4rem] bg-primary-foreground/20" />
          </span>
          <span className="flex gap-2">
            <Skeleton className="h-[1.5rem] w-[4rem] bg-primary-foreground/20" />
          </span>
          <span className="flex gap-2">
            <Skeleton className="h-[1.5rem] w-[4rem] bg-primary-foreground/20" />
          </span>
          <span className="flex gap-2">
            <Skeleton className="h-[1.5rem] w-[4rem] bg-primary-foreground/20" />
          </span>
          <span className="flex gap-2">
            <Skeleton className="h-[1.5rem] w-[4rem] bg-primary-foreground/20" />
          </span>
        </div>
      </div>
    </div>
  );
}

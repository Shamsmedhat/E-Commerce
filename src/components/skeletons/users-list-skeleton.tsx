import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableHeader, TableRow } from "@/components/ui/table";

export default function UsersListSkeleton() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <div className="mb-3 flex border-b-[0.5px]">
            <Skeleton className="me-5 h-14 w-[25rem]" />
            <Skeleton className="h-14 w-[6rem]" />
          </div>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <Skeleton className="h-20 w-full rounded-none border-[0.5px] border-primary-foreground/10" />
          <Skeleton className="h-20 w-full rounded-none border-[0.5px] border-primary-foreground/10" />
          <Skeleton className="h-20 w-full rounded-none border-[0.5px] border-primary-foreground/10" />
          <Skeleton className="h-20 w-full rounded-none border-[0.5px] border-primary-foreground/10" />
          <Skeleton className="h-20 w-full rounded-none border-[0.5px] border-primary-foreground/10" />
          <Skeleton className="h-20 w-full rounded-none border-[0.5px] border-primary-foreground/10" />
        </TableRow>
      </TableBody>
    </Table>
  );
}

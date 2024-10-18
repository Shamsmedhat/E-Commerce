import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "../ui/skeleton";
export default function OrdersTableSkeleton() {
  const displayedRowNum = Array.from({ length: 12 });
  return (
    <Table>
      <TableCaption className="">
        <Skeleton className="h-8 w-full bg-primary-foreground/30" />
      </TableCaption>
      <TableHeader className="bg-primary-foreground/10">
        <TableRow>
          <TableHead className="text-start font-semibold">
            <Skeleton className="h-7 w-full bg-primary-foreground/30" />
          </TableHead>
          <TableHead className="text-start font-semibold">
            <Skeleton className="h-7 w-full bg-primary-foreground/30" />
          </TableHead>
          <TableHead className="text-start font-semibold">
            <Skeleton className="h-7 w-full bg-primary-foreground/30" />
          </TableHead>
          <TableHead className="text-start font-semibold">
            <Skeleton className="h-7 w-full bg-primary-foreground/30" />
          </TableHead>
          <TableHead className="px-0 py-2 text-start font-semibold">
            <Skeleton className="h-7 w-full bg-primary-foreground/30" />
          </TableHead>
          <TableHead className="text-start font-semibold">
            <Skeleton className="h-7 w-full bg-primary-foreground/30" />
          </TableHead>
          <TableHead className="text-start font-semibold">
            <Skeleton className="h-7 w-full bg-primary-foreground/30" />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {displayedRowNum.map((r, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium">
              <Skeleton className="h-7 w-full bg-primary-foreground/10" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-7 w-full bg-primary-foreground/10" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-7 w-full bg-primary-foreground/10" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-7 w-full bg-primary-foreground/10" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-7 w-full bg-primary-foreground/10" />
            </TableCell>
            <TableCell className="font-semibold">
              <Skeleton className="h-7 w-full bg-primary-foreground/10" />
            </TableCell>
            <TableCell className="font-semibold">
              <Skeleton className="h-7 w-full bg-primary-foreground/10" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow className="text-lg font-bold">
          <TableCell colSpan={3} className="capitalize">
            <Skeleton className="h-7 w-full bg-primary-foreground/30" />
          </TableCell>
          <TableCell className="pe-28 text-end" colSpan={4}>
            <Skeleton className="h-7 w-full bg-primary-foreground/30" />
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

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
    <>
      <div className="my-10 flex w-full flex-wrap items-stretch xl:flex-nowrap xl:justify-between">
        <div className="border-1 mx-1 flex grow flex-col gap-1 rounded-lg border-primary-foreground p-5 shadow-md xl:w-1/5">
          <span className="mb-3">
            <Skeleton className="h-7 w-full bg-primary-foreground/30" />
          </span>
          <span className="font-bold text-green-600">
            <Skeleton className="h-7 w-full bg-primary-foreground/30" />
          </span>
          <span className="text-2xl font-bold text-green-600">
            <Skeleton className="h-7 w-full bg-primary-foreground/30" />
          </span>
        </div>

        <div className="border-1 mx-1 flex grow flex-col gap-1 rounded-lg border-primary-foreground p-5 shadow-md xl:w-1/5">
          <span className="mb-3">
            <Skeleton className="h-7 w-full bg-primary-foreground/30" />
          </span>
          <span className="font-bold text-primary">
            <Skeleton className="h-7 w-full bg-primary-foreground/30" />
          </span>
          <span className="text-2xl font-bold text-[#fec031]">
            <Skeleton className="h-7 w-full bg-primary-foreground/30" />
          </span>
        </div>

        <div className="border-1 mx-1 flex grow flex-col gap-1 rounded-lg border-primary-foreground p-5 shadow-md xl:w-1/5">
          <span className="mb-3">
            <Skeleton className="h-7 w-full bg-primary-foreground/30" />
          </span>
          <span className="font-bold">
            <Skeleton className="h-7 w-full bg-primary-foreground/30" />
          </span>
          <span className="text-2xl font-bold">
            <Skeleton className="h-7 w-full bg-primary-foreground/30" />
          </span>
        </div>

        <div className="border-1 mx-1 flex grow flex-col gap-1 rounded-lg border-primary-foreground p-5 shadow-md xl:w-1/5">
          <span className="mb-3 flex justify-between">
            <Skeleton className="h-7 w-full bg-primary-foreground/30" />
            <div className="flex items-start justify-center space-x-2"></div>
          </span>
          <span className="font-bold">
            <Skeleton className="h-7 w-full bg-primary-foreground/30" />
          </span>
          <span className="text-2xl font-bold">
            <Skeleton className="h-7 w-full bg-primary-foreground/30" />
          </span>
        </div>

        <div className="border-1 mx-1 flex grow justify-between gap-1 rounded-lg border-primary-foreground p-5 shadow-md xl:w-1/5">
          <div className="flex flex-grow flex-col items-center justify-between border-e-2 border-primary-foreground/10">
            <span className="mb-3">
              <Skeleton className="h-7 w-full bg-primary-foreground/30" />
            </span>
            <span className="font-bold text-primary-foreground">
              <Skeleton className="h-7 w-full bg-primary-foreground/30" />
            </span>
            <span className="text-2xl font-bold text-primary-foreground">
              <Skeleton className="h-7 w-full bg-primary-foreground/30" />
            </span>
          </div>
          <div className="flex flex-grow flex-col items-center justify-between">
            <span className="mb-3">
              <Skeleton className="h-7 w-full bg-primary-foreground/30" />
            </span>
            <span className="font-bold text-primary-foreground">
              <Skeleton className="h-7 w-full bg-primary-foreground/30" />
            </span>
            <span className="text-2xl font-bold text-primary-foreground">
              <Skeleton className="h-7 w-full bg-primary-foreground/30" />
            </span>
          </div>
        </div>
      </div>
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
    </>
  );
}

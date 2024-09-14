import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableHeader, TableRow } from "@/components/ui/table";
import React from "react";

export default function loading() {
  return (
    <>
      <section>
        <h2>users</h2>
        <div className="container mx-auto py-10">
          <Table>
            <TableHeader>
              <TableRow>
                <div className="mb-3 flex">
                  <Skeleton className="me-5 h-14 w-[25rem]" />
                  <Skeleton className="h-14 w-[6rem]" />
                </div>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <Skeleton className="h-14 w-full rounded-none border-[0.5px] border-primary-foreground/10" />
                <Skeleton className="h-14 w-full rounded-none border-[0.5px] border-primary-foreground/10" />
                <Skeleton className="h-14 w-full rounded-none border-[0.5px] border-primary-foreground/10" />
                <Skeleton className="h-14 w-full rounded-none border-[0.5px] border-primary-foreground/10" />
                <Skeleton className="h-14 w-full rounded-none border-[0.5px] border-primary-foreground/10" />
                <Skeleton className="h-14 w-full rounded-none border-[0.5px] border-primary-foreground/10" />
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </>
  );
}

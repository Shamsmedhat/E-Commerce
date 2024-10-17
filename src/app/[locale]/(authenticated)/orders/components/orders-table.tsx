"use client";
import React from "react";
import { useOrders } from "@/lib/utils/data/orders-data";
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
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function OrdersTable() {
  const { orders, isError, isFetching, isPending } = useOrders();
  const t = useTranslations();
  // Ensure we get the last status from the progress array safely
  const getLastProgress = (order) => {
    const progress = order?.progress;
    if (!progress || progress.length === 0) return undefined;
    return progress[progress.length - 1]?.status;
  };

  if (isFetching) {
    //todo return skeleton
    return;
  }

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader className="bg-primary-foreground/10">
        <TableRow>
          <TableHead className="text-right">Order number</TableHead>
          <TableHead className="text-right">Paid</TableHead>
          <TableHead className="text-right">Payment method</TableHead>
          <TableHead className="text-right">Progress</TableHead>
          <TableHead className="text-right">Created at</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders?.orders.map((order) => {
          const lastProgress = getLastProgress(order);

          return (
            <TableRow key={order._id}>
              <TableCell className="font-medium">{order._id}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={cn(
                    order.paid ? "bg-green-500/30" : "bg-red-500/30",
                  )}
                >
                  {order.paid ? "Paid" : "Not paid"}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="uppercase">
                  {order.paymentType}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={cn(
                    lastProgress === "Pending"
                      ? "bg-yellow-500/30"
                      : "bg-green-500/30",
                  )}
                >
                  {lastProgress || "Unknown"}
                </Badge>
              </TableCell>
              <TableCell>
                {new Date(order.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell className="font-semibold">
                {order.totalPrice} {t("fU01whrYbLGxy6qtBGMEo")}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="pl-28 text-left" colSpan={3}>
            {t("fU01whrYbLGxy6qtBGMEo")}{" "}
            {orders?.orders
              .map((o) => o.totalPrice)
              .reduce((acc, curr) => acc + curr)
              .toFixed(2)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

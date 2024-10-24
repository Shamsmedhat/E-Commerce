"use client";
import React, { useState } from "react";
import {
  useOrders,
  useSortedOrdersByOldest,
} from "@/lib/utils/data/orders-data";
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
import { LuArrowUpDown } from "react-icons/lu";

import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import OrdersTableSkeleton from "@/components/skeletons/orders-table-skeleton";
import EmptyOrders from "./empty-orders";

export default function OrdersTable() {
  const t = useTranslations();

  const [isSort, setIsSort] = useState<boolean>(false);
  const {
    orders,
    isError: isOrdersError,
    isFetching: isOrdersFetching,
    isPending: isOrdersPending,
  } = useOrders();
  // Ensure we get the last status from the progress array safely

  const {
    sortedOrders,
    isError: isSorterOrdersError,
    isFetching: isSortedOrdersFetching,
    isPending: isSortedOrdersPending,
  } = useSortedOrdersByOldest();
  // Ensure we get the last status from the progress array safely

  const getLastProgress = (order: Order) => {
    const progress = order?.progress;
    if (!progress || progress.length === 0) return undefined;
    return progress[progress.length - 1]?.status;
  };
  if (isOrdersFetching || isSortedOrdersFetching) {
    return <OrdersTableSkeleton />;
  }

  // if (!orders && !sortedOrders) {
  if (!orders && !sortedOrders) {
    return <EmptyOrders />;
  }

  const ordersToDisplay = isSort ? sortedOrders?.orders : orders?.orders;

  return (
    <Table>
      <TableCaption>{t("9GD9qa6frmZv5IVNLnes3")}</TableCaption>
      <TableHeader className="bg-primary-foreground/10">
        <TableRow>
          <TableHead className="text-start font-semibold">
            {t("9iFuvIaOuqe8eyex_3jYI")}
          </TableHead>
          <TableHead className="text-start font-semibold">
            {t("yF34d8h3uQBJSvauegM5q")}
          </TableHead>
          <TableHead className="text-start font-semibold">
            {t("7Grayfv2RXsP1T4Zk__kz")}
          </TableHead>
          <TableHead className="text-start font-semibold">
            {t("tw11yOaxb2tF1rXwcaz4P")}
          </TableHead>
          <TableHead className="px-0 py-2 text-start font-semibold">
            <button
              onClick={() => setIsSort((prev) => !prev)}
              className="flex items-center gap-2 rounded-lg px-4 py-2 hover:bg-primary-foreground/20"
            >
              {t("dDBoKONa8VSXnX-0_fQJb")}
              <LuArrowUpDown />
            </button>
          </TableHead>
          <TableHead className="text-start font-semibold">
            {t("kEwxxGEVsOR4lDE_0Ta7Y")}
          </TableHead>
          <TableHead className="text-start font-semibold">
            {t("krJUEk4W2mtaxA-5iQ-De")}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {ordersToDisplay?.map((order) => {
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
                {order.items.length} {t("G0B9p9kdebqn67ZPGWGi4")}
              </TableCell>
              <TableCell className="font-semibold">
                {order.totalPrice} {t("fU01whrYbLGxy6qtBGMEo")}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      <TableFooter>
        <TableRow className="text-lg font-bold">
          <TableCell colSpan={3} className="capitalize">
            {t("qFZLbWLkdt6bLleI_7dJb")}
          </TableCell>
          <TableCell className="pe-28 text-end" colSpan={4}>
            {orders?.orders
              .map((o) => o.totalPrice)
              .reduce((acc, curr) => acc + curr)
              .toFixed(2)}{" "}
            {t("fU01whrYbLGxy6qtBGMEo")}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

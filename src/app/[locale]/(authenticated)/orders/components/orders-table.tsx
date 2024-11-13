"use client";
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
import { useOrders, useTotalOrders } from "@/lib/utils/data/orders-data";
import { useState } from "react";
import { LuArrowUpDown } from "react-icons/lu";

import OrdersTableSkeleton from "@/components/skeletons/orders-table-skeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import EmptyOrders from "./empty-orders";
import OrdersStatistics from "./orders-statistics";

export default function OrdersTable() {
  const t = useTranslations();
  const [isSort, setIsSort] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const {
    orders,
    isError: isOrdersError,
    isFetching: isOrdersFetching,
  } = useOrders(currentPage, isSort);
  const {
    totalOrders,
    isError: isTotalOrdersError,
    isFetching: isTotalOrdersFetching,
  } = useTotalOrders();

  const getLastProgress = (order: Order) => {
    const progress = order?.progress;
    if (!progress || progress.length === 0) return undefined;
    return progress[progress.length - 1]?.status;
  };

  if (isOrdersFetching || isTotalOrdersFetching) {
    return <OrdersTableSkeleton />;
  }

  if (!orders || !totalOrders) {
    return <EmptyOrders />;
  }

  const ordersToDisplay = orders?.orders;

  function handleNextPage() {
    if (currentPage === orders?.pagination.pages) return;
    setCurrentPage((prev) => prev + 1);
  }

  function handlePreviousPage() {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  }
  // const displayOrders = console.log("orders", orders);

  const totalOrdersCount = totalOrders?.orders?.length ?? 0;

  return (
    <>
      <OrdersStatistics
        totalOrders={totalOrders!}
        totalOrdersCount={totalOrdersCount}
        isTotalOrdersFetching={isTotalOrdersFetching}
      />
      <Table className="mb-8 mt-2 rounded-lg border border-primary-foreground/30 shadow-sm dark:bg-background/20">
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
          <TableRow className="text-base font-semibold">
            <TableCell colSpan={3} className="capitalize">
              <Button
                variant={"outline"}
                disabled={currentPage === 1}
                onClick={handlePreviousPage}
              >
                {t("nAS8VRAwwpzLSK9WneNKw")}
              </Button>
            </TableCell>
            <TableCell className="flex-grow text-center" colSpan={2}>
              <span>
                {t("j8xVhdlecqNJU_Oo_4l79")} {currentPage}{" "}
                {t("Ej96yqfR0vNxVwXencTJW")} {orders?.pagination.pages}
              </span>
            </TableCell>
            <TableCell className="pe-28 text-end" colSpan={3}>
              <Button
                variant={"outline"}
                disabled={currentPage === orders?.pagination.pages}
                onClick={handleNextPage}
              >
                {t("WMYpo4hjNfyYvAFwga1Yl")}
              </Button>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}

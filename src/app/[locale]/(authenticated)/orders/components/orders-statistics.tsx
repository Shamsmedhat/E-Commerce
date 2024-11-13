"use client";

import { formatToCurrency } from "@/lib/utils/helpers";
import { useLocale, useTranslations } from "next-intl";
import CountUp from "react-countup";
import { FaBoxOpen } from "react-icons/fa";
import { FaBoxesStacked, FaCreditCard, FaMoneyBillWave } from "react-icons/fa6";
import { FcMoneyTransfer } from "react-icons/fc";
import { RiSecurePaymentFill } from "react-icons/ri";

type OrdersStatisticsProps = {
  totalOrders: OrdersData;
  totalOrdersCount: number;
  isTotalOrdersFetching: boolean;
};

export default function OrdersStatistics({
  totalOrders,
  totalOrdersCount,
  isTotalOrdersFetching,
}: OrdersStatisticsProps) {
  const locale = useLocale();
  const isEn = locale === "en";
  const t = useTranslations();
  const totalOrdersAmount =
    totalOrders?.orders?.reduce((ac, cur) => ac + cur.totalPrice, 0) ?? 0;

  const totalItems =
    totalOrders?.orders?.reduce((ac, cur) => ac + cur.items.length, 0) ?? 0;

  const paidCount =
    totalOrders?.orders?.reduce((ac, cur) => ac + (cur.paid ? 1 : 0), 0) ?? 0;

  const paidPercentage =
    totalOrdersCount > 0 ? (paidCount / totalOrdersCount) * 100 : 0;

  const totalCardOrders = totalOrders.orders.filter(
    (i) => i.paymentType === "card",
  ).length;

  const totalCashOrders = totalOrders.orders.filter(
    (i) => i.paymentType === "cash",
  ).length;

  return (
    <div className="my-10 flex w-full flex-wrap items-stretch xl:flex-nowrap xl:justify-between">
      <div className="border-1 mx-1 flex grow flex-col gap-1 rounded-lg border-primary-foreground p-5 shadow-md dark:bg-background xl:w-1/5">
        <span className="mb-3">
          <FcMoneyTransfer size={30} />
        </span>
        <span className="font-bold text-green-600">
          {t("AQfH5Mf3urHYQDrr7-Oc8")}
        </span>
        {
          <span className="text-2xl font-bold text-green-600">
            {isEn ? (
              <CountUp
                className="text-2xl font-bold text-green-600"
                end={totalOrdersAmount!}
              >
                {({ countUpRef }) => (
                  <span ref={countUpRef}>
                    {formatToCurrency(totalOrdersAmount!, "en-EG")}
                  </span>
                )}
              </CountUp>
            ) : (
              <CountUp
                className="text-2xl font-bold text-green-600"
                end={totalOrdersAmount!}
              >
                {({ countUpRef }) => (
                  <span ref={countUpRef}>
                    {formatToCurrency(totalOrdersAmount!, "ar-EG")}
                  </span>
                )}
              </CountUp>
            )}
            <span className="mx-2">{t("fU01whrYbLGxy6qtBGMEo")}</span>
          </span>
        }
      </div>

      <div className="border-1 mx-1 flex grow flex-col gap-1 rounded-lg border-primary-foreground p-5 shadow-md dark:bg-background xl:w-1/5">
        <span className="mb-3">
          <FaBoxOpen size={30} color="#fec03192 " />
        </span>
        <span className="font-bold text-primary">
          {t("iBPUwtZ3FAlXJk7RM9Gf8")}
        </span>
        <CountUp end={totalOrdersCount!}>
          {({ countUpRef }) => (
            <span
              ref={countUpRef}
              className="text-2xl font-bold text-[#fec031]"
            >
              {totalOrdersCount}
            </span>
          )}
        </CountUp>
      </div>

      <div className="border-1 mx-1 flex grow flex-col gap-1 rounded-lg border-primary-foreground p-5 shadow-md dark:bg-background xl:w-1/5">
        <span className="mb-3">
          <FaBoxesStacked size={30} color="#007185" />
        </span>
        <span className="font-bold text-backup">
          {t("jnBbEfJqzv5Clj76EaX8b")}
        </span>
        <CountUp
          className="text-2xl font-bold text-[#007185]"
          end={totalItems!}
        >
          {({ countUpRef }) => (
            <span ref={countUpRef} className="text-2xl font-bold text-backup">
              {totalItems}
            </span>
          )}
        </CountUp>
      </div>

      <div className="border-1 mx-1 flex grow flex-col gap-1 rounded-lg border-primary-foreground p-5 shadow-md dark:bg-background xl:w-1/5">
        <span className="mb-3 flex justify-between">
          <RiSecurePaymentFill size={30} color="#F03351" />
          <div className="flex items-start justify-center space-x-2">
            <span className="rounded-full bg-green-500 p-1 font-semibold text-white shadow-sm">
              {paidPercentage.toFixed(0)} %
            </span>
          </div>
        </span>
        <span className="font-bold text-[#F03351]">
          {t("-AR-h0v8huXn9hSTU8HV1")}
        </span>
        <CountUp className="text-2xl font-bold text-[#F03351]" end={paidCount!}>
          {({ countUpRef }) => (
            <span
              ref={countUpRef}
              className="text-2xl font-bold text-[#F03351]"
            >
              {paidCount}
            </span>
          )}
        </CountUp>
      </div>

      <div className="border-1 mx-1 flex grow justify-between gap-1 rounded-lg border-primary-foreground p-5 shadow-md dark:bg-background xl:w-1/5">
        <div className="flex flex-grow flex-col items-center justify-between border-e-2 border-primary-foreground/10">
          <span className="mb-3">
            <FaCreditCard
              size={30}
              className="text-[#3c3c3b] dark:text-white"
            />
          </span>
          <span className="font-bold text-primary-foreground dark:text-white">
            {t("2EJfsTFsUBGyeOYvKmUob")}
          </span>
          <CountUp
            className="text-2xl font-bold text-primary-foreground dark:text-white"
            end={totalCardOrders!}
          >
            {({ countUpRef }) => (
              <span
                ref={countUpRef}
                className="text-2xl font-bold text-[#3c3c3b] dark:text-white"
              >
                {totalCardOrders}
              </span>
            )}
          </CountUp>
        </div>
        <div className="flex flex-grow flex-col items-center justify-between">
          <span className="mb-3">
            <FaMoneyBillWave
              size={30}
              className="text-[#3c3c3b] dark:text-white"
            />
          </span>
          <span className="font-bold text-primary-foreground dark:text-white">
            {t("3MP1XlEFf-7KjGY9cHjW1")}
          </span>
          <CountUp
            className="text-2xl font-bold text-primary-foreground dark:text-white"
            end={totalCashOrders!}
          >
            {({ countUpRef }) => (
              <span
                ref={countUpRef}
                className="text-2xl font-bold text-[#3c3c3b] dark:text-white"
              >
                {totalCashOrders}
              </span>
            )}
          </CountUp>
        </div>
      </div>
    </div>
  );
}

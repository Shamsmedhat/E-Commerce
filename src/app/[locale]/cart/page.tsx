import Heading from "@/components/common/Heading";
import { products } from "@/_lib/data";
import { getTranslations } from "next-intl/server";
import ToggleStyleBtn from "@/components/common/ToggleStyleBtn";
import CartList from "./_components/CartList";
import CartSummary from "./_components/CartSummary";
import MyButton from "@/components/common/MyButton";
import SubmitBtn from "./_components/SubmitBtn";

export default async function Cart() {
  const data = products;
  const t = await getTranslations();
  return (
    <section className="container mt-7 flex flex-col md:flex-row">
      {/* Cart content */}
      <div className="flex-grow-[1]">
        {/* Heading */}
        <div className="flex items-center justify-between">
          <Heading>{t("_Kg79lEkLCt2SxOaeQJZ2")}</Heading>
          <ToggleStyleBtn />
        </div>
        {/* List of Cart items */}
        <div>
          <CartList data={data} />
        </div>
        {/* checkout submit btn */}
        <div className="">
          <SubmitBtn />
        </div>
      </div>
      {/* Cart summary */}
      <div className="ms-[3rem] flex h-fit min-w-[20%] flex-col items-center rounded-lg bg-white pt-4 shadow-sm">
        <CartSummary />
      </div>
    </section>
  );
}

import Image from "next/image";
import { badgeVariants } from "@/components/ui/badge";
import Link from "next/link";
import phone from "@/../public/assets/iphone.png";
import petFood from "@/../public/assets/pet-food.png";
import snacks from "@/../public/assets/snacks.png";
import Heading from "@/components/common/Heading";

export default function TopCategories() {
  return (
    <section className="container flex flex-col gap-8  mb-10 px-5">
      <Heading>افضـل المنتـجات</Heading>
      <div className="flex flex-row gap-6">
        {/* Electronics card */}
        <div className="flex bg-categories-electronics px-4 pt-2 w-1/3 justify-between overflow-hidden shadow-xl">
          <Image
            src={phone}
            alt=""
            className="object-cover h-[17rem] w-[15rem] translate-y-16"
          />
          <div className="mt-[2rem]">
            <Link
              href="/electronics"
              className={`${badgeVariants({ variant: "outline" })} rounded-none border-none bg-white/20 !text-white !text-base`}
            >
              إلكتـرونيات
            </Link>

            <p className="mt-2 text-white text-2xl">أحـدث الهواتف</p>
          </div>
        </div>

        {/* Home & pet care card */}
        <div className="flex flex-col-reverse bg-categories-homeAndPetCare px-4 pt-2 w-1/3 justify-between overflow-hidden shadow-xl">
          <Image
            src={petFood}
            alt=""
            className=" h-[10rem] w-[18rem] object-cover mt-2 flex-1 translate-x-[-30%]"
          />
          <div className="mt-[2rem]">
            <Link
              href=""
              className={`${badgeVariants({ variant: "outline" })} rounded-none border-none bg-white/20 !text-white !text-base`}
            >
              رعاية المنزل والحيوانات الأليفة
            </Link>

            <p className="mt-2 text-white text-xl">أغذية ومستلزمات الحيوانات الأليفة</p>
          </div>
        </div>

        {/* Food card */}
        <div className="flex flex-col-reverse bg-categories-food px-4 pt-2 w-1/3 justify-between overflow-hidden shadow-xl">
          <Image
            src={snacks}
            alt=""
            className=" h-full object-scale-down "
          />
          <div className="mt-[2rem] justify-start flex-col">
            <Link
              href=""
              className={`${badgeVariants({ variant: "outline" })} rounded-none border-none bg-white/20 !text-white !text-base`}
            >
              طـعام
            </Link>
            <br />
            <p className="mt-2 text-white text-xl">رقائق البطاطس والوجبات الخفيفة والمكسرات</p>
          </div>
        </div>
      </div>
    </section>
  );
}

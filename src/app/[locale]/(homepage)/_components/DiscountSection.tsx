import Image from "next/image";
import iphoneImg from "@/../public/assets/iphone.png";
import headphoneImg from "@/../public/assets/headphone.png";
import Link from "next/link";

export default function DiscountSection() {
  return (
    <div className="relative mb-5 flex h-[8.5rem] w-full items-center justify-center bg-categories-electronics drop-shadow-sm">
      <Image
        //clip top custom css in the globals css not from tailwind
        src={iphoneImg}
        alt="electronics offers"
        className="clip-bottom absolute left-0 top-[-4rem] h-[15rem] w-[17rem] transition-all duration-300 ease-in-out lg:left-[10%] lg:top-[-6rem] lg:h-[17rem] lg:w-[27rem]"
      />
      <div className="flex-col text-center">
        <p className="text-3xl font-bold text-white">50% خصم</p>
        <p className="mb-2 text-2xl uppercase text-primary-foreground">
          لجميع الالكـــترونيــات
        </p>
        <Link
          href=""
          className="border border-white px-6 text-sm font-bold text-white transition-colors hover:bg-white hover:text-primary-foreground"
        >
          تـسوق الأن
        </Link>
      </div>
      <Image
        // clip top custom css in the globals css not from tailwind
        src={headphoneImg}
        alt="electronics offers"
        className="clip-top absolute right-0 top-[-4rem] w-[17rem] lg:right-[10%]"
      />
    </div>
  );
}

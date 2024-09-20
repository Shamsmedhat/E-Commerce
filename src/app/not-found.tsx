"use client";
import Link from "next/link";
import "@/app/[locale]/globals.css";
import Image from "next/image";
import errorImage from "@/../../public/assets/error.png";
import { usePathname } from "next/navigation";
import { GoArrowUpRight } from "react-icons/go";
export default function NotFound() {
  const pathname = usePathname();
  return (
    <div className="flex h-svh flex-col items-center justify-center bg-primary-foreground/10">
      <Image src={errorImage} className="h-[400px]" alt="page not found" />
      <h2 className="text-7xl">Page Not Found</h2>
      <div className="mt-4 flex gap-2">
        <Link href="/" className="flex text-lg text-backup underline">
          <GoArrowUpRight size={12} />
          <span>Return Home</span>
        </Link>
        <p className="text-lg">Could not find the page {pathname}</p>
      </div>
    </div>
  );
}

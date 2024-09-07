import { Link } from "@/navigarion";
import Image from "next/image";

export default function Logo({ width = 80, height = 80 }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-1 text-lg font-bold uppercase"
    >
      <Image
        src="/assets/Zeronet_logo.png"
        alt="E-Commerce"
        width={width}
        height={height}
        priority
      />
    </Link>
  );
}

import { Link } from "@/navigarion";
import { ShoppingCartIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AddToCart() {
  const t = useTranslations();

  return (
    <div className="w-[9.5rem]">
      <button className="flex items-center justify-start gap-3 rounded-full bg-primary py-1 pe-4 ps-1 align-middle text-sm text-white transition-colors hover:bg-primary/80">
        <span className="rounded-full bg-white p-2">
          <ShoppingCartIcon className="text-primary-foreground" size={15} />
        </span>
        <Link href="/cart">{t("-k0yk9GUHIDLWvq7B4mRs")}</Link>
      </button>
    </div>
  );
}

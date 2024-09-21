import Imge3 from "@/../public/assets/Dog_Food.webp";
import Image from "next/image";
import { PRODUCT_DATA } from "@/models/products";

export default function TopSellingItem({ product }: { product: PRODUCT_DATA }) {
    return (
        // <HoverCard>
        <div className="cursor-pointer flex align-middle justify-center items-start flex-col p-4">
            {/* <HoverCardTrigger> */}
            <Image
                src={Imge3}
                width={150}
                alt=""
            />
            <span className="text-sm text-primary-foreground/80 mb-4">{product.category}</span>
            <h4 className="text-lg font-bold text-primary-foreground mb-4">{product.name}</h4>
            <div className="flex flex-col">
                <span className="text-primary-foreground/70 line-through text-sm">20000 جنيـة</span>
                <span className="text-primary-foreground font-bold">{product.price} جنيـة</span>
            </div>
            {/* </HoverCardTrigger> */}
        </div>
    );
    {
        /* <HoverCardContent>Test</HoverCardContent> */
    }
    {
        /* </HoverCard> */
    }
}

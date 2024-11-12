import { Skeleton } from "../ui/skeleton";
import ProductCardSkeleton from "./product-card-skeleton";

export default function DealsOfTheDaySkeleton({ isEn }: { isEn: boolean }) {
  const skeletonArray = Array.from({ length: 7 }, (_, i) => i);

  return (
    <div>
      <div className="py-4">
        {/* Filter products based on the current category */}
        <div>
          <ul className="grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-4 xsm:grid-cols-4">
            {skeletonArray.map((i) => (
              <ProductCardSkeleton key={i} isEn={isEn} i={i} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

import { Skeleton } from "../ui/skeleton";

export default function DealsOfTheDaySkeleton({ isEn }: { isEn: boolean }) {
  return (
    <div dir={isEn ? "ltr" : "rtl"} className="mt-[1.5rem]">
      <ul className="grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-4 xsm:grid-cols-4">
        {/* style in only first product */}

        <li className="col-span-1 row-span-2 flex h-full flex-col items-center justify-between rounded-lg bg-white p-5 shadow-sm xsm:col-span-2 md:row-span-1 xl:row-span-2">
          <div className="flex w-full">
            {/* product image div*/}
            <div className="h-full grow md:w-[25%]">
              <Skeleton className="h-[23rem] w-[20rem] rounded-lg bg-primary-foreground/20" />
            </div>

            {/* product details */}
            <div className="flex h-full flex-1 flex-col justify-evenly">
              {/* sub category */}
              <span className="font-bold text-primary-foreground/70">
                <Skeleton className="h-[1rem] w-[4rem] rounded-lg bg-primary-foreground/20" />
              </span>
              {/* Product title */}
              <h3 className="text-xl xsm:text-base md:text-xl xl:text-2xl">
                <Skeleton className="h-[3rem] w-full rounded-lg bg-primary-foreground/20" />
              </h3>

              {/* display the Product description only in first product*/}

              <p className="hidden text-primary-foreground/70 xl:block">
                <Skeleton className="h-[6rem] w-full rounded-lg bg-primary-foreground/20" />
              </p>

              {/* display the stars component only when there is rating */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-primary-foreground">
                  <Skeleton className="h-[1.5rem] w-[10rem] rounded-lg bg-primary-foreground/20" />
                </span>
              </div>

              {/* Priceing & divs Section */}
              <div className="flex-col gap-4">
                {/* Priceing */}
                <span className="flex w-full gap-2 xl:text-xl">
                  <span className="text-sm text-primary-foreground/40 line-through">
                    <Skeleton className="h-[1rem] w-[4rem] rounded-lg bg-primary-foreground/20" />
                  </span>
                  {/* product price */}
                  <span className="font-extrabold text-primary-foreground">
                    <Skeleton className="h-[1rem] w-[4rem] rounded-lg bg-primary-foreground/20" />
                  </span>
                </span>

                {/* div1 Section */}
                <div className="mt-2 flex w-full items-start justify-start gap-3 xsm:flex-col-reverse sm:flex-row sm:items-center">
                  {/* cart btn */}
                  <div>
                    <Skeleton className="h-[2.5rem] w-[8rem] rounded-lg bg-primary-foreground/20" />
                  </div>

                  <div className="flex gap-2">
                    {/* wishlist btn */}
                    <div>
                      <div>
                        <Skeleton className="h-[2rem] w-[2rem] rounded-full bg-primary-foreground/20" />
                      </div>
                    </div>

                    {/* compair btn */}
                    <div>
                      <div>
                        <Skeleton className="h-[2rem] w-[2rem] rounded-full bg-primary-foreground/20" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        {/* style in Sec and third product */}

        <li className="col-span-2 row-span-2 rounded-lg bg-white p-5 shadow-sm md:row-span-1">
          <div className="flex gap-6">
            {/* product image div*/}
            <div className="relative h-full md:w-[25%]">
              <Skeleton className="h-[10rem] rounded-lg bg-primary-foreground/20" />
            </div>

            {/* product details */}
            <div className="flex flex-1 flex-col justify-around">
              {/* sub category */}
              <span className="font-bold text-primary-foreground/70">
                <Skeleton className="h-[1rem] w-[4rem] rounded-lg bg-primary-foreground/20" />
              </span>

              {/* Product title */}
              <h3 className="text-xl xsm:text-base md:text-xl">
                <p>
                  <Skeleton className="h-[3rem] w-full rounded-lg bg-primary-foreground/20" />
                </p>
              </h3>

              {/* Priceing & divs Section */}
              <div className="flex-col gap-4 xl:flex-row xl:gap-0">
                {/* Priceing */}
                <span className="flex w-full gap-2 xl:text-xl">
                  <span className="text-sm text-primary-foreground/40 line-through">
                    <Skeleton className="h-[1rem] w-[8rem] rounded-lg bg-primary-foreground/20" />
                  </span>
                  {/* product price */}
                  <span className="font-extrabold text-primary-foreground"></span>
                </span>

                {/* divs Section */}
                <div className="my-3 flex w-full items-start justify-start gap-3 xsm:flex-col-reverse sm:flex-row sm:items-center">
                  {/* cart btn */}
                  <div>
                    <Skeleton className="h-[2rem] w-[8rem] rounded-lg bg-primary-foreground/20" />
                  </div>

                  <div className="flex gap-2">
                    {/* wishlist btn */}
                    <div>
                      <div>
                        <Skeleton className="h-[2rem] w-[2rem] rounded-full bg-primary-foreground/20" />
                      </div>
                    </div>

                    {/* compair btn */}
                    <div>
                      <div>
                        <Skeleton className="h-[2rem] w-[2rem] rounded-full bg-primary-foreground/20" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="col-span-2 row-span-2 rounded-lg bg-white p-5 shadow-sm md:row-span-1">
          <div className="flex gap-6">
            {/* product image div*/}
            <div className="relative h-full md:w-[25%]">
              <Skeleton className="h-[10rem] rounded-lg bg-primary-foreground/20" />
            </div>

            {/* product details */}
            <div className="flex flex-1 flex-col justify-around">
              {/* sub category */}
              <span className="font-bold text-primary-foreground/70">
                <Skeleton className="h-[1rem] w-[4rem] rounded-lg bg-primary-foreground/20" />
              </span>

              {/* Product title */}
              <h3 className="text-xl xsm:text-base md:text-xl">
                <p>
                  <Skeleton className="h-[3rem] w-full rounded-lg bg-primary-foreground/20" />
                </p>
              </h3>

              {/* Priceing & divs Section */}
              <div className="flex-col gap-4 xl:flex-row xl:gap-0">
                {/* Priceing */}
                <span className="flex w-full gap-2 xl:text-xl">
                  <span className="text-sm text-primary-foreground/40 line-through">
                    <Skeleton className="h-[1rem] w-[8rem] rounded-lg bg-primary-foreground/20" />
                  </span>
                  {/* product price */}
                  <span className="font-extrabold text-primary-foreground"></span>
                </span>

                {/* divs Section */}
                <div className="my-3 flex w-full items-start justify-start gap-3 xsm:flex-col-reverse sm:flex-row sm:items-center">
                  {/* cart btn */}
                  <div>
                    <Skeleton className="h-[2rem] w-[8rem] rounded-lg bg-primary-foreground/20" />
                  </div>

                  <div className="flex gap-2">
                    {/* wishlist btn */}
                    <div>
                      <div>
                        <Skeleton className="h-[2rem] w-[2rem] rounded-full bg-primary-foreground/20" />
                      </div>
                    </div>

                    {/* compair btn */}
                    <div>
                      <div>
                        <Skeleton className="h-[2rem] w-[2rem] rounded-full bg-primary-foreground/20" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        {/* style in rest of products */}

        <li className="col-span-1 row-span-1 h-fit rounded-lg bg-white p-5 shadow-sm">
          <div>
            {/* product image div*/}
            <div className="relative h-full">
              <Skeleton className="h-[6rem] rounded-lg bg-primary-foreground/20" />
            </div>

            {/* product details */}
            <div className="flex flex-1 flex-col justify-evenly">
              {/* sub category */}
              <span className="my-3 font-bold text-primary-foreground/70">
                <Skeleton className="h-[1rem] w-12 rounded-lg bg-primary-foreground/20" />
              </span>

              {/* Product title */}
              <h3 className="mb-3 font-bold text-primary-foreground">
                <p>
                  <Skeleton className="h-[2rem] w-full rounded-lg bg-primary-foreground/20" />
                </p>
              </h3>

              {/* Priceing & divs Section */}
              <div className="mt-3 flex flex-col items-center justify-start xl:mt-0">
                {/* Priceing */}
                <span className="flex w-full gap-2 xl:text-xl">
                  <span className="text-sm text-primary-foreground/40 line-through">
                    <Skeleton className="h-[1.5rem] w-[5rem] rounded-lg bg-primary-foreground/20" />
                  </span>
                  {/* product price */}
                  <span className="font-extrabold text-primary-foreground">
                    <Skeleton className="h-[1.5rem] w-[5rem] rounded-lg bg-primary-foreground/20" />
                  </span>
                </span>

                {/* divs Section */}
                <div className="my-3 flex w-full items-start justify-start gap-3 xsm:flex-col-reverse sm:flex-row sm:items-center">
                  {/* cart btn */}
                  <div>
                    <Skeleton className="h-[1.5rem] w-[8rem] rounded-lg bg-primary-foreground/20" />
                  </div>

                  <div className="flex gap-2">
                    {/* wishlist btn */}
                    <div>
                      <div>
                        <Skeleton className="h-[2rem] w-[2rem] rounded-full bg-primary-foreground/20" />
                      </div>
                    </div>

                    {/* compair btn */}
                    <div>
                      <div>
                        <Skeleton className="h-[2rem] w-[2rem] rounded-full bg-primary-foreground/20" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="col-span-1 row-span-1 h-fit rounded-lg bg-white p-5 shadow-sm">
          <div>
            {/* product image div*/}
            <div className="relative h-full">
              <Skeleton className="h-[6rem] rounded-lg bg-primary-foreground/20" />
            </div>

            {/* product details */}
            <div className="flex flex-1 flex-col justify-evenly">
              {/* sub category */}
              <span className="my-3 font-bold text-primary-foreground/70">
                <Skeleton className="h-[1rem] w-12 rounded-lg bg-primary-foreground/20" />
              </span>

              {/* Product title */}
              <h3 className="mb-3 font-bold text-primary-foreground">
                <p>
                  <Skeleton className="h-[2rem] w-full rounded-lg bg-primary-foreground/20" />
                </p>
              </h3>

              {/* Priceing & divs Section */}
              <div className="mt-3 flex flex-col items-center justify-start xl:mt-0">
                {/* Priceing */}
                <span className="flex w-full gap-2 xl:text-xl">
                  <span className="text-sm text-primary-foreground/40 line-through">
                    <Skeleton className="h-[1.5rem] w-[5rem] rounded-lg bg-primary-foreground/20" />
                  </span>
                  {/* product price */}
                  <span className="font-extrabold text-primary-foreground">
                    <Skeleton className="h-[1.5rem] w-[5rem] rounded-lg bg-primary-foreground/20" />
                  </span>
                </span>

                {/* divs Section */}
                <div className="my-3 flex w-full items-start justify-start gap-3 xsm:flex-col-reverse sm:flex-row sm:items-center">
                  {/* cart btn */}
                  <div>
                    <Skeleton className="h-[1.5rem] w-[8rem] rounded-lg bg-primary-foreground/20" />
                  </div>

                  <div className="flex gap-2">
                    {/* wishlist btn */}
                    <div>
                      <div>
                        <Skeleton className="h-[2rem] w-[2rem] rounded-full bg-primary-foreground/20" />
                      </div>
                    </div>

                    {/* compair btn */}
                    <div>
                      <div>
                        <Skeleton className="h-[2rem] w-[2rem] rounded-full bg-primary-foreground/20" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="col-span-1 row-span-1 h-fit rounded-lg bg-white p-5 shadow-sm">
          <div>
            {/* product image div*/}
            <div className="relative h-full">
              <Skeleton className="h-[6rem] rounded-lg bg-primary-foreground/20" />
            </div>

            {/* product details */}
            <div className="flex flex-1 flex-col justify-evenly">
              {/* sub category */}
              <span className="my-3 font-bold text-primary-foreground/70">
                <Skeleton className="h-[1rem] w-12 rounded-lg bg-primary-foreground/20" />
              </span>

              {/* Product title */}
              <h3 className="mb-3 font-bold text-primary-foreground">
                <p>
                  <Skeleton className="h-[2rem] w-full rounded-lg bg-primary-foreground/20" />
                </p>
              </h3>

              {/* Priceing & divs Section */}
              <div className="mt-3 flex flex-col items-center justify-start xl:mt-0">
                {/* Priceing */}
                <span className="flex w-full gap-2 xl:text-xl">
                  <span className="text-sm text-primary-foreground/40 line-through">
                    <Skeleton className="h-[1.5rem] w-[5rem] rounded-lg bg-primary-foreground/20" />
                  </span>
                  {/* product price */}
                  <span className="font-extrabold text-primary-foreground">
                    <Skeleton className="h-[1.5rem] w-[5rem] rounded-lg bg-primary-foreground/20" />
                  </span>
                </span>

                {/* divs Section */}
                <div className="my-3 flex w-full items-start justify-start gap-3 xsm:flex-col-reverse sm:flex-row sm:items-center">
                  {/* cart btn */}
                  <div>
                    <Skeleton className="h-[1.5rem] w-[8rem] rounded-lg bg-primary-foreground/20" />
                  </div>

                  <div className="flex gap-2">
                    {/* wishlist btn */}
                    <div>
                      <div>
                        <Skeleton className="h-[2rem] w-[2rem] rounded-full bg-primary-foreground/20" />
                      </div>
                    </div>

                    {/* compair btn */}
                    <div>
                      <div>
                        <Skeleton className="h-[2rem] w-[2rem] rounded-full bg-primary-foreground/20" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="col-span-1 row-span-1 h-fit rounded-lg bg-white p-5 shadow-sm">
          <div>
            {/* product image div*/}
            <div className="relative h-full">
              <Skeleton className="h-[6rem] rounded-lg bg-primary-foreground/20" />
            </div>

            {/* product details */}
            <div className="flex flex-1 flex-col justify-evenly">
              {/* sub category */}
              <span className="my-3 font-bold text-primary-foreground/70">
                <Skeleton className="h-[1rem] w-12 rounded-lg bg-primary-foreground/20" />
              </span>

              {/* Product title */}
              <h3 className="mb-3 font-bold text-primary-foreground">
                <p>
                  <Skeleton className="h-[2rem] w-full rounded-lg bg-primary-foreground/20" />
                </p>
              </h3>

              {/* Priceing & divs Section */}
              <div className="mt-3 flex flex-col items-center justify-start xl:mt-0">
                {/* Priceing */}
                <span className="flex w-full gap-2 xl:text-xl">
                  <span className="text-sm text-primary-foreground/40 line-through">
                    <Skeleton className="h-[1.5rem] w-[5rem] rounded-lg bg-primary-foreground/20" />
                  </span>
                  {/* product price */}
                  <span className="font-extrabold text-primary-foreground">
                    <Skeleton className="h-[1.5rem] w-[5rem] rounded-lg bg-primary-foreground/20" />
                  </span>
                </span>

                {/* divs Section */}
                <div className="my-3 flex w-full items-start justify-start gap-3 xsm:flex-col-reverse sm:flex-row sm:items-center">
                  {/* cart btn */}
                  <div>
                    <Skeleton className="h-[1.5rem] w-[8rem] rounded-lg bg-primary-foreground/20" />
                  </div>

                  <div className="flex gap-2">
                    {/* wishlist btn */}
                    <div>
                      <div>
                        <Skeleton className="h-[2rem] w-[2rem] rounded-full bg-primary-foreground/20" />
                      </div>
                    </div>

                    {/* compair btn */}
                    <div>
                      <div>
                        <Skeleton className="h-[2rem] w-[2rem] rounded-full bg-primary-foreground/20" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

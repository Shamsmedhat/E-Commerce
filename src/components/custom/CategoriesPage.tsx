import { PRODUCT } from "@/models/products";
import { Label } from "@/components/ui/label";
import { Checkbox } from "../ui/checkbox";
import { ComboboxDemo } from "../ui/combobox";
import { Heart, Scale, ShoppingCartIcon } from "lucide-react";
import DiscountSection from "@/app/[locale]/(homepage)/_components/DiscountSection";
import TopSellingItems from "@/app/[locale]/(homepage)/_components/TopSellingItems";
import { categoryColor } from "@/lib/utils/helpers";

export default function CategoriesPage({ category }: { category: PRODUCT[] }) {
  const categoryName = category[0].data.category;

  return (
    <>
      <header className="mx-auto mb-[2rem] flex w-[95%] justify-between">
        <h1 className="text-3xl font-bold">{categoryName}</h1>
        <span className="text-lg font-semibold text-primary-foreground">
          {category.length} نتـيجة
        </span>
      </header>
      <div className="flex justify-around pb-[4rem]">
        {/* Aside Section */}
        <aside className="w-[15%]">
          {/* Category Section */}
          <div
            className={`bg-${categoryColor(categoryName)} mb-[2rem] rounded-md p-5 text-white`}
          >
            <h3 className="mb-3 text-xl font-bold">الفئـة</h3>
            <div className="flex flex-col items-start space-x-2 text-lg font-bold">
              <div>
                <Checkbox id="terms" className="me-3" />
                <Label htmlFor="terms">أختيــار فئة</Label>
              </div>
              <div>
                <Checkbox id="terms" className="me-3" />
                <Label htmlFor="terms">أختيــار فئة</Label>
              </div>
              <div>
                <Checkbox id="terms" className="me-3" />
                <Label htmlFor="terms">أختيــار فئة</Label>
              </div>
              <div>
                <Checkbox id="terms" className="me-3" />
                <Label htmlFor="terms">أختيــار فئة</Label>
              </div>
            </div>
          </div>

          {/* Sub category Section */}
          <div className="mb-[2rem] rounded-md bg-white p-5 text-primary-foreground">
            <h3 className="mb-3 text-xl font-bold">الفئـة الفرعية</h3>
            <div className="flex flex-col items-start space-x-2 text-lg font-bold">
              <div>
                <Checkbox id="terms" className="me-3" />
                <Label htmlFor="terms">أختيــار فئة</Label>
              </div>
              <div>
                <Checkbox id="terms" className="me-3" />
                <Label htmlFor="terms">أختيــار فئة</Label>
              </div>
              <div>
                <Checkbox id="terms" className="me-3" />
                <Label htmlFor="terms">أختيــار فئة</Label>
              </div>
              <div>
                <Checkbox id="terms" className="me-3" />
                <Label htmlFor="terms">أختيــار فئة</Label>
              </div>
            </div>
          </div>

          {/* Brand Section */}
          <div className="mb-[2rem] rounded-md bg-white p-5 text-primary-foreground">
            <h3 className="mb-3 text-xl font-bold">العـلامة التجارية</h3>
            <div className="flex flex-col items-start space-x-2 text-lg font-bold">
              <div>
                <Checkbox id="terms" className="me-3" />
                <Label htmlFor="terms">أختيــار فئة</Label>
              </div>
              <div>
                <Checkbox id="terms" className="me-3" />
                <Label htmlFor="terms">أختيــار فئة</Label>
              </div>
              <div>
                <Checkbox id="terms" className="me-3" />
                <Label htmlFor="terms">أختيــار فئة</Label>
              </div>
              <div>
                <Checkbox id="terms" className="me-3" />
                <Label htmlFor="terms">أختيــار فئة</Label>
              </div>
            </div>
          </div>

          {/*Rating section */}
          <div className="mb-[2rem] rounded-md bg-white p-5 text-primary-foreground">
            <h3 className="mb-3 text-xl font-bold">التقييـم</h3>
          </div>
        </aside>

        {/*Producsts section  */}
        <div className="w-[75%]">
          <div className="rounded-md bg-white p-3">
            <span>
              <span className="text-lg font-bold">ترتـيب حسب</span>
              <span className="ms-4">
                <SortBy />
              </span>
            </span>
          </div>

          <div className="grid-row-4 mt-[2rem] grid grid-cols-4 gap-4">
            {category
              .map((category, i) => (
                <div key={i} className="rounded-md bg-white p-3">
                  <span className="text-sm font-bold text-primary-foreground/70">
                    {category.data.subCategory}
                  </span>
                  <h3 className="mb-2 text-xl font-bold text-primary-foreground">
                    {category.data.name}
                  </h3>
                  <span className="text-primary-foreground/50 line-through">
                    20000 جنيـة
                  </span>
                  <p className="text-lg font-bold text-primary-foreground">
                    {category.data.price} جنيـة
                  </p>
                  <div className="my-4 flex items-center gap-3">
                    <button>
                      <div className="rounded-full bg-primary p-2">
                        <ShoppingCartIcon
                          className="text-primary-foreground"
                          size={15}
                        />
                      </div>
                    </button>
                    <button>
                      <div className="rounded-full bg-primary-foreground/20 p-2">
                        <Heart strokeWidth={1} size={18} />
                      </div>
                    </button>
                    <button>
                      <div className="rounded-full bg-primary-foreground/20 p-2">
                        <Scale strokeWidth={1} size={18} />
                      </div>
                    </button>
                  </div>
                </div>
              ))
              .slice(0, 20)}
          </div>
        </div>
      </div>

      <div className="my-[8rem]">
        <DiscountSection />
        <TopSellingItems />
      </div>
    </>
  );
}

function SortBy() {
  const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];

  return <ComboboxDemo frameworks={frameworks} />;
}

import MainSlider from "./_components/MainSlider";
import DealsOfTheDay from "./_components/deals-of-the-day";
import TopSellingItems from "./_components/top-selling-items";
import TopRatedItems from "./_components/top-rated-items";
import DiscountSection from "./_components/DiscountSection";
import TopCategories from "./_components/top-categories";

export default async function Page() {
  return (
    <>
      <MainSlider />
      <DealsOfTheDay />
      <DiscountSection />
      <TopSellingItems />
      <TopRatedItems />
      <TopCategories />
    </>
  );
}

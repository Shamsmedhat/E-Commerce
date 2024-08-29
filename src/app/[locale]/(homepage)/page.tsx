import MainSlider from "./_components/MainSlider";
import DealsOfTheDay from "./_components/DealsOfTheDay";
import TopSellingItems from "./_components/TopSellingItems";
import TopRatedItems from "./_components/TopRatedItems";
import DiscountSection from "./_components/DiscountSection";
import TopCategories from "./_components/TopCategories";

export default async function Page() {
  console.log("tesssssst from homee");

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

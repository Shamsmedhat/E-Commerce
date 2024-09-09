import MainSlider from "./_components/MainSlider";
import DealsOfTheDay from "./_components/DealsOfTheDay";
import TopSellingItems from "./_components/TopSellingItems";
import TopRatedItems from "./_components/TopRatedItems";
import DiscountSection from "./_components/DiscountSection";
import TopCategories from "./_components/TopCategories";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions/AuthOptions";

export default async function Page() {
  const session = await getServerSession(authOptions);
  console.log("session", session);

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

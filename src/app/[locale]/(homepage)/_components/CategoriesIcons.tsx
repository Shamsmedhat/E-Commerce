import {
  LuBaby,
  LuCalendarHeart,
  LuCat,
  LuCupSoda,
  LuMonitorSmartphone,
  LuUtensils,
} from "react-icons/lu";

export const Electronics = () => <LuMonitorSmartphone />;
export const Food = () => <LuUtensils />;
export const Beverages = () => <LuCupSoda />;
export const HealthAndPersonalCare = () => <LuCalendarHeart />;
export const HomeAndPetCare = () => <LuCat />;
export const BabyAndToddler = () => <LuBaby />;

const CategoriesIcons = {
  Electronics,
  Food,
  Beverages,
  HealthAndPersonalCare,
  HomeAndPetCare,
  BabyAndToddler,
};

export default CategoriesIcons;

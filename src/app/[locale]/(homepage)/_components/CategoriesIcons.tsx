import { Baby, CalendarHeart, Cat, CupSoda, MonitorSmartphone, Utensils } from "lucide-react";

export const Electronics = () => <MonitorSmartphone />;
export const Food = () => <Utensils />;
export const Beverages = () => <CupSoda />;
export const HealthAndPersonalCare = () => <CalendarHeart />;
export const HomeAndPetCare = () => <Cat />;
export const BabyAndToddler = () => <Baby />;

const CategoriesIcons = {
    Electronics,
    Food,
    Beverages,
    HealthAndPersonalCare,
    HomeAndPetCare,
    BabyAndToddler,
};

export default CategoriesIcons;

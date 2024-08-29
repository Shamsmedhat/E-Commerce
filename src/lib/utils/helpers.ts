export function categoryColor(categoryName: string): string {
  switch (categoryName) {
    case "إلكترونيات":
      return "categories-electronics";
    case "طعام":
      return "categories-food";
    case "رعاية المنزل والحيوانات الأليفة":
      return "categories-homeAndPetCare";
    case "المشروبات":
      return "categories-beverages";
    case "الصحة والعناية الشخصية":
      return "categories-healthAndPersonalCare";
    case "الطفل":
      return "categories-babyAndToddler";
    default:
      return "";
  }
}

export function categoryBorderColor(category: string): string {
  return category === "إلكترونيات"
    ? "border-categories-electronics"
    : category === "طعام"
      ? "border-categories-food"
      : category === "رعاية المنزل والحيوانات الأليفة"
        ? "border-categories-homeAndPetCare"
        : category === "المشروبات"
          ? "border-categories-beverages"
          : category === "الصحة والعناية الشخصية"
            ? "border-categories-healthAndPersonalCare"
            : category === "الطفل"
              ? "border-categories-babyAndToddler"
              : "";
}

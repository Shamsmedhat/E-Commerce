import { revalidateTag } from "next/cache";
import { ROLE } from "../constants/roles";

export const handleSignInToaster = () => {
  localStorage.setItem("showToast", "signIn");
};

export const handleSignOutToaster = () => {
  localStorage.setItem("showToast", "signOut");
};
export const handleCreateUserToaster = () => {
  localStorage.setItem("showToast", "createUser");
};
export const handleDeleteUserToaster = () => {
  localStorage.setItem("showToast", "deleteUser");
};

export function getUserRole(role: string): string | undefined {
  for (const [key, value] of Object.entries(ROLE)) {
    if (value === role) {
      return key;
    }
  }
}
export function getRequiredRoles(pathname: string): string[] {
  const roleRequirements: {
    [key: string]: string[];
  } = {
    dashboard: [ROLE.OWNER, ROLE.ADMIN],
    cart: [ROLE.OWNER, ROLE.ADMIN, ROLE.USER],
  };
  const pathnameSlug = pathname.split("/")[2];

  return roleRequirements[pathnameSlug] || [];
}

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

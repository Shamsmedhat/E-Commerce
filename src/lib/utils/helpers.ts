import { getCartAction } from "../actions/cart-actions";
import { ROLE } from "../constants/roles";

/**
 * Determines the text alignment direction based on the provided locale.
 *
 * @param {string} locale - The current locale, e.g., 'en' for English.
 * @returns {string} - Returns "text-end" if the locale is 'en', otherwise "text-start".
 */
export const handleEnText = (locale: string): string => {
  return locale === "en" ? "text-end" : "text-start";
};

// Get user role
export function getUserRole(role: string): string | undefined {
  for (const [key, value] of Object.entries(ROLE)) {
    if (value === role) {
      return key;
    }
  }
}

// Category color
// Category color
export function categoryColor(categoryName: string): string {
  switch (categoryName) {
    case "الالكترونيات":
    case "Electronics":
      return "categories-electronics";
    case "طعام":
    case "Food":
      return "categories-food";
    case "العناية بالمنزل والحيوانات الأليفة":
    case "Home and Pet Care":
      return "categories-homeAndPetCare";
    case "المشروبات":
    case "Beverages":
      return "categories-beverages";
    case "الصحة والعناية الشخصية":
    case "Health and Personal Care":
      return "categories-healthAndPersonalCare";
    case "الاطفال":
    case "Babies":
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

//  Handle show toaster [signin / signout / create user / delete user]
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

export function formatToCurrency(
  value: number,
  locale = "ar-EG",
  currency = "EGP",
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

// Helper function to handle localStorage
export const updateLocalStorageCart = (productId: string, quantity: number) => {
  const storedCart = JSON.parse(localStorage.getItem("guest-cart") || "[]");

  // Check if the product already exists in the cart
  const existingProduct = storedCart.find(
    (item: { product: string; quantity: number }) => item.product === productId,
  );

  if (existingProduct) {
    // Update quantity if the product exists
    existingProduct.quantity += quantity;
  } else {
    // Add new product to the cart
    storedCart.push({ product: productId, quantity });
  }

  // Save updated cart back to localStorage
  localStorage.setItem("guest-cart", JSON.stringify(storedCart));
};

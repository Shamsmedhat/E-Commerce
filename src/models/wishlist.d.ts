declare global {
  // Wishlist item
  interface WishlistItem {
    _id: string;
    category: string;
    subCategory: string;
    brand: string;
    cover: string;
    gallery: {
      image: string;
      _id: string;
    }[];
    price: number;
    stock: number;
    sales: number;
    translations: {
      language: "en" | "ar";
      data: {
        name: string;
        slug: string;
        overview: string;
        details: {
          model: string;
        };
      };
      _id: string;
    };
    createdAt: string;
    updatedAt: string;
  }
  // Cart data model
  interface WishlistData {
    wishlist: WishlistItem[];
  }
}

export {};

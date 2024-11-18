declare global {
  // product translations data
  interface ProductTranslations {
    language: "en" | "ar";
    data: {
      name: string;
      slug: string;
      overview: string;
    };
    _id: string;
  }

  // product item
  interface ProductItem {
    product: {
      _id: string;
      category: string;
      subCategory: string;
      brand: string;
      cover: string;
      price: number;
      stock: number;
      translations: ProductTranslations;
      createdAt: string;
      updatedAt: string;
    };
    quantity: number;
    price: number;
  }

  // Cart data model
  interface CartData {
    cart: {
      _id?: string;
      user: string;
      totalPrice: number;
      items: ProductItem[];
      createdAt?: string;
      updatedAt?: string;
    };
  }
}

export {};

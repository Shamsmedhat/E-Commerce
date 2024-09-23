declare global {
  // Define the interface for translations
  interface Translation {
    language: string;
    data: {
      name: string;
      slug: string;
      overview?: string;
      details?: {
        model: string;
      };
    };
    _id: string;
  }

  // Define the interface for brand
  interface Brand {
    _id: string;
    logo: string;
    translations: Translation;
    createdAt: string;
    updatedAt: string;
  }

  // Define the interface for gallery images
  interface GalleryImage {
    image: string;
    _id: string;
  }

  // Define the interface for ratings
  interface Ratings {
    count: number;
    average: number;
  }

  // Define the interface for individual product details
  interface Product {
    _id: string;
    category: Category;
    subCategory: SubCategory;
    brand: Brand;
    cover: string;
    gallery: GalleryImage[];
    price: number;
    stock: number;
    sales: number;
    translations: Translation;
    createdAt: string;
    updatedAt: string;
    ratings: Ratings;
  }

  // Define the interface for individual product
  interface ProductData {
    products: Product[];
    pagination: Pagination;
  }

  // Define the interface for the API response
  interface ProductsAPIResponse {
    status: string;
    data: ProductData;
  }
}

export {};

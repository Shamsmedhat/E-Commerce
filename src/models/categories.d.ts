declare global {
  // SubCategory model
  interface SubCategory {
    _id: string;
    category: string;
    image: string;
    translations: Translation;
    createdAt: string;
    updatedAt: string;
  }

  // Category model with subCategories as an array of SubCategory
  interface Category {
    _id: string;
    image: string;
    translations: Translation;
    createdAt: string;
    updatedAt: string;
    subCategories: SubCategory[]; // SubCategory array
  }

  // Pagination info
  interface Pagination {
    total: number;
    count: number;
    pages: number;
    limit: number;
    page: number;
  }

  // CategoriesData for both categories and subCategories
  interface CategoriesData {
    categories?: Category[]; // Optional: For category response
    subCategories?: SubCategory[]; // Optional: For subcategory response
    pagination: Pagination;
  }

  // Categories response model
  interface CategoriesAPIResponse {
    status: string;
    data: CategoriesData;
  }
}

export {};

declare global {
  // Define the interface for translations
  interface CategoryTranslation {
    language: string;
    data: {
      name: string;
      slug: string;
    };
    _id: string;
  }

  interface Category_subCategory {
    _id: string;
    category: string;
    image: string;
    translations: SubCategoryTranslations;
    createdAt: string;
    updatedAt: string;
  }

  interface SingelCategory {
    createdAt: string;
    image: string;
    subCategories: Category_subCategory | Category_subCategory[];
    translations: CategoryTranslation;
    updatedAt: string;
    _id: string;
  }
  // Category model with subCategories as an array of SubCategory
  interface Category {
    [x: string]: any; // Define the interface for translations
    _id: Key | null | undefined;
    translations: any;
    category: SingelCategory;
    //todo
    image?: string | any;
  }

  interface FlatCategory {
    [x: string]: any;
    SingelCategory;
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
    categories: Category[];
    pagination: Pagination;
  }
  interface FlatCategoriesData {
    categories: FlatCategory[];
    pagination: Pagination;
  }
}

export {};

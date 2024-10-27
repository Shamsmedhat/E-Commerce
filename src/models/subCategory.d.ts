declare global {
  interface SubCategoryTranslations {
    language: string;
    data: {
      name: string;
      slug: string;
    };
    _id: string;
  }

  interface SubCategory {
    subCategory: {
      _id: string;
      category: string;
      image: string;
      translations: SubCategoryTranslations;
      createdAt: string;
      updatedAt: string;
    };
  }
  interface SubCategoriesTranslations {
    language: "en" | "ar";
    data: {
      name: string;
      slug: string;
    };
    _id: string;
  }

  interface SingleSubCategories {
    _id: string;
    category: string;
    image: string;
    translations: SubCategoriesTranslations;
    createdAt: string;
    updatedAt: string;
  }

  interface SubCategories {
    subCategories: SingleSubCategories[];
  }
}

export {};

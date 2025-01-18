export interface NewProductFields {
  category: String;
  subCategory: String;
  brand: String;
  cover: String;
  gallery: {
    image: String;
  };
  [];
  price: number;
  stock: number;
  stock: number;
  sales: number;
  translations: {
    language: String;
    data: {
      name: String;
      overview: String;
      details: {
        model: String;
      };
    };
  };
  [];
}

export interface PRODUCT {
  id: string;
  data: {
    discount: number;
    name: string;
    model: string;
    stock: number;
    subCategory: string;
    category: string;
    rating: number;
    ratings: { [key: string]: number }[];
    brand: string;
    images: string[];
    price: number;
    reviews: { rating: number; review: string; user: string }[];
    overview: {
      highlights: string;
      overview: string;
      specifications: { [key: string]: string }[];
    };
  };
}

export type PRODUCT_DATA = {
  discount?: number;
  name?: string;
  model?: string;
  stock?: number;
  subCategory?: string;
  category?: string;
  rating?: number;
  ratings?: { [key: string]: number }[];
  brand?: string;
  images?: string[];
  price?: number;
  reviews?: { rating: number; review: string; user: string }[];
  overview?: {
    highlights: string;
    overview: string;
    specifications: { [key: string]: string }[];
  };
};

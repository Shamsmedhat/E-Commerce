export interface Brand {
  _id: string;
  logo: string;
  translations: {
    language: string;
    data: {
      name: string;
      slug: string;
      overview: string;
    };
    _id: string;
  };
  createdAt: "2024-10-04T15:59:19.960Z";
  updatedAt: "2024-10-04T15:59:19.960Z";
}
interface BrandData {
  brands: Brand[];
  pagination: Pagination;
}

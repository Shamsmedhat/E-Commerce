// declare global {
//   type Brand = {
//     _id: string;
//     logo: string;
//     translations: {
//       language: string;
//       data: {
//         name: string;
//       };
//     };
//     createdAt: string;
//     updatedAt: string;
//   };

//   type Category = {
//     _id: string;
//     image: string;
//     translations: {
//       language: string;
//       data: {
//         name: string;
//       };
//     };
//     createdAt: string;
//     updatedAt: string;
//   };

//   type SubCategory = {
//     _id: string;
//     category: string; // Reference to the parent category ID
//     image: string;
//     translations: {
//       language: string;
//       data: {
//         name: string;
//       };
//     };
//     createdAt: string;
//     updatedAt: string;
//   };

//   type Translations = {
//     language: string;
//     data: {
//       name: string;
//       slug: string;
//       overview: string;
//     };
//     _id: string;
//   };

//   type Product = {
//     _id: string;
//     brand: Brand;
//     category: Category;
//     subCategory: SubCategory;
//     cover: string; // Image URL
//     price: number;
//     stock: number;
//     translations: Translations;
//   };

//   type GuestCartItem = {
//     product: Product;
//     quantity: number;
//     price: number; // Total price for the item (may be unit price * quantity)
//   };
// }

// export {};

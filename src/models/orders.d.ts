declare global {
  interface PlaceOrder {
    paymentType: string;
    shippingAddress: {
      name: string;
      city: string;
      street: string;
      phone: string;
    };
    coupon: string;
  }

  interface OrderItem {
    product: string;
    quantity: number;
    price: number;
    _id: string;
  }

  interface OrderProgress {
    status: string;
    date: string;
    _id: string;
  }

  interface ShippingAddress {
    name: string;
    city: string;
    street: string;
    phone: string;
  }

  interface OrderCard {
    status: "success" | "fail" | "error";
    statusCode: number;
    data: CardOrederData;
  }
  interface Translation {
    language: string;
    data: {
      name: string;
      slug: string;
      overview: string;
    };
    _id: string;
  }

  // Product information in an order item
  interface Product {
    _id: string;
    category: string;
    subCategory: string;
    brand: string;
    cover: string;
    price: number;
    stock: number;
    translations: Translation[];
    createdAt: string;
    updatedAt: string;
  }

  // Individual order item
  interface OrderItem {
    product: Product;
    quantity: number;
    price: number;
  }

  // User who placed the order
  interface User {
    _id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    photo: string;
    active: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }

  // Order progress status
  interface Progress {
    status: string;
    date: string;
    _id: string;
  }

  // Main order structure
  interface Order {
    _id: number;
    user: User;
    totalPrice: number;
    paymentType: string;
    paid: boolean;
    atDoor: boolean;
    coupon: string;
    progress: Progress[];
    createdAt: string;
    updatedAt: string;
    items: OrderItem[];
  }

  // Pagination details
  interface Pagination {
    total: number;
    count: number;
    pages: number;
    limit: number;
    page: number;
  }

  // Orders data
  interface OrdersData {
    orders: Order[];
    pagination: Pagination;
  }
  // Main response structure
  interface OrderResponse {
    status: string;
    statusCode: number;
    data: OrdersData;
  }

  interface OrderCash {
    status: "success" | "fail" | "error";
    statusCode: number;
    data: CashOrderData;
  }
  interface CardOrederData {
    totalPrice: number;
    checkoutUrl: string;
  }
  interface CashOrderData {
    order: {
      user: string;
      items: {
        product: string;
        quantity: number;
        price: number;
        _id: string;
      }[];

      paymentType: "cash";
      paid: boolean;
      atDoor: boolean;
      progress: [
        {
          status: string;
          date: string;
          _id: string;
        },
      ];
      totalPrice: number;
      shippingAddress: {
        city: string;
        street: string;
        phone: string;
      };
      createdAt: string;
      updatedAt: string;
      _id: number;
    };
  }
}

export {};

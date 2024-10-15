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

  interface Order {
    user: string;
    items: OrderItem[];
    paymentType: "cash" | "card";
    paid: boolean;
    atDoor: boolean;
    coupon: string;
    progress: OrderProgress[];
    totalPrice: number;
    shippingAddress: ShippingAddress;
    createdAt: string;
    updatedAt: string;
    _id: number;
  }
}

export {};

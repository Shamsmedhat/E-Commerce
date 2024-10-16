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

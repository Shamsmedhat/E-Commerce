import React from "react";
import OrdersTable from "./components/orders-table";

export default async function Page() {
  return (
    <section className="container">
      <h1>Orders</h1>

      <div className="rounded-lg border border-primary-foreground/30 shadow-sm">
        <OrdersTable />
      </div>
    </section>
  );
}

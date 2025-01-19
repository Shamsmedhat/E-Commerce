import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const res = await fetch(
    "https://e-commerce.thelanerealestate.com/v1/products",
  );

  const data = await res.json();

  return Response.json({ data });
}

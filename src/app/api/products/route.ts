export async function GET() {
  const res = await fetch(
    "https://e-commerce.thelanerealestate.com/v1/products",
  );

  const data = await res.json();

  return Response.json({ data });
}

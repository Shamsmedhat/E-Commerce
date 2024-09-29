"use server";

import { cookies } from "next/headers";

export default async function getAuthorizationHeader() {
  // Access token in the server and get it's value and return it
  const token = JSON.parse(cookies().get("user_token")?.value || "[]");
  return { Authorization: `Bearer ${token}` };
}

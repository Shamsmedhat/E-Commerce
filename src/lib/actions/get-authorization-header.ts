"use server";

import { cookies } from "next/headers";

export default async function getAuthorizationHeader() {
  const token = JSON.parse(cookies().get("user_token")?.value || "[]");
  console.log(token);
  return { Authorization: `Bearer ${token}` };
}

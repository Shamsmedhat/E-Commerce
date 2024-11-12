"use server";

import { cookies } from "next/headers";

export async function removeUserToken() {
  cookies().delete("next-auth.session-token");
  cookies().delete("user_token");
}

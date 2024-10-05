"use server";

import { redirect } from "@/navigarion";
import { cookies } from "next/headers";
import { AppError } from "./catchAsync";
import { revalidateTag } from "next/cache";

// TODO: After adding the statusCode in the response returned from the backend, we need to include it in the ErrorResponse and
// TODO: check on the response.statusCode === 401 instead of the response.message, since the message might change or be translated.

export default async function validateSession(
  message: string,
  callbackUrl?: string,
) {
  // Ensure the response is 401
  if (
    message === "You are not logged in, please log in to have access!" ||
    message === "Invalid token, please login again!"
  ) {
    cookies().delete("next-auth.session-token");
    cookies().delete("user_token");
    redirect(`/auth/login?callbackUrl=${callbackUrl || "/"}`);
  } else if (message === "There is no cart for the currently logged in user!") {
    // Return false if no items in the cart
    return false;
  } else {
    throw new AppError(message, 500);
  }
}

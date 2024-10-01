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
    // Delete the tokens from cookies before signing out
    cookies().delete("next-auth.session-token");
    cookies().delete("user_token");
    // Redirect the user to the login page
    redirect(`/auth/login?callbackUrl=${callbackUrl || "/"}`);
  } else {
    console.log("message", message);
    throw new AppError(message, 500);
  }
}

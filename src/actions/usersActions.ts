"use server";

import { fetchAllUsers, signup } from "@/lib/apis/user";
import { SigninSchema } from "@/lib/schemes/user.scheme";
import { cookies } from "next/headers";
import { FormEvent } from "react";

export async function getAllUsersAction() {
  const userToken = cookies().get("user_token")?.value;
  const data = await fetchAllUsers(userToken);
  return data;
}

export async function signupAction(formData: FormData) {
  const userData = Object.fromEntries(formData);
  const validatedFields = SigninSchema.safeParse(userData);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const data = await signup(formData);
  return data;
}

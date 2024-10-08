"use server";

import { deleteUser, fetchAllUsers, signup, updateUser } from "@/lib/apis/user";
import { SigninSchema } from "@/lib/schemes/user.scheme";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

//? get all users action
export async function getAllUsersAction() {
  // get user token from cookies throught server only by using httponly
  const userToken = cookies().get("user_token")?.value;
  // get all users list and return the data to dashboard users page
  const data = await fetchAllUsers(userToken);
  return data;
}

//? signup new account for client users
export async function signupAction(formData: FormData) {
  const userData = Object.fromEntries(formData);
  // validate user first to make sure that is pass the zod validation schema
  const validatedFields = SigninSchema.safeParse(userData);

  // if not success return field errors to display it in ui
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // if success sent api request to get the data then return the user data
  const data = await signup(formData);
  return data;
}

//? delete user in dashboard
export async function deleteUserAction(id: string) {
  // get user token from cookies throught server only by using httponly
  const userToken = cookies().get("user_token")?.value;

  try {
    await deleteUser(id, userToken);
    revalidateTag("/dashboard/users");
  } catch (err) {
    throw new Error(err as string);
  }
}

//? update user in dashboard
export async function updateUserAction(
  formUpdatedData: FormData,
  userId: string,
) {
  const userToken = cookies().get("user_token")?.value;

  try {
    const data = await updateUser(formUpdatedData, userId, userToken);

    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
}

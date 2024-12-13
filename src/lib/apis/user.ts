import axios, { isAxiosError } from "axios";
import { UserToken } from "../types/user";

// get all users list to dashboard
export async function fetchAllUsers(token: UserToken) {
  try {
    const res = await axios(
      `https://e-commerce.thelanerealestate.com/v1/users`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const data = res.data;
    return data;
  } catch (error) {
    throw new Error((error as Error)?.message || "Faild to fetch all users.");
  }
}

// signup new user in client
export async function signup(formData: FormData) {
  try {
    const res = await axios.post(
      `https://e-commerce.thelanerealestate.com/v1/auth/signup`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    const data = res.data;
    return data;
  } catch (error) {
    // Check if the error is an Axios error
    if (axios.isAxiosError(error)) {
      // Access the error message from Axios
      const errorMessage = error.response?.data?.message || error.message;
      return { message: errorMessage };
    } else {
      // Handle unexpected errors
      return { message: "An unexpected error occurred." };
    }
  }
}

// delete user using in dashboard
export async function deleteUser(id: string, token: String | undefined) {
  try {
    await axios.delete(
      `https://e-commerce.thelanerealestate.com/v1/users/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data.message);
    }
    throw new Error("Faild to delete user.");
  }
}

// update user using in dashboard
export async function updateUser(
  formData: FormData,
  userId: string,
  userToken: string | undefined,
) {
  try {
    const res = await axios.patch(
      `https://e-commerce.thelanerealestate.com/v1/users/${userId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userToken}`,
        },
      },
    );
    return res;
  } catch (error) {
    throw new Error(`${error}`);
  }
}

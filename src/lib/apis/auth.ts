import axios from "axios";
import { LoginResponse } from "../types/user";

export async function signIn({
  username,
  password,
}: {
  username?: string;
  password?: string;
}) {
  try {
    const response = await axios({
      method: "POST",
      url: `https://e-commerce.thelanerealestate.com/v1/auth/login`,
      data: {
        username,
        password,
      },
    });

    const { data } = response;
    return {
      user: {
        id: data.data.user._id,
        name: data.data.user.fullName,
        email: data.data.user.email,
        image: data.data.user.photo,
        role: data.data.user.role,
        accessToken: data.data.token,
      },
      error: null,
    } as LoginResponse;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // Handle known Axios error
      throw new Error(error.response.data.message || "An error occurred.");
    } else {
      // Handle unknown error
      throw new Error("Unknown error occurred.");
    }
  }
}

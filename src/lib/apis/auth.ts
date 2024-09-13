import { BASE_URL } from "@/lib/constants/colors";
import axios from "axios";

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
      url: `${BASE_URL}/auth/login`,
      data: {
        username,
        password,
      },
    });

    const { data } = response;
    return {
      user: {
        id: data.data.user.id,
        name: data.data.user.fullName,
        email: data.data.user.email,
        image: data.data.user.photo,
        role: data.data.user.role,
        accessToken: data.data.token,
      },
      error: null,
    };
  } catch (error) {
    // Handle axios errors with specific messages
    let errorMessage = "An error occurred during sign-in";
    if (axios.isAxiosError(error)) {
      errorMessage = error.response?.data?.message || error.message;
    }

    console.error("Error during signIn:", errorMessage);

    return {
      user: null,
      error: errorMessage,
    };
  }
}

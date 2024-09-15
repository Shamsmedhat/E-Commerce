import axios from "axios";
import { BASE_URL } from "../constants/colors";
import { UserToken } from "../types/user";

// get all users list to dashboard
export async function fetchAllUsers(token: UserToken) {
  try {
    const res = await axios(`${BASE_URL}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = res.data;
    return data;
  } catch (error) {
    throw new Error((error as Error)?.message || "Faild to fetch all users.");
  }
}

// signup new user in client
export async function signup(formData: FormData) {
  try {
    const res = await axios.post(`${BASE_URL}/auth/signup`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const data = res.data;
    return data;
  } catch (error) {
    throw new Error((error as Error)?.message || "Faild to signup.");
  }
}

// delete user using in dashboard
export async function deleteUser(id: string, token: String | undefined) {
  try {
    await axios.delete(`${BASE_URL}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    throw new Error((error as Error)?.message || "Faild to fetch delete user.");
  }
}

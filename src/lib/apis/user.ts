import axios from "axios";
import { BASE_URL } from "../constants/colors";
import { getToken } from "next-auth/jwt";

export async function getAllUsers(token: string) {
  // console.log("token", token);
  try {
    const res = await axios(`${BASE_URL}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log("ress", res);
  } catch (error) {
    // Ensure `res` is correctly used here
    // console.error("Error retrieving token:", error);
    console.error("Error retrieving token:");
  }
}

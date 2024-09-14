import axios from "axios";
import { BASE_URL } from "../constants/colors";
import { UserToken } from "../types/user";

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
    console.error(`Error : ${error}`);
  }
}

export async function signup(formData: FormData) {
  console.log("formData from API", formData);
  try {
    const res = await axios.post(`${BASE_URL}/auth/signup`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("res from API", res);
    const data = res.data;
    console.log("Data from API", data);
    return data;
  } catch (error) {
    console.error("Error signing up:", error);
    throw new Error("Signup failed");
  }
}

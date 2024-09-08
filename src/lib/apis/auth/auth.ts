import { BASE_URL } from "@/lib/constants/colors";
import axios from "axios";

export async function getAllUsers() {
  const data = axios(`${BASE_URL}/users`);

  console.log(data);
}

export async function signIn({
  username,
  password,
}: {
  username?: string;
  password?: string;
}) {
  const { data } = await axios({
    method: "post",
    url: `${BASE_URL}/auth/login`,
    data: {
      username,
      password,
    },
  });

  console.log(data);

  return data;
}

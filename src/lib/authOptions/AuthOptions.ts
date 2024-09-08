import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "../apis/auth/auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Write your name ...",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("credentials", credentials);

        const data = signIn({
          username: credentials?.username,
          password: credentials?.password,
        });
        return data;

        // }
      },
    }),
  ],
  // session: {
  //   strategy: "jwt", // default
  //   maxAge: 10 * 24 * 60 * 60, // 10 days
  // },
};

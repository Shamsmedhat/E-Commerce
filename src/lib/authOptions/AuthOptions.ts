import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "../apis/auth";

const userImage = "@/../public/assets/user.png";
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
        const { user, error } = await signIn({
          username: credentials?.username,
          password: credentials?.password,
        });

        if (user) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
          };
        }
        throw new Error(error || "Invalid credentials");
      },
    }),
  ],
  pages: {
    signIn: "../../app/[locale]/(client)/login/components/Login.tsx",
  },
};

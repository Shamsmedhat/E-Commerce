import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { signIn } from "../apis/auth";
import { ROLE } from "../constants/roles";
import { cookies } from "next/headers";
import { SignInResponse } from "../types/user";
import { User } from "next-auth";

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
        try {
          const { user, error } = await signIn({
            username: credentials?.username,
            password: credentials?.password,
          });
          if (user) {
            cookies().set("user_token", JSON.stringify(user.accessToken), {
              httpOnly: true,
            });

            return {
              id: user.id,
              name: user.name,
              email: user.email,
              image: user.image,
              role: user.role,
              accessToken: user.accessToken,
            } as User;
          } else {
            throw new Error(error || "Login failed.");
          }
        } catch (err) {
          throw new Error(String(err));
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.AUTH_FACEBOOK_ID!,
      clientSecret: process.env.AUTH_FACEBOOK_SECRET!,
    }),
  ],

  callbacks: {
    async jwt({ token, user, account, profile }) {
      // Add the user data to be saved in the `next-auth.session-token` cookie
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.image = user.image;
        token.email = user.email;
        token.role = user.role;
        token.accessToken = user.accessToken;
      }

      if (account?.provider === "facebook" || account?.provider === "google") {
        token.role = ROLE.USER;
      }

      return token;
    },

    async session({ session, token, user }) {
      if (token) {
        token.id = token.id;
        token.name = token.name;
        token.image = token.image;
        token.email = token.email;
        token.role = token.role;
      }

      return session;
    },
  },

  pages: {
    signIn: "/auth/login",
    error: "/auth/login",
    signOut: "../../app/[locale]/(client)/(homepage)/_components/SignOut.tsx",
  },
};

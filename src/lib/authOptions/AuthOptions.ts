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
      if (user) {
        token.role = (user as any).role;
        // token.accessToken = user.accessToken;
        cookies().set("user_token", user.accessToken as string, {
          httpOnly: true,
        });
      }
      if (account?.provider === "facebook" || account?.provider === "google") {
        token.role = ROLE.USER;
      }

      return token;
    },
    async session({ session, token, user }) {
      session.user.role = token.role;
      // session.user.accessToken = token.accessToken;
      return session;
    },
    // async signIn({ user, account, profile, email, credentials }) {
    //   console.log("user", user);
    //   console.log("account", account);
    //   console.log("profile", profile);
    //   console.log("email", email);
    //   console.log("credentials", credentials);
    //   return "/login";
    // },
  },

  pages: {
    signIn: "/login",
    error: "/login",
    signOut: "../../app/[locale]/(client)/(homepage)/_components/SignOut.tsx",
  },
};

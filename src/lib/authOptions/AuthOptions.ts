import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { signIn } from "../apis/auth";
import { ROLE } from "../constants/roles";
import { cookies } from "next/headers";

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
            role: user.role, // Include role information
            accessToken: user.accessToken,
          };
        }
        throw new Error(error || "Invalid credentials");
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
  },

  pages: {
    signIn: "../../app/[locale]/(client)/login/page.tsx",
    signOut: "../../app/[locale]/(client)/(homepage)/_components/SignOut.tsx",
  },
};

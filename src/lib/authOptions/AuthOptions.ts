import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { signIn } from "../apis/auth";

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
    async signIn({ user, account, profile, email, credentials }) {
      console.log("user", user);
      console.log("account", account);
      console.log("profile", profile);
      console.log("email", email);
      console.log("credentials", credentials);
      // if (isAllowedToSignIn) {
      return true;
      // } else {
      // Return false to display a default error message
      // return false;
      // Or you can return a URL to redirect to:
      // return '/unauthorized'
      // }
    },
  },

  pages: {
    signIn: "../../app/[locale]/(client)/login/page.tsx",
    signOut: "../../app/[locale]/(client)/(homepage)/_components/SignOut.tsx",
  },
};

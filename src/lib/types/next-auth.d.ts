// types/next-auth.d.ts or a similar file where you extend types
import "next-auth";

declare module "next-auth" {
  interface User {
    role?: string[]; // or the type that you expect for roles
    accessToken?: string;
  }

  interface Session {
    user: {
      role?: string[];
    } & DefaultSession["user"];
  }

  interface JWT {
    name: string;
    email: string;
    picture: string;
    sub: string;
    role: string;
    iat: number;
    exp: number;
    jti: string;
  }
}

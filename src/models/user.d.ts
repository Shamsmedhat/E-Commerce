declare global {
  interface UserSession {
    data: {
      user: {
        email: string;
        image: string;
        name: string;
      };
      expires: string;
    } | null; // Data can be null
    status: "authenticated" | "loading" | "unauthenticated";
    update: UpdateSession;
  }
}
export {};

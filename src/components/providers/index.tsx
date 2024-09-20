import StoreProvider from "@/app/StoreProvider";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "./components/ThemeProvider";
import AuthSessionProvider from "./components/authSessionProvider";
import React from "react";
import { getMessages } from "next-intl/server";

type props = {
  children: React.ReactNode;
};

export default async function Providers({ children }: props) {
  // get all messages
  const messages = await getMessages();

  return (
    // provid the redux store to all the appp
    <StoreProvider>
      {/* Providing all messages to the client */}
      <NextIntlClientProvider messages={messages}>
        {/* provide theme to all app */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* provide session to all app */}
          <AuthSessionProvider>{children}</AuthSessionProvider>
        </ThemeProvider>
      </NextIntlClientProvider>
    </StoreProvider>
  );
}

import type { Metadata } from "next";
import { Cairo, Montserrat } from "next/font/google";
import "@/app/[locale]/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider } from "@/components/custom/ThemeProvider";
import Header from "@/components/custom/Header";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import StoreProvider from "../StoreProvider";
import Footer from "@/components/custom/Footer";
import AuthSessionProvider from "@/lib/providers/authSessionProvider";
import { ToastContainer } from "react-toastify";

const cairo = Cairo({ subsets: ["arabic"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir="rtl">
      <body className={`${cairo.className}`}>
        <StoreProvider>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <AuthSessionProvider>
                <Header />
                <main className="relative flex flex-col items-center bg-zinc-100 pb-10 pt-3 dark:bg-black/30">
                  <ToastContainer stacked />
                  {children}
                </main>
                <Footer />
              </AuthSessionProvider>
            </ThemeProvider>
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  );
}

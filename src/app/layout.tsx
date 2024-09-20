import { Cairo } from "next/font/google";
import "@/app/[locale]/globals.css";

const cairo = Cairo({ subsets: ["arabic"] });

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} dir="rtl">
      <body className={`${cairo.className}`}>{children}</body>
    </html>
  );
}

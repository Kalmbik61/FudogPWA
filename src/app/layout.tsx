import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../styles/globals.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fudog China",
  description: "Китайская кухня в центре Ростов-на-Дону",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

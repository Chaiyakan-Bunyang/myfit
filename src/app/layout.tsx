import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Kanit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/navbar/Navbar";
import { useRouter } from "next/router";

// const inter = Inter({ subsets: ["latin"] });
const kanit = Kanit({weight: ["300","400","500"], subsets: ["latin"]});
export const metadata: Metadata = {
  title: "MyFit",
  description: "This is Healthy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        {children}
        </body>
    </html>
  );
}

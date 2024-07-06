import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AppWalletProvider from "../components/AppWalletProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Project Name",
  description: "Project Description",
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <AppWalletProvider>{children}</AppWalletProvider>
      </body>
    </html>
  );
}
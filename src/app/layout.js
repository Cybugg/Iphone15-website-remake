import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Apple iPhone 15 Pro",
  description: "This the remake of ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

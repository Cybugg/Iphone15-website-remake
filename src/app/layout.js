import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Apple iPhone 15 Pro",
  description: "iPhone 15 Pro is the first iPhone to feature an aerospace‑grade titanium design, using the same alloy that spacecraft use for missions to Mars. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

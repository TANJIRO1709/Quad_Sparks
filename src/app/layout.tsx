import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quad_Sparks 🔥",
  description: "Quad_Sparks is a community of passionate gamers and esports enthusiasts. We organize and host various esports events and tournaments, and we're dedicated to fostering a vibrant and inclusive gaming environment. Join us and connect with fellow gamers, compete in exciting tournaments, and stay up to date with the latest gaming news and events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

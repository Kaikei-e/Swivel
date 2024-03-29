import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSelifJP = Noto_Serif_JP({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swivel",
  description: "A asset management app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={notoSelifJP.className}>{children}</body>
    </html>
  );
}

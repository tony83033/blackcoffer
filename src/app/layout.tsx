import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
const inter = Inter({ subsets: ["latin"] });
import { Inter as FontSans } from "next/font/google"
export const metadata: Metadata = {
  title: "BlackCoffer",
  description: "Develop by Sumit pal sumitpal.wiki",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >{children}</body>
    </html>
  );
}

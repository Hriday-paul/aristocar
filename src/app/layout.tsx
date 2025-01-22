import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aristocar",
  description: "Browse the best luxury cars, exotic cars, supercars, hypercars, and rare cars for sale from top dealers around the world",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

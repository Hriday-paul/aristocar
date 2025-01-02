import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aristocar",
  description: "Aristocar is car sell gallery",
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

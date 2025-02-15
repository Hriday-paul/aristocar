import type { Metadata } from "next";
import "./globals.css";

//og-logo

export const metadata: Metadata = {
  title: "Aristocar",
  description: "Browse the best luxury cars, exotic cars, supercars, hypercars, and rare cars for sale from top dealers around the world",
  metadataBase: new URL(process.env.MY_DOMAIN!),
  openGraph: {
    title: "Aristocar",
    description: "Browse the best luxury cars, exotic cars, supercars, hypercars, and rare cars for sale from top dealers around the world",
    images: ['/og-logo.png'],
  },
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

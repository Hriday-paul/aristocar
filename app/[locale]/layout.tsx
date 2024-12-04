import localFont from "next/font/local";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import Navbar from "@/components/shared/Navbar/Navbar";
import "./globals.css";

const Lastica = localFont({
  src: "../../font/Lastica.ttf",
  variable: "--font-lastica",
  weight: "100 900",
});
const Poppins = localFont({
  src: "../../font/Poppins-Regular.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});
const Satrosi = localFont({
  src: "../../font/Satoshi-Regular.ttf",
  variable: "--font-satoshi",
  weight: "100 900",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  const locale = await getLocale();

  return (
    <html lang={locale}>

      <body className={`${Lastica?.variable} ${Poppins?.variable} ${Satrosi?.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <>
            <header>
              <Navbar />
            </header>
            <main>
              {children}
            </main>
            <footer>

            </footer>
          </>
        </NextIntlClientProvider>
      </body>

    </html>
  );
}

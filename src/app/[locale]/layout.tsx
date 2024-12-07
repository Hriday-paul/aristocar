
import ReduxStoreProvider from '@/provider/ReduxStoreProvider';
import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Aristocar",
  description: "Aristocar is car sell gallery",
};

const Lastica = localFont({
  src: "../..//../font/Lastica.ttf",
  variable: "--font-lastica",
  weight: "100 900",
});
const Poppins = localFont({
  src: "../../../font/Poppins-Regular.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});
const Satrosi = localFont({
  src: "../../../font/Satoshi-Regular.ttf",
  variable: "--font-satoshi",
  weight: "100 200 300 400 500 600 700 800 900",
});

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${Lastica?.variable} ${Poppins?.variable} ${Satrosi?.variable}`}>
        <ReduxStoreProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ReduxStoreProvider>
      </body>
    </html>
  );
}
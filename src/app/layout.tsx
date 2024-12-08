import Navbar from '@/components/shared/Navbar/Navbar';
import ReduxStoreProvider from '@/provider/ReduxStoreProvider';
import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { getLocale, getTranslations } from "next-intl/server";
import localFont from "next/font/local";
import NextAuthSessionProvider from "@/provider/SessionProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aristocar",
  description: "Aristocar is car sell gallery",
};

const Lastica = localFont({
  src: "../../font/Lastica.ttf",
  variable: "--font-lastica",
  weight: "100 400 900",
});
const Poppins = localFont({
  src: "../../font/Poppins-Regular.ttf",
  variable: "--font-poppins",
  weight: "100 200 900",
});
const Satrosi = localFont({
  src: "../../font/Satoshi-Regular.ttf",
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
  const messages = await getMessages();

  const locales = await getLocale();
  const t = await getTranslations('navbar');

  const routs: { id: number, name: string, rout: string }[] = [
    {
      id: 1,
      name: t('Home'),
      rout: '/'
    },
    {
      id: 2,
      name: t('Shop'),
      rout: '/shop'
    },
    {
      id: 3,
      name: t('Sell'),
      rout: '/sell'
    },
    {
      id: 4,
      name: t('About us'),
      rout: '/about'
    },
    {
      id: 5,
      name: t('Support'),
      rout: '/support'
    },

  ]

  return (
    <html lang={locale}>
      <body className={`${Lastica?.variable} ${Poppins?.variable} ${Satrosi?.variable}`}>
        <NextAuthSessionProvider>
          <ReduxStoreProvider>
            <NextIntlClientProvider messages={messages}>
              <div>
                <Navbar defaultLang={locales} title1={t('title1')} signin={t('signin')} signup={t('signup')} rootTitle={t('rootTitle')} search={t("search")} routs={routs} />
                {children}
              </div>
            </NextIntlClientProvider>
          </ReduxStoreProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
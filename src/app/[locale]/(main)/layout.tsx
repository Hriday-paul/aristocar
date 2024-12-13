import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { getLocale, getTranslations } from "next-intl/server";


const layout = async ({ children }: { children: React.ReactNode }) => {

    const locales = await getLocale();
    const t = await getTranslations('navbar');

    const routs: { id: number, name: string, rout: string }[] = [
        {
            id: 1,
            name: t('Home'),
            rout: '/'
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
        <div>
            <Navbar defaultLang={locales} title1={t('title1')} signin={t('signin')} signup={t('signup')} rootTitle={t('rootTitle')} search={t("search")} routs={routs} />
            {children}
            <Footer />
        </div>
    );
};

export default layout;
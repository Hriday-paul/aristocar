import ContactForm from '@/components/custom/Contact/ContactForm';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import React from 'react';

export const metadata: Metadata = {
    title: "Contact | Aristocar",
    description: "Advice and answers from the Aristocar Team",
};

const Page = () => {
    const t = useTranslations("support");
    const txt = {
        "first_name": t("form.first_name"),
        "last_name": t("form.last_name"),
        "email": t('form.email'),
        "message": t("form.message"),
        "submit": t('form.submit')
    }

    return (
        <div className='bg-contact'>
            <div className='container py-5'>
                {/* --------------contact section--------------- */}
                <div className='my-5'>
                    <h2 className='text-4xl md:text-5xl xl:text-6xl text-black font-poppins font-semibold text-center mb-3 md:mb-4 lg:mb-5'>{t('title')}</h2>
                    <p className='text-lg md:text-xl text-black font-poppins text-center my-2 md:my-3 lg:my-4'>{t("subtitle")}</p>
                    <p className='text-lg md:text-xl text-black font-poppins text-center my-2 md:my-3 lg:my-4'>{t('phone')}: <a href="tel:+8801611112222">+8801611112222</a></p>
                </div>
                <div className='mt-10 md:mt-12 lg:mt-14 xl:mt-16 mb-10'>
                    <h3 className='text-3xl lg:text-4xl xl:text-5xl text-black font-poppins font-semibold text-center'>{t("form.title")}</h3>
                    <ContactForm txt={txt}/>
                </div>
            </div>
        </div>
    );
};

export default Page;
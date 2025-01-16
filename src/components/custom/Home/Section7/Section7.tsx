import React from 'react';
import Title from './Title';
import { useTranslations } from 'next-intl';

const Section7 = () => {
    const t = useTranslations('home.section7');

    return (
        <div className='my-10 md:my-12 lg:my-16 xl:my-20'>
            <div className="bg-center bg-cover bg-no-repeat bg-[url('/home/features/SignIn.jpg')] w-full h-auto py-20 lg:py-24 xl:py-28 relative">
                <div className='absolute top-0 left-0 h-full w-full bg-black bg-opacity-70 z-0'></div>
                <div className='container relative z-10'>
                    <div >
                        <Title subtitle={t('sub_title1')} title={{ line1: t("title1"), line2: t("title2") }} details={t('sub_title2')} btnTxt={t('btn_txt')} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section7;
import Image from 'next/image';
import React from 'react';
import HomeCar1 from '../../../../../public/home/sec1_car2.png'
import { useTranslations } from 'next-intl';
import TabFilter from './TabFilter';
import HomeTitle from './HomeTitle';

const Section1 = () => {
    const t = useTranslations('home.section1');
    return (
        <div className='relative mb-16 lg:mb-40 xl:mb-32'>
            <Image src={HomeCar1} alt="aristocar home car" placeholder='blur' className='w-full h-60 object-cover md:h-auto' />
            <div className='absolute top-6 md:top-16 xl:top-32 w-full'>
                <div className='container flex flex-col md:flex-row gap-y-3 md:gap-y-0 justify-between'>
                    <HomeTitle line1={t("title.line1")} line2={t("title.line2")} />
                    <p className='text-secondary text-sm md:text-base xl:text-lg max-w-80 font-satoshi leading-normal lg:leading-6 line-clamp-4 md:line-clamp-none'>
                        {t('description')}
                    </p>
                </div>
            </div>
            <TabFilter />
        </div>
    );
};

Section1.displayName = "Section1"

export default Section1;
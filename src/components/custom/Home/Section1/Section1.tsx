import Image from 'next/image';
import React from 'react';
import HomeCar1 from '../../../../../public/home/sec1_car.png'
import { useTranslations } from 'next-intl';
import TabFilter from './TabFilter';

const Section1 = React.memo(() => {
    const t = useTranslations('home.section1');
    return (
        <div className='relative mb-32 lg:mb-40 xl:mb-32'>
            <Image src={HomeCar1} alt="aristocar home car" placeholder='blur' className='w-full h-60 object-cover md:h-auto' />
            <div className='absolute top-6 md:top-16 xl:top-32 w-full'>
                <div className='container flex justify-between'>
                    <h2 className='text-xl md:text-3xl lg:text-4xl xl:text-6xl font-lastica font-bold text-secondary uppercase max-w-60 md:max-w-[400px] xl:max-w-[540px]'>
                        <span className='mb-8'>{t("title.line1")}</span> <br />
                        <span> {t("title.line2")}</span>
                    </h2>
                    <p className='text-secondary text-base xl:text-lg hidden md:block max-w-80 font-satoshi leading-6'>
                        {t('description')}
                    </p>
                </div>
            </div>
            <TabFilter />
        </div>
    );
});

Section1.displayName = "Section1"

export default Section1;
import Image from 'next/image';
import React from 'react';
import HomeCar1 from '../../../../../public/home/Header.jpg'
import { useTranslations } from 'next-intl';
import TabFilter from './TabFilter';
import HomeTitle from './HomeTitle';

const Section1 = () => {
    const t = useTranslations('home.section1');
    const f = useTranslations('filter');
    const filter = {
        brand: f('brand'),
        model: f('model'),
        price_from: f('price_from'),
        mileage_from: f('mileage_from'),
        drive: f('drive'),
        country: f('country'),
        price: f('price'),
        mileage: f('mileage'),
        body_style: f('body_style'),
        year_of_manu: f('year_of_manu'),
        drive_config: f('drive_config'),
        exterior_color: f("exterior_color"),
        interior_color: f("interior_color"),
        fuel_type: f("fuel_type"),
        search: f('search'),
        clear: f('clear')
    };

    return (
        <div className='relative mb-16 lg:mb-40 xl:mb-32'>
            <Image src={HomeCar1} alt="aristocar home car" placeholder='blur' className='w-full h-60 md:h-auto xl:max-h-[800px] 2xl:max-h-[850px] object-cover' />
            <div className='absolute top-6 md:top-16 xl:top-32 w-full'>
                <div className='container flex flex-col md:flex-row gap-y-3 md:gap-y-0 justify-between'>
                    <HomeTitle line1={t("title.line1")} line2={t("title.line2")} />
                    <p className='text-secondary text-sm md:text-base xl:text-lg max-w-80 font-satoshi leading-normal lg:leading-6 line-clamp-4 md:line-clamp-none'>
                        {t('description')}
                    </p>
                </div>
            </div>
            <TabFilter filterNames={filter} />
        </div>
    );
};

Section1.displayName = "Section1"

export default Section1;
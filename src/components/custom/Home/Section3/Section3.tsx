
import React from 'react';
import { useTranslations } from 'next-intl';
import MarqueItem from './MarqueItem';

const Section3 = () => {
    const t = useTranslations('home.section3');
    return (
        <div className='bg-black w-full my-16 lg:my-20 xl:my-24 mx-auto'>
            <MarqueItem text={t('title')} />
        </div>
    );
};

Section3.displayName = "Section3"
export default Section3;
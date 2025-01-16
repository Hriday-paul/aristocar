import CarCard from '@/components/shared/CarCard/CarCard';
import Whishlist from '@/components/shared/Dashboard/Whishlist/Whishlist';
import { useTranslations } from 'next-intl';
import React from 'react';

const Page = () => {
    const t = useTranslations("dashboard.wishlist");
    return (
        <div>
            <h4 className='font-poppins text-2xl text-primary'>{t('title')}</h4>
            {/* ------------------cars------------------ */}
            <Whishlist />
        </div>
    );
};

export default Page;
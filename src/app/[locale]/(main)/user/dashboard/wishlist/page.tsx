import CarCard from '@/components/shared/CarCard/CarCard';
import Whishlist from '@/components/shared/Dashboard/Whishlist/Whishlist';
import { useTranslations } from 'next-intl';
import React from 'react';

const Page = () => {
    const t = useTranslations("dashboard.wishlist");
    const tx = useTranslations("filter")
    const cardTxt = {
        brand: tx('brand'),
        model: tx('model'),
        mileage: tx('mileage'),
        drive: tx('drive'),
        view_details: tx('view_details'),
        delete: tx('delete'),
    }
    return (
        <div>
            <h4 className='font-poppins text-2xl text-primary'>{t('title')}</h4>
            {/* ------------------cars------------------ */}
            <Whishlist cardTxt={cardTxt}/>
        </div>
    );
};

export default Page;
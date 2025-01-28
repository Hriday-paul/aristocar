import CarCard from '@/components/shared/CarCard/CarCard';
import SectionTitle from '@/components/shared/SectionTitle/SectionTitle';
import React from 'react';
import CarCarousal from './CarCarousal';
import { carType } from '@/app/[locale]/(main)/cars/page';
import { getTranslations } from 'next-intl/server';

const Section2 = async ({ cars }: { cars: Promise<{ data: { bestDeals: carType[] } }> }) => {
    const t = await getTranslations('home.section2')
    const f = await getTranslations("filter")
    const txt = {
        brand: f('brand'),
        model: f('model'),
        mileage: f('mileage'),
        drive: f('drive'),
        view_details: f('view_details'),
        power : f('power')
    }

    const bestCars = await cars;


    return (
        <div className='container md:mt-52 lg-mt-0'>
            {/* -------------title-------------- */}
            <SectionTitle title={t("title")} />

            {/* ----------cards------------- */}
            <div className='grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8 items-center my-5 mdLmy-6 lg:my-8 hidden md:grid'>
                {
                    bestCars?.data?.bestDeals?.map(car => {
                        return <CarCard key={car?._id} car={car} txt={txt}/>
                    })
                }
            </div>

            <div className='md:hidden my-5 mdLmy-6 lg:my-8'>
                <CarCarousal bestCars={bestCars?.data?.bestDeals} txt={txt} />
            </div>

        </div>
    );
};

Section2.displayName = 'Section2'

export default Section2;
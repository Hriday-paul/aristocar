import React, { Suspense } from 'react';
import Section1 from '@/components/custom/Home/Section1/Section1';
import Section2 from '@/components/custom/Home/Section2/Section2';
import Section3 from '@/components/custom/Home/Section3/Section3';
import Section4 from '@/components/custom/Home/Section4/Section4';
import Section5 from '@/components/custom/Home/Section5/Section5';
import Section6 from '@/components/custom/Home/Section6/Section6';
import Section7 from '@/components/custom/Home/Section7/Section7';
import CarLoading from '@/app/[locale]/(main)/cars/loading'
import UseGetBestCars from '@/Hooks/UseGetBestCars';
import UseGetMostWantedCars from '@/Hooks/UseGetMostWantedCars';
import Section5Brands from '@/components/custom/Home/Section5/Section5Brands';
import UseGetHomeBrands from '@/Hooks/UseGetHomeBrands';


const HomrPage = () => {

    const cars = UseGetBestCars();
    const mostWantedCars = UseGetMostWantedCars();
    const homebrands = UseGetHomeBrands();

    return (
        <div>
            <Section1 />

            <Suspense fallback={<CarLoading />}>
                <Section2 cars={cars} />
            </Suspense>

            <Section3 />

            <Suspense fallback={<CarLoading />}>
                <Section4 cars={mostWantedCars} />
            </Suspense>

            <Suspense fallback={<CarLoading />}>
                <Section5Brands homebrands={homebrands}/>
            </Suspense>


            <Section6 />

            <Section7 />
        </div>
    );
};

export default HomrPage;
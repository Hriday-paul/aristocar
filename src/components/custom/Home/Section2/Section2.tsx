import CarCard from '@/components/shared/CarCard/CarCard';
import SectionTitle from '@/components/shared/SectionTitle/SectionTitle';
import { useTranslations } from 'next-intl';
import React from 'react';
import CarCarousal from './CarCarousal';

export type carType = {
    id: number,
    img: string,
    name: string,
    details: string,
    make: number,
    model: string,
    register: string,
    km: number,
    price: number
}

const Section2 = () => {
    const t = useTranslations('home.section2')
    const bestCars: carType[] = [
        {
            id: 1,
            img: 'https://res.cloudinary.com/devlj6p7h/image/upload/v1733563021/bdcalling/lxd8blyjqspnscymgvbx.png',
            name: "Ford Explorer 2023",
            details: "3.5 D5 PowerPulse Momentum 5dr This iconic supercar combines breathtaking design with unparalleled performance. Equipped with a naturally aspirated 6.5L V12 engine, the Aventador delivers an astonishing 770 horsepower.",
            make: 2026,
            model: "SUV",
            register: "11 oct 2024",
            km: 100,
            price: 35000
        },
        {
            id: 2,
            img: 'https://res.cloudinary.com/devlj6p7h/image/upload/v1733563021/bdcalling/b6xpffqsyz3wpfyfxrto.png',
            name: "Ford Explorer 2023",
            details: "3.5 D5 PowerPulse Momentum 5dr This iconic supercar combines breathtaking design with unparalleled performance. Equipped with a naturally aspirated 6.5L V12 engine, the Aventador delivers an astonishing 770 horsepower.",
            make: 2026,
            model: "SUV",
            register: "11 oct 2024",
            km: 100,
            price: 35000
        },
        {
            id: 3,
            img: 'https://res.cloudinary.com/devlj6p7h/image/upload/v1733563021/bdcalling/ogxmdzhvui9rx42e9rme.png',
            name: "Ford Explorer 2023",
            details: "3.5 D5 PowerPulse Momentum 5dr This iconic supercar combines breathtaking design with unparalleled performance. Equipped with a naturally aspirated 6.5L V12 engine, the Aventador delivers an astonishing 770 horsepower.",
            make: 2026,
            model: "SUV",
            register: "11 oct 2024",
            km: 100,
            price: 35000
        },
        {
            id: 4,
            img: 'https://res.cloudinary.com/devlj6p7h/image/upload/v1733563021/bdcalling/h9zsbxrxm1xlrjr2apuw.png',
            name: "Ford Explorer 2023",
            details: "3.5 D5 PowerPulse Momentum 5dr This iconic supercar combines breathtaking design with unparalleled performance. Equipped with a naturally aspirated 6.5L V12 engine, the Aventador delivers an astonishing 770 horsepower.",
            make: 2026,
            model: "SUV",
            register: "11 oct 2024",
            km: 100,
            price: 35000
        }
    ]

    return (
        <div className='container md:mt-52 lg-mt-0'>
            {/* -------------title-------------- */}
            <SectionTitle title={t("title")} />

            {/* ----------cards------------- */}
            <div className='grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8 items-center my-5 mdLmy-6 lg:my-8 hidden md:grid'>
                {
                    bestCars?.map(car => {
                        return <CarCard key={car?.id} car={car} />
                    })
                }
            </div>

            <div className='md:hidden my-5 mdLmy-6 lg:my-8'> 
                <CarCarousal bestCars={bestCars} />
            </div>

        </div>
    );
};

Section2.displayName = 'Section2'

export default Section2;
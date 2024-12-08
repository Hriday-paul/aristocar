import CarCard from '@/components/shared/CarCard/CarCard';
import { useTranslations } from 'next-intl';
import React from 'react';

const Section2 = React.memo(() => {
    const t = useTranslations('home.section2')
    const bestCars = [
        {
            id : 1,
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
            id : 2,
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
            id : 3,
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
            id : 4,
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
        <div className='container'>
            {/* -------------title-------------- */}
            <h3 className="relative font-lastica text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-primary before:w-1 before:md:w-1.5 before:lg:w-2 before:xl:w-2 before:h-full before:bg-primary before:content-[''] before:absolute before:top-0 before:-left-1.5 before:md:-left-2 before:lg:-left-3 before:xl:-left-4 before:rounded-r-2xl ml-2 lg:ml-3 xl:ml-4 leading-6 md:leading-9 lg:leading-none before:-mt-0.5">{t("title")}</h3>
            {/* ----------cards------------- */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center my-10'>
                {
                    bestCars?.map(car=>{
                        return <CarCard key={car?.id} car={car}/>
                    })
                }
            </div>

        </div>
    );
});

Section2.displayName = 'Section2'

export default Section2;
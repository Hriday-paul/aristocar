import CarCard from '@/components/shared/CarCard/CarCard';
import React from 'react';

const page = () => {
    const cars = [
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
        <div>
            <h4 className='font-poppins text-2xl text-primary'>Wishlist</h4>
            {/* ------------------cars------------------ */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-3'>
                {
                    cars?.map(car => {
                        return <CarCard key={car?.id} car={car} />
                    })
                }
            </div>
        </div>
    );
};

export default page;
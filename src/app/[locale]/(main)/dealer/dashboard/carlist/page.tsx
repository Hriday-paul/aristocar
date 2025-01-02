import AddCarListing from '@/components/Dashboard/DealerDashboard/AddCarListing/AddCarListing';
import DealerListingCar from '@/components/Dashboard/DealerDashboard/DealerListingCar';
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
            {/* //----------------listing count-------------------- */}
            <div className="grid grid-cols-2 gap-5 w-full min-w-0">
                <div className="flex flex-col px-6 py-2 bg-white shadow-2 rounded overflow-hidden border border-stroke">
                    <div className="flex flex-col items-center space-y-2 py-3">
                        <div className="text-3xl md:text-6xl font-bold tracking-tight leading-none text-primary font-poppins">21</div>
                        <div className="text-lg font-medium text-primary font-poppins">In use</div>
                    </div>
                </div>
                <div className="flex flex-col px-6 py-2 bg-white shadow-2 rounded overflow-hidden border border-stroke">
                    <div className="flex flex-col items-center space-y-2 py-3">
                        <div className="text-3xl md:text-6xl font-bold tracking-tight leading-none text-primary font-poppins">9</div>
                        <div className="text-lg font-medium text-primary font-poppins">Available</div>
                    </div>
                </div>
            </div>

            {/* ----------------add listing ------------------ */}
            <div className='my-5'>
                <AddCarListing>
                    <div className='bg-primary text-secondary py-2.5 text-center w-full rounded-sm font-poppins text-base hover:bg-opacity-85 duration-200'>Add Listing</div>
                </AddCarListing>
            </div>


            <div>
                <h4 className='font-poppins text-2xl text-primary'>Car List</h4>
                {/* ------------------cars------------------ */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-3'>
                    {
                        cars?.map(car => {
                            return <DealerListingCar key={car?.id} car={car} />
                        })
                    }
                </div>
            </div>

        </div>
    );
};

export default page;
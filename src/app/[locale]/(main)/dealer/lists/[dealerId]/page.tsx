import DellerContactForm from '@/components/custom/CarDetails/DellerContactForm';
import CarCard from '@/components/shared/CarCard/CarCard';
import HandlePagination from '@/components/shared/CustomPagination/HandlePagination';
import Image from 'next/image';
import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { IoMailOutline } from 'react-icons/io5';

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
        <div className='bg-white'>
            <div className='container py-5 md:py-8 lg:py-10'>
                <div>
                    <div className='flex flex-row gap-x-4 items-center'>
                        <Image src="https://res.cloudinary.com/devlj6p7h/image/upload/v1734002828/bdcalling/n7iopxq07dkaqz5kyj05.png" height={100} width={100} className='h-10 w-auto object-cover' alt="deller image" />
                        <h2 className='font-poppins font-medium text-base'>Dealer Name</h2>
                    </div>
                    <p className='text-base font-poppins text-[#000000B2] my-6'>lorem ipsum dolor sit amet consecteur lorem ipsum dolor sit amet consecteurlorem ipsumlore.</p>
                    <section className='flex flex-row gap-x-2 items-center my-6'>
                        <CiLocationOn className='text-2xl text-primary' />
                        <p className='text-base font-poppins text-[#000000B2]'>Lorem ipsum 53, 37199 HH CITY</p>
                    </section>
                    <section className='flex flex-row gap-x-2 items-center my-6'>
                        <BsTelephone className='text-2xl text-primary' />
                        <p className='text-base font-poppins text-[#000000B2]'>+00 (0) 00 000 00 01</p>
                    </section>
                    <section className='flex flex-row gap-x-2 items-center my-6'>
                        <IoMailOutline className='text-2xl text-primary' />
                        <p className='text-base font-poppins text-[#000000B2]'>abcd@gmail.com</p>
                    </section>
                </div>
                {/* ----------------listings------------------- */}
                <div className='mt-16'>
                    <h5 className='font-lastica text-lg text-primary underline underline-offset-[16px] decoration-primary border-b border-b-strokeinput pb-2 mb-8'>Listings</h5>
                    <h6 className='font-poppins text-primary text-lg font-medium'>49 Listings for sale</h6>


                    {/* ------------------cars------------------ */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8 items-center my-5'>
                        {
                            cars?.map(car => {
                                return <CarCard key={car?.id} car={car} />
                            })
                        }
                    </div>
                    <div className='flex flex-row justify-center items-center my-5'>
                        <HandlePagination />
                    </div>

                    <div className='mt-8'>
                        <DellerContactForm />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default page;
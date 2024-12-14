import AllCategorySelect from '@/components/custom/Cars/AllCategorySelect';
import PriceFilterSelect from '@/components/custom/Cars/PriceFilterSelect';
import CarCard from '@/components/shared/CarCard/CarCard';
import FilterSlide from '@/components/shared/FilterSlide/FilterSlide';
import Link from 'next/link';
import React from 'react';
import { IoIosSearch } from "react-icons/io";

const page = () => {
    const brands = ['SUV', "BMW", 'AUDI', 'TATA', "AKIJ", "Ferrari"]
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
    const filter = {
        brand: "",
        model: "",
        min_price: "",
        drive: "",
        mileage: "",
        country: ""
    }
    return (
        <div className='bg-[#F8FAFC]'>
            <div className='container py-4'>
                {/* ------------category section------------------ */}
                <div className='bg-[#F2F2F2] flex flex-row items-center'>
                    <section className='w-full md:w-3/12 lg:w-1/4 xl:w-1/5 bg-primary '>
                        <AllCategorySelect items={brands} />
                    </section>
                    <div className='hidden md:block px-5'>
                        <ul className='flex flex-row gap-x-3 lg:gap-x-5 items-center flex-wrap'>
                            {brands?.map((brand, indx) => {
                                return <li key={indx} className='font-poppins text-zinc-600 text-sm first:text-primary first:font-semibold'>
                                    <Link href='/'>{brand}</Link>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
                {/* --------------search filter------------ */}
                <div className='grid grid-cols-12 gap-3 lg:gap-5 items-center my-5 xl:my-8'>
                    <div className='col-span-10 lg:col-span-3 order-1 flex flex-row gap-x-1 items-center'>
                        <p className='text-lg font-poppins font-medium'>Sort Price :</p>
                        <PriceFilterSelect placeholder='Price Low To High' />
                    </div>
                    <div className='col-span-12 lg:col-span-8 order-3 lg:order-2 bg-white shadow-md border border-stroke py-2.5 md:py-3 pl-3 md:pl-4 pr-3 md:pr-4 flex flex-row justify-between gap-x-3 items-center'>
                        <IoIosSearch className='text-3xl text-zinc-500' />
                        <input type="text" className='border-none outline-none focus:border-none focus:outline-none font-poppins text-base w-full placeholder:font-poppins placeholder:text-zinc-400' placeholder='Search...' />
                        <button className='bg-primary hover:bg-opacity-90 duration-200 font-poppins text-center px-4 py-2.5 text-secondary text-sm rounded-sm'>Search</button>
                    </div>
                    <div className='col-span-2 lg:col-span-1 order-2 lg:order-3'>
                        <FilterSlide filter={filter}>
                            <center className='float-right'>
                                <svg className='cursor-pointer h-6 lg:h-8 xl:h-10 w-6 lg:w-8 xl:w-10' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 50 50" fill="none">
                                    <path d="M39.582 47.3957C38.7279 47.3957 38.0195 46.6873 38.0195 45.8332V22.9165C38.0195 22.0623 38.7279 21.354 39.582 21.354C40.4362 21.354 41.1445 22.0623 41.1445 22.9165V45.8332C41.1445 46.6873 40.4362 47.3957 39.582 47.3957Z" fill="#292D32" />
                                    <path d="M39.582 16.1457C38.7279 16.1457 38.0195 15.4373 38.0195 14.5832V4.1665C38.0195 3.31234 38.7279 2.604 39.582 2.604C40.4362 2.604 41.1445 3.31234 41.1445 4.1665V14.5832C41.1445 15.4373 40.4362 16.1457 39.582 16.1457Z" fill="#292D32" />
                                    <path d="M25 47.3957C24.1458 47.3957 23.4375 46.6873 23.4375 45.8332V35.4165C23.4375 34.5623 24.1458 33.854 25 33.854C25.8542 33.854 26.5625 34.5623 26.5625 35.4165V45.8332C26.5625 46.6873 25.8542 47.3957 25 47.3957Z" fill="#292D32" />
                                    <path d="M25 28.6457C24.1458 28.6457 23.4375 27.9373 23.4375 27.0832V4.1665C23.4375 3.31234 24.1458 2.604 25 2.604C25.8542 2.604 26.5625 3.31234 26.5625 4.1665V27.0832C26.5625 27.9373 25.8542 28.6457 25 28.6457Z" fill="#292D32" />
                                    <path d="M10.418 47.3957C9.5638 47.3957 8.85547 46.6873 8.85547 45.8332V22.9165C8.85547 22.0623 9.5638 21.354 10.418 21.354C11.2721 21.354 11.9805 22.0623 11.9805 22.9165V45.8332C11.9805 46.6873 11.2721 47.3957 10.418 47.3957Z" fill="#292D32" />
                                    <path d="M10.418 16.1457C9.5638 16.1457 8.85547 15.4373 8.85547 14.5832V4.1665C8.85547 3.31234 9.5638 2.604 10.418 2.604C11.2721 2.604 11.9805 3.31234 11.9805 4.1665V14.5832C11.9805 15.4373 11.2721 16.1457 10.418 16.1457Z" fill="#292D32" />
                                    <path d="M14.5833 24.479H6.25C5.39583 24.479 4.6875 23.7707 4.6875 22.9165C4.6875 22.0623 5.39583 21.354 6.25 21.354H14.5833C15.4375 21.354 16.1458 22.0623 16.1458 22.9165C16.1458 23.7707 15.4375 24.479 14.5833 24.479Z" fill="#292D32" />
                                    <path d="M43.7513 24.479H35.418C34.5638 24.479 33.8555 23.7707 33.8555 22.9165C33.8555 22.0623 34.5638 21.354 35.418 21.354H43.7513C44.6055 21.354 45.3138 22.0623 45.3138 22.9165C45.3138 23.7707 44.6055 24.479 43.7513 24.479Z" fill="#292D32" />
                                    <path d="M29.1654 28.646H20.832C19.9779 28.646 19.2695 27.9377 19.2695 27.0835C19.2695 26.2293 19.9779 25.521 20.832 25.521H29.1654C30.0195 25.521 30.7279 26.2293 30.7279 27.0835C30.7279 27.9377 30.0195 28.646 29.1654 28.646Z" fill="#292D32" />
                                </svg>
                            </center>
                        </FilterSlide>

                    </div>
                </div>

                {/* ------------------cars------------------ */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center my-10'>
                    {
                        cars?.map(car => {
                            return <CarCard key={car?.id} car={car} />
                        })
                    }
                </div>

            </div>
        </div>
    );
};

export default page;
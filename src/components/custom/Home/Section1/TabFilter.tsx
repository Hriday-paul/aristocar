'use client'
import React, { useState } from 'react';
import tabcar1 from '../../../../../public/home/tabcar1.png'
import tabcar2 from '../../../../../public/home/tabcar2.png'
import tabcar3 from '../../../../../public/home/tabcar3.png'
import tabcar4 from '../../../../../public/home/tabcar4.png'
import styles from './Tab.module.css'
import Image from 'next/image';
import { motion } from "motion/react"
import SelectFilter from './SelectFilter';
import FilterSlide from '@/components/shared/FilterSlide/FilterSlide';
import Link from 'next/link';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const TabFilter = React.memo(() => {
    // const tabs = [
    //     {
    //         id: 1,
    //         img: tabcar1,
    //         name: 'Coupé'
    //     },
    //     {
    //         id: 2,
    //         img: tabcar2,
    //         name: 'Convertible'
    //     },
    //     {
    //         id: 3,
    //         img: tabcar3,
    //         name: 'Limousine'
    //     },
    //     {
    //         id: 4,
    //         img: tabcar4,
    //         name: 'SUV'
    //     },
    // ]
    // const [selectedTab, setSelectedTab] = useState<number>(tabs[0]?.id)

    return (
        <div className='relative md:absolute md:-bottom-40 lg:-bottom-24 xl:-bottom-10 w-full z-20 mt-5 md:mt-0'>

            {/* <div className='bg-primary shadow-4 w-5/6 sm:w-[360px] md:w-[480] lg:w-[520px] xl:w-[700px] mx-auto border border-zinc-600 mb-1 flex flex-row justify-between items-center gap-x-2 md:gap-x-4 px-1.5 sm:px-2 md:px-3'>

                {
                    tabs?.map(tab => {
                        return <div onClick={() => setSelectedTab(tab?.id)} key={tab?.id} className={`flex flex-row gap-x-1 md:gap-x-2 items-center py-3 relative cursor-pointer`}>
                            <Image src={tab?.img} className='h-1.5 sm:h-2 md:h-2.5 xl:h-4 w-auto' alt='tab car img' />
                            <span className='text-[#F8FAFC] text-xs sm:text-sm md:text-base xl:text-lg'>{tab?.name}</span>
                            {selectedTab == tab?.id && <motion.span layoutId="underline" className={styles.underline}></motion.span>}
                        </div>
                    })
                }

            </div> */}

            <Selection />

        </div>

    )
});

export type shortfilterType = {
    brand: string,
    model: string,
    min_price: string,
    drive: string,
    mileage: string,
    country: string
}

const Selection = React.memo(() => {

    const [shortFilter, setShortFilter] = useState<shortfilterType>({
        brand: "",
        model: "",
        min_price: "",
        drive: "",
        mileage: "",
        country: ""
    })

    return (
        <form className='bg-black shadow-4 w-11/12 md:w-[550px] lg:w-[600px] xl:w-[750px] mx-auto rounded-sm border border-zinc-800 grid grid-cols-2 gap-x-3 lg:gap-x-4 xl:gap-x-5 items-center p-5 md:p-6 lg:p-8 xl:p-10 pb-5 md:pb-6 lg:pb-8 relative'>

            <div className="mr-1.5 md:mr-3 my-3 w-full">
                <SelectFilter name='brand' setShortFilter={setShortFilter} items={['SUV', "BMW", 'AUDI', 'TATA', "AKIJ", "Ferrari"]} placeholder={"Brand"} />
            </div>
            <div className="mr-1.5 md:mr-3 my-3 w-full">
                <SelectFilter name='model' setShortFilter={setShortFilter} items={["A-Class", "C-Class", "CLA", "E-Class", "EQE", "EQE SUV", "AMG SL", "V-CLASS/VAINO"]} placeholder={"Model"} />
            </div>
            <div className="mr-1.5 md:mr-3 my-3 w-full">
                <SelectFilter name='min_price' setShortFilter={setShortFilter} items={['300k', '400k', '500k', '600k', '800k', '1000k', '1500k', '3000k']} placeholder={"Price from"} />
            </div>
            <div className="mr-1.5 md:mr-3 my-3 w-full">
                <SelectFilter name='drive' setShortFilter={setShortFilter} items={["LHD", "RHD"]} placeholder={"Drive"} />
            </div>
            <div className="mr-1.5 md:mr-3 my-3 w-full">
                <SelectFilter name='mileage' setShortFilter={setShortFilter} items={['100km', '200km', '300km', '400km', '500km', '600km', '800km', '1000km']} placeholder={"Mileage from"} />
            </div>
            <div className="mr-1.5 md:mr-3 my-3 w-full">
                <SelectFilter name='country' setShortFilter={setShortFilter} items={['Bangladesh', 'Europe', "Africa", 'Austrelia']} placeholder={"Country"} />
            </div>

            <div className='w-full absolute -bottom-5 left-0 col-span-2'>
                <center>
                    <Link href='/cars'>
                        <button className='w-2/3 button-drop-shadow bg-primary text-secondary p-4 text-center text-sm md:text-base lg:text-lg font-satoshi font-extrabold hover:bg-[#1a1a1a] duration-200 border border-strokedark'>
                            Search
                        </button>
                    </Link>
                </center>
            </div>

            <FilterSlide filter={shortFilter}>
                <div className='absolute bottom-5 right-5 text-white'>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <svg
                                    className="cursor-pointer h-5 xl:h-6 w-5 xl:w-6 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 50 50"
                                    fill="currentColor"
                                >
                                    <path d="M39.582 47.3957C38.7279 47.3957 38.0195 46.6873 38.0195 45.8332V22.9165C38.0195 22.0623 38.7279 21.354 39.582 21.354C40.4362 21.354 41.1445 22.0623 41.1445 22.9165V45.8332C41.1445 46.6873 40.4362 47.3957 39.582 47.3957Z" />
                                    <path d="M39.582 16.1457C38.7279 16.1457 38.0195 15.4373 38.0195 14.5832V4.1665C38.0195 3.31234 38.7279 2.604 39.582 2.604C40.4362 2.604 41.1445 3.31234 41.1445 4.1665V14.5832C41.1445 15.4373 40.4362 16.1457 39.582 16.1457Z" />
                                    <path d="M25 47.3957C24.1458 47.3957 23.4375 46.6873 23.4375 45.8332V35.4165C23.4375 34.5623 24.1458 33.854 25 33.854C25.8542 33.854 26.5625 34.5623 26.5625 35.4165V45.8332C26.5625 46.6873 25.8542 47.3957 25 47.3957Z" />
                                    <path d="M25 28.6457C24.1458 28.6457 23.4375 27.9373 23.4375 27.0832V4.1665C23.4375 3.31234 24.1458 2.604 25 2.604C25.8542 2.604 26.5625 3.31234 26.5625 4.1665V27.0832C26.5625 27.9373 25.8542 28.6457 25 28.6457Z" />
                                    <path d="M10.418 47.3957C9.5638 47.3957 8.85547 46.6873 8.85547 45.8332V22.9165C8.85547 22.0623 9.5638 21.354 10.418 21.354C11.2721 21.354 11.9805 22.0623 11.9805 22.9165V45.8332C11.9805 46.6873 11.2721 47.3957 10.418 47.3957Z" />
                                    <path d="M10.418 16.1457C9.5638 16.1457 8.85547 15.4373 8.85547 14.5832V4.1665C8.85547 3.31234 9.5638 2.604 10.418 2.604C11.2721 2.604 11.9805 3.31234 11.9805 4.1665V14.5832C11.9805 15.4373 11.2721 16.1457 10.418 16.1457Z" />
                                    <path d="M14.5833 24.479H6.25C5.39583 24.479 4.6875 23.7707 4.6875 22.9165C4.6875 22.0623 5.39583 21.354 6.25 21.354H14.5833C15.4375 21.354 16.1458 22.0623 16.1458 22.9165C16.1458 23.7707 15.4375 24.479 14.5833 24.479Z" />
                                    <path d="M43.7513 24.479H35.418C34.5638 24.479 33.8555 23.7707 33.8555 22.9165C33.8555 22.0623 34.5638 21.354 35.418 21.354H43.7513C44.6055 21.354 45.3138 22.0623 45.3138 22.9165C45.3138 23.7707 44.6055 24.479 43.7513 24.479Z" />
                                    <path d="M29.1654 28.646H20.832C19.9779 28.646 19.2695 27.9377 19.2695 27.0835C19.2695 26.2293 19.9779 25.521 20.832 25.521H29.1654C30.0195 25.521 30.7279 26.2293 30.7279 27.0835C30.7279 27.9377 30.0195 28.646 29.1654 28.646Z" />
                                </svg>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Advance Filter</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </FilterSlide>



        </form>
    )
})

Selection.displayName = "Selection"
TabFilter.displayName = "TabFilter"

export default TabFilter;

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

const TabFilter = React.memo(() => {
    const tabs = [
        {
            id: 1,
            img: tabcar1,
            name: 'Coupé'
        },
        {
            id: 2,
            img: tabcar2,
            name: 'Convertible'
        },
        {
            id: 3,
            img: tabcar3,
            name: 'Limousine'
        },
        {
            id: 4,
            img: tabcar4,
            name: 'SUV'
        },
    ]
    const [selectedTab, setSelectedTab] = useState<number>(tabs[0]?.id)

    return (
        <div className='relative md:absolute md:-bottom-40 lg:-bottom-24 xl:-bottom-10 w-full z-20 mt-5 md:mt-0'>

            <div className='bg-primary shadow-4 w-5/6 sm:w-[360px] md:w-[480] lg:w-[520px] xl:w-[700px] mx-auto border border-zinc-600 mb-1 flex flex-row justify-between items-center gap-x-2 md:gap-x-4 px-1.5 sm:px-2 md:px-3'>

                {
                    tabs?.map(tab => {
                        return <div onClick={() => setSelectedTab(tab?.id)} key={tab?.id} className={`flex flex-row gap-x-1 md:gap-x-2 items-center py-3 relative cursor-pointer`}>
                            <Image src={tab?.img} className='h-1.5 sm:h-2 md:h-2.5 xl:h-4 w-auto' alt='tab car img' />
                            <span className='text-[#F8FAFC] text-xs sm:text-sm md:text-base xl:text-lg'>{tab?.name}</span>
                            {selectedTab == tab?.id && <motion.span layoutId="underline" className={styles.underline}></motion.span>}
                        </div>
                    })
                }

            </div>

            <Selection selectedTab={tabs[selectedTab]?.name} />

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

const Selection = React.memo(({ selectedTab }: { selectedTab: string }) => {

    const [shortFilter, setShortFilter] = useState<shortfilterType>({
        brand: "",
        model: "",
        min_price: "",
        drive: "",
        mileage: "",
        country: ""
    })

    return (
        <form className='bg-black shadow-4 w-11/12 md:w-[550px] lg:w-[600px] xl:w-[750px] mx-auto rounded-sm border border-zinc-800 grid grid-cols-2 gap-x-3 items-center p-8 pb-8 relative'>

            <div className="mr-1.5 md:mr-3 my-3 w-full">
                <SelectFilter name='brand' setShortFilter={setShortFilter} items={['SUV', "BMW", 'AUDI', 'TATA', "AKIJ", "Ferrari"]} placeholder={"Brand"} /> 
            </div>
            <div className="mr-1.5 md:mr-3 my-3 w-full">
                <SelectFilter name='model' setShortFilter={setShortFilter} items={["A-Class", "C-Class", "CLA", "E-Class", "EQE", "EQE SUV", "AMG SL", "V-CLASS/VAINO"]} placeholder={"Model"} />
            </div>
            <div className="mr-1.5 md:mr-3 my-3 w-full">
                <SelectFilter name='min_price' setShortFilter={setShortFilter} items={['300k', '400k', '500k', '600k', '800k', '1000k', '1500k', '3000k']} placeholder={"Price up to"} />
            </div>
            <div className="mr-1.5 md:mr-3 my-3 w-full">
                <SelectFilter name='drive' setShortFilter={setShortFilter} items={["LHD", "RHD"]} placeholder={"Drive"} />
            </div>
            <div className="mr-1.5 md:mr-3 my-3 w-full">
                <SelectFilter name='mileage' setShortFilter={setShortFilter} items={['100km', '200km', '300km', '400km', '500km', '600km', '800km', '1000km']} placeholder={"Mileage"} />
            </div>
            <div className="mr-1.5 md:mr-3 my-3 w-full">
                <SelectFilter name='country' setShortFilter={setShortFilter} items={['Bangladesh', 'Europe', "Africa", 'Austrelia']} placeholder={"Country"} />
            </div>

            <FilterSlide filter={shortFilter}>
                <div className='w-full absolute -bottom-5 left-0 col-span-2'>
                    <center>
                        <section className='w-2/3 bg-primary text-secondary p-4 text-center text-sm md:text-base lg:text-lg font-satoshi font-extrabold hover:bg-[#1a1a1a] duration-200 border border-strokedark'>More Advance Search</section>
                    </center>
                </div>
            </FilterSlide>

        </form>
    )
})

Selection.displayName = "Selection"
TabFilter.displayName = "TabFilter"

export default TabFilter;

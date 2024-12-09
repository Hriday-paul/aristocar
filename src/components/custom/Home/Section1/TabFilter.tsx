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
        <div className='absolute left-0 -bottom-20 md:-bottom-16 lg:-bottom-24 xl:-bottom-10 w-full z-20'>

            <div className='bg-primary shadow-4 w-[300px] sm:w-[360px] md:w-[480] lg:w-[520px] xl:w-[700px] mx-auto border border-zinc-600 mb-1 flex flex-row justify-between items-center gap-x-2 md:gap-x-4 px-1.5 sm:px-2 md:px-3'>

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

type filter = {

}

const Selection = React.memo(({ selectedTab }: { selectedTab: string }) => {

    return (
        <form className='bg-black shadow-4 w-[330px] sm:w-[400px] md:w-[550px] lg:w-[600px] xl:w-[750px] mx-auto rounded-sm border border-zinc-800 grid grid-cols-2 gap-x-3 items-center p-8 pb-12 relative'>

            <SelectFilter items={['2024', '2023', '2022', '2021', '2020']} placeholder={"Make"} />
            <SelectFilter items={["A-Class", "C-Class", "CLA", "E-Class", "EQE", "EQE SUV", "AMG SL", "V-CLASS/VAINO"]} placeholder={"Model"} />
            <SelectFilter items={['300k', '400k', '500k', '600k', '800k', '1000k', '1500k', '3000k']} placeholder={"Price up to"} />
            <SelectFilter items={["First registration form"]} placeholder={"First registration form"} />
            <SelectFilter items={['100km', '200km', '300km', '400km', '500km', '600km', '800km', '1000km']} placeholder={"Kilometers"} />
            <SelectFilter items={["Dhaka", "Cumilla", "Chittagong", "Barisal"]} placeholder={"City"} />

            <div className='w-full absolute -bottom-5 left-0 col-span-2'>
                <center>
                    <button className='w-2/3 bg-primary text-secondary p-4 text-center text-lg font-satoshi font-extrabold hover:bg-[#1a1a1a] duration-200 border border-strokedark'>Search</button>
                </center>
            </div>

        </form>
    )
})

Selection.displayName = "Selection"
TabFilter.displayName = "TabFilter"

export default TabFilter;

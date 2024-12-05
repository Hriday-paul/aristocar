'use client'
import React, { useState } from 'react';
import tabcar1 from '../../../../../public/home/tabcar1.png'
import tabcar2 from '../../../../../public/home/tabcar2.png'
import tabcar3 from '../../../../../public/home/tabcar3.png'
import tabcar4 from '../../../../../public/home/tabcar4.png'
import styles from './Tab.module.css'
import Image from 'next/image';
import { motion } from "motion/react"

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
        <div className='absolute left-0 -bottom-36 md:-bottom-32 lg:-bottom-10 xl:-bottom-10 w-full z-10'>

            <div className='bg-primary shadow-4 w-[360px] md:w-[480] lg:w-[520px] xl:w-[600px] mx-auto border border-zinc-600 mb-1 flex flex-row justify-between items-center gap-x-4 px-3'>

                {
                    tabs?.map(tab => {
                        return <div onClick={() => setSelectedTab(tab?.id)} key={tab?.id} className={`flex flex-row gap-x-1 md:gap-x-2 items-center py-3 relative cursor-pointer`}>
                            <Image src={tab?.img} placeholder='blur' className='h-2 md:h-2.5 xl:h-4 w-auto' alt='tab car img' />
                            <span className='text-[#F8FAFC] text-sm md:text-base xl:text-lg'>{tab?.name}</span>
                            {selectedTab == tab?.id && <motion.span layoutId="underline" className={styles.underline}></motion.span>}
                        </div>
                    })
                }

            </div>

            <div className='bg-black shadow-4 h-44 md:h-48 xl:h-[250px] w-[400px] md:w-[550px] lg:w-[600px] xl:w-[670px] mx-auto rounded-sm border border-zinc-800'>

            </div>


        </div>

    )
});

TabFilter.displayName = "TabFilter"

export default TabFilter;
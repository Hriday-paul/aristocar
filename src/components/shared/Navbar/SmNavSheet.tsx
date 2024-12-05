import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import Link from 'next/link';
import { RiMenu3Fill } from 'react-icons/ri';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { motion } from "motion/react"


const SmNavSheet = ({routs} : {routs : { id: number, name: string, rout: string }[]}) => {

    return (
        <div>
            <Sheet>
                <SheetTrigger>
                    <RiMenu3Fill className="text-2xl text-primary ml-5" />
                </SheetTrigger>
                <SheetContent side={'left'}>
                    <SheetHeader>
                        <SheetTitle></SheetTitle>
                        <SheetDescription />

                        <div className=''>

                            <h1 className="text-xl font-extrabold font-lastica text-secondary select-none cursor-pointer text-left -mt-1">
                                <Link href='/'>Aristocar</Link>
                            </h1>

                            <ul className="my-6">
                                {
                                    routs?.map(item => {
                                        return <motion.li
                                            initial={{ opacity: 0, x: 15, y: 20 }}
                                            animate={{ opacity: 1, x: 0, y: 0 }}
                                            transition={{ duration: 0.2, delay: 0.1 * item?.id }}

                                            key={item?.id} className='text-base relative group my-2'>
                                            <Link href={item?.rout} className="border-b border-b-zinc-700 py-4 font-mono text-sm text-black flex flex-row gap-x-1 items-center group duration-300 cursor-pointer">
                                                <SheetTrigger className="w-full flex flex-row gap-x-1 items-center">
                                                    <h6 className="text-secondary text-xl font-poppins">{item?.name}</h6>
                                                    <FaArrowLeftLong className="text-secondary block rotate-180 ml-1 group-hover:ml-2.5 duration-200" />
                                                </SheetTrigger>
                                            </Link>

                                        </motion.li>
                                    })
                                }
                            </ul>

                        </div>

                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    );
};


export default SmNavSheet;
"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { IoLogOutOutline } from 'react-icons/io5';

const SmTopBar = ({ routs }: { routs: { id: number, name: string, rout: string, icon: React.ReactNode }[] }) => {
    const activeRout = usePathname();
    return (
        <div>
            <ul className='flex flex-row justify-between gap-x-5 p-4 pt-0'>
                {
                    routs?.map(rout => {
                        return <Link href={rout?.rout} key={rout?.id}>
                            <li className={`flex flex-col justify-center gap-y-1 pb-1 ${rout?.rout == activeRout ? "border-b-2 border-b-strokedark " : ''}`}>
                                <span className={`mx-auto ${rout?.rout == activeRout ? "text-primary" : 'text-zinc-600'}`}>{rout?.icon}</span>
                                <p className={`text-center font-poppins text-sm font-medium ${rout?.rout == activeRout ? "text-primary" : 'text-zinc-600'}`}>{rout?.name}</p>
                            </li>
                        </Link>
                    })
                }
                <li className={`flex flex-col justify-center gap-y-1 pb-1`}>
                    <span className={`mx-auto text-zinc-600`}><IoLogOutOutline className='text-lg' /></span>
                    <p className={`text-center font-poppins text-sm font-medium text-zinc-600`}>Logout</p>
                </li>
            </ul>
        </div>
    );
};

export default SmTopBar;
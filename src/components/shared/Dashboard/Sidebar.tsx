'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { IoLogOutOutline } from 'react-icons/io5';


const Sidebar = ({ routs }: { routs: { id: number, name: string, rout: string, icon: React.ReactNode }[] }) => {
    const activeRout = usePathname();
    return (
        <div className='w-full bg-white border-stroke shadow-2'>
            <p className='text-lg font-poppins font-medium text-primary px-4 py-3'>Navigation</p>
            <ul className='border-t border-t-stroke pb-2 space-y-1'>
                {
                    routs?.map(rout => {
                        return <li key={rout?.id} className={`px-5 relative hover:bg-[#E9E9E9] duration-200 ${rout?.rout == activeRout ? "bg-[#E9E9E9]" : ''}`}>
                            <Link href={rout?.rout} className='flex flex-row gap-x-2 items-center py-3'>
                                <span className={rout?.rout !== activeRout ? "text-zinc-600" : "text-black"}>{rout?.icon}</span>
                                <p className={`font-poppins text-base ${rout?.rout !== activeRout ? "text-zinc-600" : "text-black"}`}>{rout?.name}</p>
                                {rout?.rout == activeRout && <span className='absolute top-0 left-0 h-full w-full border-l-4 border-l-primary'></span>}
                            </Link>
                        </li>
                    })
                }
                {/* //default logout------------------- */}
                <li className={`px-5 relative hover:bg-[#E9E9E9] duration-200`}>
                    <section className='flex flex-row gap-x-2 items-center py-3'>
                        <span className={"text-zinc-600"}><IoLogOutOutline className='text-lg' /></span>
                        <p className={`font-poppins text-base text-zinc-600`}>Logout</p>
                    </section>
                </li>

            </ul>
        </div>
    );
};

export default Sidebar;
import Sidebar from '@/components/shared/Dashboard/Sidebar';
import SmTopBar from '@/components/shared/Dashboard/SmTopBar';
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdDashboard, MdFavoriteBorder } from 'react-icons/md';

const layout = ({ children }: { children: React.ReactNode }) => {
    const routs: { id: number, name: string, rout: string, icon: React.ReactNode }[] = [{
        id: 1,
        name: "Dashboard",
        icon: <MdDashboard className='text-lg' />,
        rout: '/user/dashboard'
    },
    {
        id: 2,
        name: "Wishlist",
        icon: <MdFavoriteBorder className='text-lg' />,
        rout: '/user/dashboard/wishlist'
    },
    {
        id: 3,
        name: "Settings",
        icon: <IoSettingsOutline className='text-lg' />,
        rout: '/user/dashboard/settings'
    }]
    return (
        <div className='bg-[#F8FAFC]'>
            <div className="container py-4 md:py-8">
                <div className='grid grid-cols-1 lg:grid-cols-8 gap-x-5'>
                    <div className='hidden lg:block lg:col-span-2'>
                        <Sidebar routs={routs} />
                    </div>
                    <div className='lg:hidden'>
                        <SmTopBar routs={routs} />
                    </div>
                    <div className='col-span-1 lg:col-span-6'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default layout;
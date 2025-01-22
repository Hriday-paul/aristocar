import Sidebar from '@/components/shared/Dashboard/Sidebar';
import SmTopBar from '@/components/shared/Dashboard/SmTopBar';
import { useTranslations } from 'next-intl';
import React from 'react';
import { IoCarOutline, IoSettingsOutline } from 'react-icons/io5';
import { MdDashboard, MdFavoriteBorder } from 'react-icons/md';
import { SlBadge } from "react-icons/sl";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const t = useTranslations('dashboard.sidebar')
    const routs: { id: number, name: string, rout: string, icon: React.ReactNode }[] = [
        {
            id: 1,
            name: t("dashboard"),
            icon: <MdDashboard className='text-lg' />,
            rout: '/dealer/dashboard'
        },
        {
            id: 2,
            name: t("car_list"),
            icon: <IoCarOutline className='text-lg' />,
            rout: '/dealer/dashboard/carlist'
        },
        {
            id: 3,
            name: t("subscription_bill"),
            icon: <SlBadge className='text-lg' />,
            rout: '/dealer/dashboard/subscription'
        },
        {
            id: 4,
            name: t("wishlist"),
            icon: <MdFavoriteBorder className='text-lg' />,
            rout: '/dealer/dashboard/wishlist'
        },
        {
            id: 5,
            name: t("settings"),
            icon: <IoSettingsOutline className='text-lg' />,
            rout: '/dealer/dashboard/settings'
        }]
    return (
        <div className='bg-[#F8FAFC]'>
            <div className="container py-4 md:py-8">
                <div className='grid grid-cols-1 lg:grid-cols-8 gap-x-5'>
                    <div className='hidden lg:block lg:col-span-2'>
                        <Sidebar routs={routs} title={t('navigation')} logoutTxt={t('logout')}/>
                    </div>
                    <div className='lg:hidden'>
                        <SmTopBar routs={routs} logoutTxt={t('logout')}/>
                    </div>
                    <div className='col-span-1 lg:col-span-6'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
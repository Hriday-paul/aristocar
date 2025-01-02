import AriaChart_dlr from '@/components/Dashboard/DealerDashboard/Charts/AriaChart_dlr';
import HomeContact from '@/components/Dashboard/DealerDashboard/HomeContact';
import HandlePagination from '@/components/shared/CustomPagination/HandlePagination';
import DashboardProfile from '@/components/shared/Dashboard/DashboardProfile';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className=''>
            <DashboardProfile />
            <div className='my-5 lg:my-8'>
                <AriaChart_dlr />
            </div>
            <HomeContact />

            <HandlePagination />
        </div>
    );
};

export default page;
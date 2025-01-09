import ChartRoot from '@/components/Dashboard/DealerDashboard/Charts/ChartRoot';
import HomeContact from '@/components/Dashboard/DealerDashboard/HomeContact';
import HandlePagination from '@/components/shared/CustomPagination/HandlePagination';
import DashboardProfile from '@/components/shared/Dashboard/DashboardProfile';
import React from 'react';

const page = () => {
    return (
        <div className=''>
            <DashboardProfile />
            <div className='my-5 lg:my-8'>
                <ChartRoot />
            </div>
            <HomeContact />

            <HandlePagination />
        </div>
    );
};

export default page;
import HomeContact from '@/components/Dashboard/UserDashboard/HomeContact';
import HandlePagination from '@/components/shared/CustomPagination/HandlePagination';
import DashboardProfile from '@/components/shared/Dashboard/DashboardProfile';
import React from 'react';

const page = () => {
    return (
        <div className=''>
            <DashboardProfile />

            <HomeContact />

            <HandlePagination />
        </div>
    );
};

export default page;
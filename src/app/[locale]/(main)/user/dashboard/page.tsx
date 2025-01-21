import HomeContact from '@/components/Dashboard/UserDashboard/HomeContact';
import HandlePagination from '@/components/shared/CustomPagination/HandlePagination';
import DashboardProfile from '@/components/shared/Dashboard/DashboardProfile';
import { useTranslations } from 'next-intl';
import React from 'react';

const Page = () => {
    const t = useTranslations('dashboard.home');
    const txtObj = {
        edit_profile: t("edit_profile"),
        "my_address": t("my_address"),
        "edit_address": t("edit_address"),
        "recent_contact": t("recent_contact")
    }
    return (
        <div className=''>
            <DashboardProfile txt={txtObj} />

            {/* <HomeContact /> */}

            {/* <HandlePagination /> */}
        </div>
    );
};

export default Page;
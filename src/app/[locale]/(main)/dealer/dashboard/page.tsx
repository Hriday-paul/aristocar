import ChartRoot from '@/components/Dashboard/DealerDashboard/Charts/ChartRoot';
import HomeContact from '@/components/Dashboard/DealerDashboard/HomeContact';
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
            <DashboardProfile txt={txtObj}/>

            <div className='my-5 lg:my-8'>
                <ChartRoot title={t('chart_title')}/>
            </div>

            <HomeContact title={t('recent_contact')}/>
        </div>
    );
};

export default Page;
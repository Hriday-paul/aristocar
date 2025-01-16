import BillCardsRoot from '@/components/Dashboard/DealerDashboard/Subscription/BillCardsRoot';
import RecentBillingHistory from '@/components/Dashboard/DealerDashboard/Subscription/RecentBillingHistory';
import RunningSubscription from '@/components/Dashboard/DealerDashboard/Subscription/RunningSubscription';
import { useTranslations } from 'next-intl';
import React from 'react';

const Page = () => {
    const t = useTranslations('dashboard.subscription');

    const tableHeadTxt = {
        "trans_id": t('table.trans_id'),
        "package": t("table.package"),
        "amount": t("table.amount"),
        "date": t('table.date'),
        "view_invoice" : t("table.view_invoice"),
    }

    return (
        <div>
            {/* --------------billing section-------------- */}
            <div className='flex flex-col justify-center items-center'>
                <RunningSubscription txt={{ title: t('title'), sub_title: t('sub_title') }} />
                {/* ---------billing cards--------------- */}
                <BillCardsRoot btnTxt={t('buy_btn')}/>
            </div>

            {/* ------------------ recent billing history------------------ */}
            <div>
                <RecentBillingHistory title={t("recent_bill_history")} headTxt={tableHeadTxt}/>
            </div>
        </div>
    );
};

export default Page;
import ResendOtp from '@/components/custom/ResendOtp/ResendOtp';
import AuthCarDesign from '@/components/shared/AuthCarDesign/AuthCarDesign';
import { useTranslations } from 'next-intl';
import React from 'react';

const Page = () => {
    const t = useTranslations("resent_otp")
    const txt = {
        "title": t('title'),
        "input_email": t("input_email"),
        "btn": t("btn")
    }

    return (
        <div className='bg-[#F8FAFC]'>
            <div className='container py-20 md:py-32 xl:py-40 grid grid-cols-1 lg:grid-cols-2 gap-x-8 items-center'>
                <AuthCarDesign />
                <ResendOtp txt={txt} />
            </div>
        </div>
    );
};

export default Page;
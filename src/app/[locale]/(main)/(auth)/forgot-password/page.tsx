
import ResendOtp from '@/components/custom/ResendOtp/ResendOtp';
import AuthCarDesign from '@/components/shared/AuthCarDesign/AuthCarDesign';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import React from 'react';

export const metadata: Metadata = {
    title: "Forgot Password | Aristocar",
    description: "Browse the best luxury cars, exotic cars, supercars, hypercars, and rare cars for sale from top dealers around the world",
};

const Page = () => {
    const t = useTranslations("resent_otp")
    const txt = {
        "title": t('title2'),
        "input_email": t("input_email"),
        "btn": t("btn")
    }
    return (
        <div className='bg-[#F8FAFC]'>
            <div className='container py-20 md:py-32 xl:py-40 grid grid-cols-1 lg:grid-cols-2 gap-x-8 items-center'>
                <AuthCarDesign />
                <ResendOtp txt={txt}/>
            </div>
        </div>
    );
};

export default Page;
import OtpPasswordForm from '@/components/custom/OtpPasswordForm/OtpPasswordForm';
import AuthCarDesign from '@/components/shared/AuthCarDesign/AuthCarDesign';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import React from 'react';

export const metadata: Metadata = {
    title: "Otp Verify | Aristocar",
    description: "Browse the best luxury cars, exotic cars, supercars, hypercars, and rare cars for sale from top dealers around the world",
};

const Page = () => {
    const t = useTranslations('otp_verify')
    const txt = {
        "title": t('title'),
        "subtitle": t("subtitle"),
        "resentBtn": t("resentBtn"),
        "VerifyBtn": t("VerifyBtn")
    }
    return (
        <div className='bg-[#F8FAFC]'>
            <div className='container py-20 md:py-32 xl:py-40 grid grid-cols-1 lg:grid-cols-2 gap-x-8 items-center'>
                <AuthCarDesign />
                <OtpPasswordForm txt={txt}/>
            </div>
        </div>
    );
};

export default Page;
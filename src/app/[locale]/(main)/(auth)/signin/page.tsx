import SigninForm from '@/components/custom/SigninForm/SigninForm';
import AuthCarDesign from '@/components/shared/AuthCarDesign/AuthCarDesign';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import React from 'react';

export const metadata: Metadata = {
    title: "Sign In | Aristocar",
    description: "Browse the best luxury cars, exotic cars, supercars, hypercars, and rare cars for sale from top dealers around the world",
};

const Signing = () => {
    const t = useTranslations('signin')
    const txt = {
        title: t('title'),
        "email": t("inputs.email"),
        "password": t("inputs.password"),
        "or": t("or"),
        "social": t("social"),
        "btn": t("btn"),
        "linktitle": t("linktitle"),
        "linktext": t("linktext"),
        "forgot_password": t("forgot_password")
    }


    return (
        <div className='bg-[#F8FAFC]'>
            <div className='container py-20 md:py-32 xl:py-40 grid grid-cols-1 lg:grid-cols-2 gap-x-8 items-center'>
                <AuthCarDesign />
                <SigninForm txt={txt}/>
            </div>
        </div>
    );
};

export default Signing;
import SignUpForm from '@/components/custom/SignUpForm/SignUpForm';
import AuthCarDesign from '@/components/shared/AuthCarDesign/AuthCarDesign';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import React from 'react';

export const metadata: Metadata = {
    title: "Sign Up | Aristocar",
    description: "Browse the best luxury cars, exotic cars, supercars, hypercars, and rare cars for sale from top dealers around the world",
};

const Signup = () => {
    const t = useTranslations('signup')
    const txt = {
        title: t('subtitle'),
        "email": t("inputs.email"),
        "user_name": t("inputs.user_name"),
        "user": t("inputs.user"),
        "dealer": t("inputs.dealer"),
        "company_name": t("inputs.company_name"),
        "dealership_name": t("inputs.dealership_name"),
        "vat_id": t("inputs.vat_id"),
        "country": t("inputs.country"),
        "city": t("inputs.city"),
        "street": t("inputs.street"),
        "post_code": t("inputs.post_code"),
        "confirm_password": t("inputs.confirm_password"),
        "password": t("inputs.password"),
        "or": t("or"),
        "social": t("social"),
        "btn": t("btn"),
        "linktitle": t("linktitle"),
        "linktext": t("linktext"),
    }

    return (
        <div className='bg-[#F8FAFC]'>
            <div className='container py-16 md:py-16 xl:py-20 grid grid-cols-1 lg:grid-cols-2 gap-x-8 items-center'>
                <AuthCarDesign />
                <SignUpForm txt={txt} />
            </div>
        </div>
    );
};

export default Signup;
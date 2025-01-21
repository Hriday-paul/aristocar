import ResetPasswordForm from '@/components/custom/ResetPasswordForm/ResetPasswordForm';
import AuthCarDesign from '@/components/shared/AuthCarDesign/AuthCarDesign';
import { useTranslations } from 'next-intl';
import React from 'react';

const ResetPass = () => {
    const t = useTranslations("reset_password");
    const txt = {
        title : t("title"),
        input1 : t("inputs.new_password"),
        input2 : t("inputs.confirm_password"),
        btn : t("btn")
    }
    return (
        <div className='bg-[#F8FAFC]'>
            <div className='container py-20 md:py-32 xl:py-40 grid grid-cols-1 lg:grid-cols-2 gap-x-8 items-center'>
                <AuthCarDesign />
                <ResetPasswordForm txt={txt}/>
            </div>
        </div>
    );
};

export default ResetPass;
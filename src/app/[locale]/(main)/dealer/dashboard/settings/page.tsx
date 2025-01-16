import DealerAccountSettings from '@/components/shared/Settings/AccountSettings/DealerAccountSettings';
import FormChangePassword from '@/components/shared/Settings/PasswordChange/FormChangePassword';
import { useTranslations } from 'next-intl';
import React from 'react';

const Page = () => {

    const t = useTranslations('dashboard.settings');

    const acTxt = {
        "full_name": t("full_name"),
        "email": t("email"),
        "phone": t("phone"),
        "vat_id": t("vat_id"),
        "country": t("country"),
        "city": t("city"),
        "post_code": t("post_code"),
        "street": t("street"),
        "chose_img": t("chose_img"),
        "save_changes": t("save_changes"),
    }

    const passTxt = {
        "current_password": t("current_password"),
        "new_password": t("new_password"),
        "confirm_password": t("confirm_password"),
        "change_password": t("change_password")
    }

    return (
        <div>
            {/* ------------account profile setting section---------------- */}
            <div className='bg-white shadow-2 border border-stroke'>
                <div className='p-4 border-b border-b-stroke'>
                    <h2 className='text-xl font-poppins font-medium text-primary'>{t("title1")}</h2>
                </div>
                <div className='p-4'>
                    <div>
                        <DealerAccountSettings txt={acTxt} />
                    </div>
                </div>
            </div>
            {/* ----------------password change section---------------- */}
            <div className='bg-white shadow-2 border border-stroke mt-8'>
                <div className='p-4 border-b border-b-stroke'>
                    <h2 className='text-xl font-poppins font-medium text-primary'>{t("title2")}</h2>
                </div>
                <div className='p-5'>
                    <FormChangePassword txt={passTxt}/>
                </div>
            </div>


        </div>
    );
};

export default Page;
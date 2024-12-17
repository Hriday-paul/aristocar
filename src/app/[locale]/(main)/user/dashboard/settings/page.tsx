import AccountSettings from '@/components/shared/Settings/AccountSettings/AccountSettings';
import ProfilePhotoUpdate from '@/components/shared/Settings/AccountSettings/ProfilePhotoUpdate';
import FormChangePassword from '@/components/shared/Settings/PasswordChange/FormChangePassword';
import React from 'react';

const page = () => {
    return (
        <div>
            {/* ------------account profile setting section---------------- */}
            <div className='bg-white shadow-2 border border-stroke'>
                <div className='p-4 border-b border-b-stroke'>
                    <h2 className='text-xl font-poppins font-medium text-primary'>Account Settings</h2>
                </div>
                <div className='p-4'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5 md:gap-y-0 items-center">
                        <AccountSettings />
                        <ProfilePhotoUpdate />
                    </div>
                </div>
            </div>
            {/* ----------------password change section---------------- */}
            <div className='bg-white shadow-2 border border-stroke mt-8'>
                <div className='p-4 border-b border-b-stroke'>
                    <h2 className='text-xl font-poppins font-medium text-primary'>Change Password</h2>
                </div>
                <div className='p-5'>
                    <FormChangePassword />
                </div>
            </div>


        </div>
    );
};

export default page;
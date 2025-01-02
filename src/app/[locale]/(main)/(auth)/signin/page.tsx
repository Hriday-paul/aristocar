import SigninForm from '@/components/custom/SigninForm/SigninForm';
import AuthCarDesign from '@/components/shared/AuthCarDesign/AuthCarDesign';
import React from 'react';

const Signing = () => {
    return (
        <div className='bg-[#F8FAFC]'>
            <div className='container py-20 md:py-32 xl:py-40 grid grid-cols-1 lg:grid-cols-2 gap-x-8 items-center'>
                <AuthCarDesign />
                <SigninForm />
            </div>
        </div>
    );
};

export default Signing;
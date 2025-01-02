import SignUpForm from '@/components/custom/SignUpForm/SignUpForm';
import AuthCarDesign from '@/components/shared/AuthCarDesign/AuthCarDesign';
import React from 'react';

const Signup = () => {
    return (
        <div className='bg-[#F8FAFC]'>
            <div className='container py-16 md:py-16 xl:py-20 grid grid-cols-1 lg:grid-cols-2 gap-x-8 items-center'>
                <AuthCarDesign />
                <SignUpForm />
            </div>
        </div>
    );
};

export default Signup;
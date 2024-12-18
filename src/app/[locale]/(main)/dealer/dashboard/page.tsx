import HomeContact from '@/components/Dashboard/DealerDashboard/HomeContact';
import HandlePagination from '@/components/shared/CustomPagination/HandlePagination';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-x-5 gap-y-5 md:gap-y-0'>
                <div className='md:col-span-2 bg-[#232323] w-full flex flex-col justify-center items-center py-12 px-5'>
                    <Image src={'https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg'} height={500} width={500} alt={'user photo'} className='rounded-full w-28 h-auto' />
                    <h3 className='text-center text-secondary font-satoshi font-semibold text-2xl mt-2'>Dianne Russell</h3>
                    <p className='font-satoshi text-secondary font-medium my-0.5'>Dealer</p>
                    <Link href={'/dealer/dashboard/settings'} className='text-lg font-satoshi text-secondary font-medium underline underline-offset-4 decoration-1'>Edit Profile</Link>
                </div>
                <div className='md:col-span-3 bg-[#232323] w-full flex flex-col justify-center items-center py-12 px-5'>
                    <section className='space-y-4'>
                        <p className='text-secondary font-satoshi font-medium text-lg'>My Address</p>
                        <p className='text-secondary font-satoshi font-medium text-lg'>4140 Parker Rd. Allentown, New Mexico 31134</p>
                        <p className='text-secondary font-satoshi font-medium text-lg'>dainne.ressell@gmail.com</p>
                        <p className='text-secondary font-satoshi font-medium text-lg'>(671) 555-0110</p>
                        <Link href={'/dealer/dashboard/settings'} className='text-lg font-satoshi text-secondary font-medium underline underline-offset-4 decoration-1'>Edit Address</Link>
                    </section>
                </div>
            </div>

            <HomeContact />

            <HandlePagination />
        </div>
    );
};

export default page;
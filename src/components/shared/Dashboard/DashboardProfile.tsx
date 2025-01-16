'use client'
import { useGetUserProfileQuery } from '@/redux/features/AuthApi';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SmError from './SmError';
import { Skeleton } from '@/components/ui/skeleton';

const DashboardProfile = ({ txt }: { txt: { [key: string]: string } }) => {
    const { isLoading, isSuccess, isError, data } = useGetUserProfileQuery({}, { refetchOnMountOrArgChange: true });

    return (
        <div>
            {isLoading ?
                <div className='flex flex-col md:flex-row gap-5 items-center'>
                    <Skeleton className="h-80 w-full rounded-xl" />
                    <Skeleton className="h-80 w-full rounded-xl" />
                </div> :
                isError ? <SmError /> :
                    isSuccess ?
                        <div className='grid grid-cols-1 md:grid-cols-5 gap-x-5 gap-y-5 md:gap-y-0'>
                            <div className='md:col-span-2 bg-[#232323] w-full flex flex-col justify-center items-center py-12 px-5'>
                                <Image src={data?.data?.image ?? 'https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg'} height={500} width={500} alt={'user photo'} className='rounded-full w-28 h-28 object-cover' />
                                <h3 className='text-center text-secondary font-satoshi font-semibold text-2xl mt-2 capitalize'>{data?.data?.name}</h3>
                                <p className='font-satoshi text-secondary font-medium my-0.5 capitalize'>{data?.data?.role}</p>
                                <Link href={`/${data?.data?.role}/dashboard/settings`} className='text-lg font-satoshi text-secondary font-medium underline underline-offset-4 decoration-1'>{txt?.edit_profile}</Link>
                            </div>

                            <div className='md:col-span-3 bg-[#232323] w-full flex flex-col justify-center items-center py-12 px-5'>
                                <section className='space-y-4'>
                                    <p className='text-secondary font-satoshi font-medium text-lg'>{txt?.my_address}</p>
                                    <p className='text-secondary font-satoshi font-medium text-lg'>{data?.data?.address || '-----'}</p>
                                    <p className='text-secondary font-satoshi font-medium text-lg'>{data?.data?.email}</p>
                                    <p className='text-secondary font-satoshi font-medium text-lg'>{data?.data?.phoneNumber || "-----"}</p>
                                    <Link href={`/${data?.data?.role}/dashboard/settings`} className='text-lg font-satoshi text-secondary font-medium underline underline-offset-4 decoration-1'>{txt?.edit_address}</Link>
                                </section>
                            </div>
                        </div> : <></>
            }
        </div>
    );
};

export default DashboardProfile;
'use client'
import SmError from '@/components/shared/Dashboard/SmError';
import { Skeleton } from '@/components/ui/skeleton';
import { useRunningPackagesQuery } from '@/redux/features/DealerApi';
import React from 'react';
import moment from 'moment'

const RunningSubscription = ({ txt }: { txt: { [key: string]: string } }) => {
    const { isLoading, isSuccess, data, isError } = useRunningPackagesQuery();

    return (
        <div>
            {
                isLoading ? <div className='flex flex-col gap-5 items-center'>
                    <Skeleton className="h-5 w-40 mx-auto rounded" />
                    <Skeleton className="h-5 w-96 rounded mx-auto" />
                    <div className='flex flex-row gap-x-5 items-center w-full'>
                        <Skeleton className="h-10 w-full rounded" />
                        <Skeleton className="h-10 w-full rounded" />
                    </div>
                </div> : isError ? <SmError /> : isSuccess ?
                    data?.data?.length > 0 ? <div>
                        <h2 className='text-2xl font-lastica text-center text-primary pb-2'>{txt?.title}</h2>
                        <p className='text-sm font-satoshi text-primary w-2/3 mx-auto text-center'>{txt?.sub_title}</p>
                        <div className='my-5 lg:my-8 flex flex-row gap-x-3 justify-center items-center'>
                            {/* <section className='flex flex-row gap-x-1 items-center'>
                                <span className='h-7 w-7 bg-zinc-300 rounded-full'></span>
                                <p className='text-base font-poppins'>Basic</p>
                            </section> */}
                            <section className='flex flex-row gap-x-1 items-center'>
                                <span className='h-7 w-7 bg-success rounded-full'></span>
                                <p className='text-base font-poppins'>{data?.data[0]?.package?.shortTitle}</p>
                            </section>
                            {/* <section className='flex flex-row gap-x-1 items-center'>
                                <span className='h-7 w-7 bg-zinc-300 rounded-full'></span>
                                <p className='text-base font-poppins'>Pro</p>
                            </section> */}
                        </div>
                        <div className='mb-5 flex flex-row gap-x-3 justify-center items-center'>
                            <p className='text-sm md:text-base font-poppins bg-success text-white px-7 md:px-10 py-2 '>Active – {moment(data?.data[0]?.expiredAt).diff(moment(), 'days') + ' days left.'}</p>
                            <p className='text-sm md:text-base font-poppins bg-danger text-white px-6 py-2 '>Expired – {moment(data?.data[0]?.expiredAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                        </div>
                    </div>
                        :
                        <h2 className='font-poppins text-lg text-danger text-center'>You have not any running subscription</h2>
                    :
                    <></>
            }
        </div>
    );
};

export default RunningSubscription;
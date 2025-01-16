'use client'
import { usePackagesQuery } from '@/redux/features/DealerApi';
import React from 'react';
import BillingCard from './BillingCard';
import { Skeleton } from '@/components/ui/skeleton';
import SmError from '@/components/shared/Dashboard/SmError';

const BillCardsRoot = ({btnTxt}:{btnTxt : string}) => {
    const { isLoading, isError, isSuccess, data } = usePackagesQuery()
    return (
        <div className='w-full'>
            <div className="my-5 lg:my-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
                {
                    isLoading ? <div className='col-span-1 md:columns-2 lg:col-span-3 w-full'>
                        <Skeleton className="h-80 w-full rounded" />
                    </div> : isError ? <SmError /> : isSuccess ? data?.data?.data?.map(card => {
                        return <BillingCard key={card?._id} cardData={card} btnTxt={btnTxt}/>
                    }) : <></>
                }
            </div>
        </div>
    );
};

export default BillCardsRoot;
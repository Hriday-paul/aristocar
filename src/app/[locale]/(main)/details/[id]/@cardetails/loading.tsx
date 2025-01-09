import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const loading = () => {
    return (
        <div className='container'>
            <div className="flex flex-col space-y-3">
                <div className='flex flex-row gap-x-4 items-center my-5'>
                    <Skeleton className="h-40 lg:h-52 hidden md:block md:w-1/3 mx-auto rounded" />
                    <Skeleton className="h-48 w-full lg:h-60 md:w-1/3 mx-auto rounded" />
                    <Skeleton className="h-40 lg:h-52 hidden md:block md:w-1/3 mx-auto rounded" />
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 md:gap-y-5 gap-x-5 my-5 lg:my-7'>
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                </div>
                <div className="py-5 lg:py-8 space-y-3">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-3/4" />
                </div>
            </div>
        </div>
    );
};

export default loading;
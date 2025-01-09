'use client'
import React, { useState } from 'react';
import AriaChart_dlr from './AriaChart_dlr';
import { useDealerCarViewsQuery } from '@/redux/features/DealerApi';
import SmError from '@/components/shared/Dashboard/SmError';
import { Skeleton } from '@/components/ui/skeleton';

const ChartRoot = () => {
    const [year, setYear] = useState<string | number>(new Date().getFullYear());
    const { isLoading, isError, data, isSuccess } = useDealerCarViewsQuery({ year });

    return (
        <div>
            {
                isLoading ? <Skeleton className="h-80 w-full rounded"/> : isError ? <SmError /> : isSuccess ? <AriaChart_dlr year={year} setyear={setYear} data={data?.data} /> : <></>
            }
        </div>
    );
};

export default ChartRoot;
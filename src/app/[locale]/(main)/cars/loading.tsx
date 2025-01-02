import { SkeletonCarCard } from '@/components/shared/CarCard/SkeletonCarCard';
import React from 'react';

const loading = () => {
    return (
        <div className='container py-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8 items-center my-10'>
                <SkeletonCarCard />
                <SkeletonCarCard />
                <SkeletonCarCard />
                <SkeletonCarCard />
            </div>
        </div>
    );
};

export default loading;
'use client'
import { useDealer_listingsQuery } from '@/redux/features/DealerApi';
import React from 'react';
import AddCarListing from './AddCarListing/AddCarListing';
import DealerListingCar from './DealerListingCar';
import SmError from '@/components/shared/Dashboard/SmError';
import { Skeleton } from '@/components/ui/skeleton';
import { SkeletonCarCard } from '@/components/shared/CarCard/SkeletonCarCard';

const CarLists = () => {
    const { isLoading, isError, isSuccess, data } = useDealer_listingsQuery()

    return (
        <div>
            {
                isLoading ?
                    <div>
                        <div className='flex flex-col md:flex-row gap-5 items-center'>
                            <Skeleton className="h-24 w-full rounded" />
                            <Skeleton className="h-24 w-full rounded" />
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-4'>
                            <SkeletonCarCard />
                            <SkeletonCarCard />
                            <SkeletonCarCard />
                        </div>
                    </div> :
                    isError ? <SmError /> :
                        isSuccess ?
                            <div>
                                {/* //----------------listing count-------------------- */}
                                <div className="grid grid-cols-2 gap-5 w-full min-w-0">
                                    <div className="flex flex-col px-6 py-2 bg-white shadow-2 rounded overflow-hidden border border-stroke">
                                        <div className="flex flex-col items-center space-y-2 py-3">
                                            <div className="text-3xl md:text-6xl font-bold tracking-tight leading-none text-primary font-poppins">{data?.data?.count}</div>
                                            <div className="text-lg font-medium text-primary font-poppins">In use</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col px-6 py-2 bg-white shadow-2 rounded overflow-hidden border border-stroke">
                                        <div className="flex flex-col items-center space-y-2 py-3">
                                            <div className="text-3xl md:text-6xl font-bold tracking-tight leading-none text-primary font-poppins">9</div>
                                            <div className="text-lg font-medium text-primary font-poppins">Available</div>
                                        </div>
                                    </div>
                                </div>

                                {/* ----------------add listing ------------------ */}
                                <div className='my-5'>
                                    <AddCarListing>
                                        <div className='bg-primary text-secondary py-2.5 text-center w-full rounded-sm font-poppins text-base hover:bg-opacity-85 duration-200'>Add Listing</div>
                                    </AddCarListing>
                                </div>


                                <div>
                                    <h4 className='font-poppins text-2xl text-primary'>Car List</h4>
                                    {/* ------------------cars------------------ */}
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-3'>
                                        {
                                            data?.data?.allCars?.map(car => {
                                                return <DealerListingCar key={car?._id} car={car} />
                                            })
                                        }
                                    </div>
                                </div>
                            </div> : <></>
            }

        </div>
    )
};

export default CarLists;
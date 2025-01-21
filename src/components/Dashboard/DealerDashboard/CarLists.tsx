'use client'
import { useDealer_listingsQuery } from '@/redux/features/DealerApi';
import React from 'react';
import DealerListingCar from './DealerListingCar';
import SmError from '@/components/shared/Dashboard/SmError';
import { Skeleton } from '@/components/ui/skeleton';
import { SkeletonCarCard } from '@/components/shared/CarCard/SkeletonCarCard';
import AddSheetCarListing from './AddCarListing/AddSheetCarListing';
import Image from 'next/image';
import emptyDataImg from '../../../../public/empty_data.jpg'

const CarLists = ({ txt, formTxt, cardTxt }: { txt: { [key: string]: string }, formTxt: { [key: string]: string }, cardTxt: { [key: string]: string } }) => {
    const { isLoading, isError, isSuccess, data } = useDealer_listingsQuery({}, { refetchOnMountOrArgChange: true })

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
                                            <div className="text-3xl md:text-6xl font-bold tracking-tight leading-none text-primary font-poppins">{data?.data?.createdCarCount}</div>
                                            <div className="text-lg font-medium text-primary font-poppins">{txt?.in_use}</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col px-6 py-2 bg-white shadow-2 rounded overflow-hidden border border-stroke">
                                        <div className="flex flex-col items-center space-y-2 py-3">
                                            <div className="text-3xl md:text-6xl font-bold tracking-tight leading-none text-primary font-poppins">{data?.data?.carsRemaining}</div>
                                            <div className="text-lg font-medium text-primary font-poppins">{txt?.available}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* ----------------add listing ------------------ */}
                                <div className='my-5'>
                                    <AddSheetCarListing formTxt={formTxt}>
                                        <button disabled={data?.data?.carsRemaining <= 0} className='bg-primary text-secondary py-2.5 text-center w-full rounded-sm font-poppins text-base hover:bg-opacity-85 duration-200 disabled:cursor-not-allowed disabled:opacity-75'>{txt.add_listing}</button>
                                    </AddSheetCarListing>
                                </div>


                                <div>
                                    <h4 className='font-poppins text-2xl text-primary'>{txt?.car_list}</h4>
                                    {/* ------------------cars------------------ */}
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-3'>
                                        {
                                            data?.data?.allCars?.map(car => {
                                                return <DealerListingCar key={car?._id} car={car} formTxt={formTxt} cardTxt={cardTxt} />
                                            })
                                        }
                                    </div>
                                    {
                                        data?.data?.allCars?.length <= 0 && <section className='md:col-span-2 lg:col-span-3 min-h-[calc(30vh)] flex flex-col items-center justify-center'>
                                            <Image src={emptyDataImg} className='h-40 w-auto mx-auto' alt='empty data' />
                                            <h5 className='text-xl font-poppins text-center'>Empty data</h5>
                                        </section>
                                    }
                                </div>
                            </div> : <></>
            }

        </div>
    )
};

export default CarLists;
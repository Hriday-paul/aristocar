'use client'
import { RootState } from '@/redux/store';
import React from 'react';
import { useSelector } from 'react-redux';
import WhishListCarCard from './WhishListCarCard';
import Image from 'next/image';
import emptyDataImg from '../../../../../public/empty_data.jpg'

const Whishlist = () => {
    const { cars } = useSelector((state: RootState) => state.cartSlice);

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-3'>
                {
                    cars?.map(car => {
                        return <WhishListCarCard key={car?._id} car={car} />
                    })
                }
                {
                    cars?.length <= 0 && <section className='md:col-span-2 lg:col-span-3 min-h-[calc(20vh)] flex flex-col items-center justify-center'>
                        <Image src={emptyDataImg} className='h-40 w-auto mx-auto' alt='empty data' />
                        <h5 className='text-xl font-poppins text-center'>Data Not Found</h5>
                    </section>
                }
            </div>
        </div>
    );
};

export default Whishlist;
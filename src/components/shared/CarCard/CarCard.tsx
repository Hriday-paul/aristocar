import { carType } from '@/app/[locale]/(main)/cars/page';
import { carDetailsI } from '@/app/[locale]/(main)/details/[id]/@cardetails/page';
import { car_card_image_blur, car_card_image_err } from '@/utils/Default';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsCurrencyEuro } from 'react-icons/bs';


const CarCard = React.memo(({ car, txt }: { car: carDetailsI, txt: { [key: string]: string } }) => {

    return (
        <div className='shadow-1 overflow-hidden group border border-stroke relative'>
            {/* --------------image-------------- */}
            <Link href={`/details/${car?._id}`}>
                <div className='relative h-56 w-full'>
                    <Image src={car?.images[0]?.url || car_card_image_err} fill alt="Aristocar car image" placeholder='blur'
                        blurDataURL={car_card_image_blur} className='object-cover group-hover:scale-105 duration-500' />
                </div>
            </Link>
            {car?.isMostWanted && <span className='bg-green-500 text-white rounded-full px-3 py-1.5 absolute left-3 top-3 text-xs'>Most Wanted</span>}
            {/* ----------content------------ */}
            <div className='px-6 py-2 bg-secondary'>
                <Link href={`/details/${car?._id}`}>
                    <h5 className='text-[22px] font-satoshi font-extrabold text-primary line-clamp-1'>{car?.name}</h5>
                    {/* <p className='text-[16px] font-satoshi font-medium line-clamp-1 mt-1.5 mb-2.5'>{car?.details}</p> */}
                </Link>

                <div className='border-y border-stroke py-2.5 flex flex-row gap-x-2 justify-between my-2'>
                    <div>
                        <small className='text-sm font-satoshi font-semibold'>{txt?.brand}</small>
                        <p className='text-[16px] font-satoshi'>{car?.brand?.brandName}</p>
                    </div>
                    <div>
                        <small className='text-sm font-satoshi font-semibold'>{txt?.model}</small>
                        <p className='text-[16px] font-satoshi'>{car?.model?.modelName}</p>
                    </div>
                    <div>
                        <small className='text-sm font-satoshi font-semibold'>{txt?.drive}</small>
                        <p className='text-[16px] font-satoshi'>{car?.Drive}</p>
                    </div>
                    {/* <div>
                        <small className='text-sm font-satoshi font-semibold'>{txt?.mileage}</small>
                        <p className='text-[16px] font-satoshi'>{car?.mileage}</p>
                    </div> */}

                    <div>
                        <small className='text-sm font-satoshi font-semibold'>{txt?.power}</small>
                        <p className='text-[16px] font-satoshi'>{car?.power} {car?.powerUnit}</p>
                    </div>
                </div>

                <div className='my-2.5 flex justify-between items-center'>
                    <h6 className='text-xl font-satoshi font-semibold flex flex-row items-center '><BsCurrencyEuro />{car?.price}</h6>
                    <Link href={`/details/${car?._id}`} className='font-satoshi font-normal text-lg underline underline-offset-2'>{txt?.view_details}</Link>
                </div>

            </div>

        </div>
    );
});

CarCard.displayName = 'CarCard'

export default CarCard;
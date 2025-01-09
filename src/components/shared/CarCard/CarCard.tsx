import { carType } from '@/app/[locale]/(main)/cars/page';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsCurrencyEuro } from 'react-icons/bs';


const CarCard = React.memo(async ({ car }: { car: carType }) => {

    return (
        <div className='shadow-1 overflow-hidden group border border-stroke'>
            {/* --------------image-------------- */}
            <Link href={`/details/${car?._id}`}>
                <div className='relative h-56 w-full'>
                    <Image src={car?.images[0]?.url || "https://cdn.presslabs.com/wp-content/uploads/2018/10/upload-error.png"} fill alt="Aristocar car image" placeholder='blur'
                        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWnpaaXiDhOAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=' className='object-cover group-hover:scale-105 duration-500' />
                </div>
            </Link>
            {/* ----------content------------ */}
            <div className='px-6 py-2 bg-secondary'>
                <Link href={`/details/${car?._id}`}>
                    <h5 className='text-[22px] font-satoshi font-extrabold text-primary line-clamp-1'>{car?.name}</h5>
                    <p className='text-[16px] font-satoshi font-medium line-clamp-1 mt-1.5 mb-2.5'>{car?.details}</p>
                </Link>

                <div className='border-y border-stroke py-2.5 flex flex-row gap-x-2 justify-between my-2'>
                    <div>
                        <small className='text-sm font-satoshi font-semibold'>Brand</small>
                        <p className='text-[16px] font-satoshi'>{car?.brand?.brandName}</p>
                    </div>
                    <div>
                        <small className='text-sm font-satoshi font-semibold'>Model</small>
                        <p className='text-[16px] font-satoshi'>{car?.model?.modelName}</p>
                    </div>
                    <div>
                        <small className='text-sm font-satoshi font-semibold'>Year</small>
                        <p className='text-[16px] font-satoshi'>{car?.YearOfManufacture}</p>
                    </div>
                    <div>
                        <small className='text-sm font-satoshi font-semibold'>Kilometers</small>
                        <p className='text-[16px] font-satoshi'>{car?.mileage} {car?.mileageUnit}</p>
                    </div>
                </div>

                <div className='my-2.5 flex justify-between items-center'>
                    <h6 className='text-xl font-satoshi font-semibold flex flex-row items-center '><BsCurrencyEuro />{car?.price}</h6>
                    <Link href={`/details/${car?._id}`} className='font-satoshi font-normal text-lg underline underline-offset-2'>View Details</Link>
                </div>

            </div>

        </div>
    );
});

CarCard.displayName = 'CarCard'

export default CarCard;
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import { getPlaiceholder } from "plaiceholder";


type car = {
    img: string, name: string, details: string, make: number, model: string, price: number, register: string, km: number
}

const CarCard = React.memo(async({ car }: { car: car }) => {

    // const buffer = await fetch(car?.img).then(async (res) =>
    //     Buffer.from(await res.arrayBuffer())
    //   );
     
    //   const { base64 } = await getPlaiceholder(buffer);

    return (
        <div className=' border border-stroke shadow overflow-hidden'>
            {/* --------------image-------------- */}
            <Link href='/'>
                <div className='relative h-56 w-full'>
                    <Image src={car?.img} fill alt="Aristocar car" className='object-cover hover:scale-105 duration-500' />
                </div>
            </Link>
            {/* ----------content------------ */}
            <div className='px-6 py-2'>
                <Link href='/'>
                    <h5 className='text-[22px] font-satoshi font-extrabold text-primary'>{car?.name}</h5>
                    <p className='text-[16px] font-satoshi font-medium line-clamp-1 mt-1.5 mb-2.5'>{car?.details}</p>
                </Link>

                <div className='border-y border-stroke py-2.5 flex flex-row gap-x-2 justify-between my-2'>
                    <div>
                        <small className='text-sm font-satoshi font-semibold'>Make</small>
                        <p className='text-[16px] font-satoshi'>{car?.make}</p>
                    </div>
                    <div>
                        <small className='text-sm font-satoshi font-semibold'>Model</small>
                        <p className='text-[16px] font-satoshi'>{car?.model}</p>
                    </div>
                    <div>
                        <small className='text-sm font-satoshi font-semibold'>Registration from</small>
                        <p className='text-[16px] font-satoshi'>{car?.register}</p>
                    </div>
                    <div>
                        <small className='text-sm font-satoshi font-semibold'>Kilometers</small>
                        <p className='text-[16px] font-satoshi'>{car?.km} KM</p>
                    </div>
                </div>

                <div className='my-2.5 flex justify-between items-center'>
                    <h6 className='text-xl font-satoshi font-semibold'>${car?.price}</h6>
                    <Link href='/' className='font-satoshi font-normal text-lg underline underline-offset-2'>View price</Link>
                </div>

            </div>

        </div>
    );
});

CarCard.displayName = 'CarCard'

export default CarCard;
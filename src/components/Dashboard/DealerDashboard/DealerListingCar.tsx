'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback } from 'react';
import { CiEdit } from 'react-icons/ci';
import { AiOutlineDelete } from "react-icons/ai";
import Swal from 'sweetalert2'

type car = {
    img: string, name: string, details: string, make: number, model: string, price: number, register: string, km: number, id: number
}

const DealerListingCar = ({ car }: { car: car }) => {

    const handleDltCar = useCallback((id: number) => {
        Swal.fire({
            title: "Are you sure",
            text: "Want to delete this car ?",
            customClass: {
                title: "text-2xl text-primary font-poppins",
                cancelButton: "bg-danger text-white",
            },
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#38CB6E",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your care has been deleted.",
                    icon: "success"
                });
            }
        });
    }, [])



    return (
        <div className='shadow overflow-hidden group'>
            {/* --------------image-------------- */}
            <Link href='/details/4'>
                <div className='relative h-56 w-full'>
                    <Image src={car?.img} fill alt="Aristocar car" placeholder='blur' blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWnpaaXiDhOAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=' className='object-cover group-hover:scale-105 duration-500' />
                </div>
            </Link>
            {/* ----------content------------ */}
            <div className='px-6 py-2 bg-secondary'>
                <Link href='/details/4'>
                    <h5 className='text-[22px] font-satoshi font-extrabold text-primary line-clamp-1'>{car?.name}</h5>
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
                    <section className='flex flex-row gap-x-2 items-center'>
                        <button onClick={() => handleDltCar(car?.id)} className='flex flex-row gap-x-1 items-center'>
                            <AiOutlineDelete className='text-lg text-danger' />
                            <span className='text-danger font-poppins'>Delete</span>
                        </button>
                        <button className='flex flex-row gap-x-1 items-center'>
                            <CiEdit className='text-lg text-primary' />
                            <span className='text-primary font-poppins'>Edit</span>
                        </button>
                    </section>

                </div>

            </div>

        </div>
    );
};

export default DealerListingCar;
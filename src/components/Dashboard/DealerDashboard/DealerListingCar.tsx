'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback } from 'react';
import { CiEdit } from 'react-icons/ci';
import { AiOutlineDelete } from "react-icons/ai";
import Swal from 'sweetalert2'
import { IoEyeOutline } from 'react-icons/io5';
import { dealerCarType, useDeleteCarMutation } from '@/redux/features/DealerApi';
import { toast } from 'sonner';
import { ImSpinner2 } from 'react-icons/im';
import EditSheet from './AddCarListing/EditSheet';
import { car_card_image_blur, car_card_image_err } from '@/utils/Default';
import { BsCurrencyEuro } from 'react-icons/bs';

const DealerListingCar = ({ car, formTxt, cardTxt }: { car: dealerCarType, formTxt: { [key: string]: string }, cardTxt: { [key: string]: string } }) => {
    const [postDeleteCar, { isLoading }] = useDeleteCarMutation();

    const handleDltCar = useCallback((id: string) => {

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
        }).then(async (result) => {
            if (result.isConfirmed) {
                const loading = toast.loading('Car delete loading...', {position : "top-center"})
                try {
                    await postDeleteCar({ id }).unwrap();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your car has been deleted successfully.",
                        icon: "success"
                    });

                } catch (err: any) {
                    toast.error(err?.data?.message || 'Something went wrong, try again');
                } finally {
                    toast.dismiss(loading)
                }
            }
        });
    }, [postDeleteCar])

    return (
        <div className='shadow overflow-hidden group relative'>
            {/* --------------image-------------- */}
            <Link href={`/details/${car?._id}`}>
                <div className='relative h-56 w-full'>
                    <Image src={car?.images[0]?.url || car_card_image_err} fill alt="Aristocar car" placeholder='blur' blurDataURL={car_card_image_blur} className='object-cover group-hover:scale-105 duration-500' />
                </div>
            </Link>
            {car?.isMostWanted && <span className='bg-green-500 text-white rounded-full px-3 py-1.5 absolute left-3 top-3 text-xs'>Most Wanted</span>}
            {/* ----------content------------ */}
            <div className='px-6 py-2 bg-secondary'>
                <Link href={`/details/${car?._id}`}>
                    <h5 className='text-[22px] font-satoshi font-extrabold text-primary line-clamp-1'>{car?.name}</h5>
                    <p className='text-[16px] font-satoshi font-medium line-clamp-1 mt-1.5 mb-2.5'>{car?.details}</p>
                </Link>

                <div className='border-y border-stroke py-2.5 flex flex-row gap-x-2 justify-between my-2'>
                    <div>
                        <small className='text-sm font-satoshi font-semibold'>{cardTxt?.brand}</small>
                        <p className='text-[16px] font-satoshi'>{car?.brand?.brandName}</p>
                    </div>
                    <div>
                        <small className='text-sm font-satoshi font-semibold'>{cardTxt?.model}</small>
                        <p className='text-[16px] font-satoshi'>{car?.model?.modelName}</p>
                    </div>
                    <div>
                        <small className='text-sm font-satoshi font-semibold'>{cardTxt?.drive}</small>
                        <p className='text-[16px] font-satoshi'>{car?.Drive}</p>
                    </div>
                    <div>
                        <small className='text-sm font-satoshi font-semibold'>{cardTxt?.mileage}</small>
                        <p className='text-[16px] font-satoshi'>{car?.mileage}</p>
                    </div>
                </div>

                <div className='my-2.5 flex justify-between items-center'>
                    <h6 className='text-xl font-satoshi font-semibold flex flex-row items-center '><BsCurrencyEuro />{car?.price}</h6>
                    <section className='flex flex-row gap-x-2 items-center'>
                        <span className='flex flex-row gap-x-1 items-center'>
                            <IoEyeOutline className='text-lg text-primary' />
                            <span className='text-primary font-poppins'>{car?.view_count}</span>
                        </span>
                        <button onClick={() => handleDltCar(car?._id)} className='flex flex-row gap-x-1 items-center'>
                            <AiOutlineDelete className='text-lg text-danger' />
                            {isLoading ? < ImSpinner2 className="text-sm text-white animate-spin" /> :
                                <span className='text-danger font-poppins'>{formTxt?.delete}</span>}
                        </button>

                        <EditSheet car={car} formTxt={formTxt}>
                            <button className='flex flex-row gap-x-1 items-center'>
                                <CiEdit className='text-lg text-primary' />
                                <span className='text-primary font-poppins'>{formTxt?.edit}</span>
                            </button>
                        </EditSheet>

                    </section>

                </div>

            </div>

        </div>
    );
};

export default DealerListingCar;
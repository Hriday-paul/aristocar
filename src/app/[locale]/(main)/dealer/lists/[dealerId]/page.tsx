import DellerContactForm from '@/components/custom/CarDetails/DellerContactForm';
import CarCard from '@/components/shared/CarCard/CarCard';
import HandlePagination from '@/components/shared/CustomPagination/HandlePagination';
import UseGetDealersAllCars from '@/Hooks/UseGetDealersAllCars';
import Image from 'next/image';
import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { IoMailOutline } from 'react-icons/io5';
import { carDetailsI } from '../../../details/[id]/@cardetails/page';

const page = async ({ params }: { params: Promise<{ dealerId: string }> }) => {

    const { dealerId } = await params;

    const data = await UseGetDealersAllCars(dealerId) as { data: { car: carDetailsI[] } };

    return (
        <div className='bg-white'>
            <div className='container py-5 md:py-8 lg:py-10'>
                <div>
                    <div className='flex flex-row gap-x-4 items-center'>
                        <Image src={data?.data?.car[0]?.creatorID?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} height={100} width={100} className='h-10 w-auto object-cover' alt="deller image" />
                        <h2 className='font-poppins font-medium text-base'>{data?.data?.car[0]?.creatorID?.name}</h2>
                    </div>
                    {/* <p className='text-base font-poppins text-[#000000B2] my-6'>lorem ipsum dolor sit amet consecteur lorem ipsum dolor sit amet consecteurlorem ipsumlore.</p> */}
                    <section className='flex flex-row gap-x-2 items-center my-6'>
                        <CiLocationOn className='text-2xl text-primary' />
                        <p className='text-base font-poppins text-[#000000B2]'>{data?.data?.car[0]?.creatorID?.address}</p>
                    </section>
                    <section className='flex flex-row gap-x-2 items-center my-6'>
                        <BsTelephone className='text-2xl text-primary' />
                        <p className='text-base font-poppins text-[#000000B2]'>{data?.data?.car[0]?.creatorID?.phoneNumber}</p>
                    </section>
                    <section className='flex flex-row gap-x-2 items-center my-6'>
                        <IoMailOutline className='text-2xl text-primary' />
                        <p className='text-base font-poppins text-[#000000B2]'>{data?.data?.car[0]?.creatorID?.phoneNumber}</p>
                    </section>
                </div>

                {/* ----------------listings------------------- */}
                <div className='mt-16'>
                    <h5 className='font-lastica text-lg text-primary underline underline-offset-[16px] decoration-primary border-b border-b-strokeinput pb-2 mb-8'>Listings</h5>
                    <h6 className='font-poppins text-primary text-lg font-medium'>{data?.data?.car?.length} Listings for sale</h6>


                    {/* ------------------cars------------------ */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8 items-center my-5'>
                        {
                            data?.data?.car?.map(car => {
                                return <CarCard key={car?._id} car={car} />
                            })
                        }
                    </div>

                    <div className='mt-8 xl:mt-10'>
                        <DellerContactForm />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default page;
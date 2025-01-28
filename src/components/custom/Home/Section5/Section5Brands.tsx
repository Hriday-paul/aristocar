import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowRoundUp } from 'react-icons/io';
import { getTranslations } from 'next-intl/server';
import { car_card_image_blur } from '@/utils/Default';
import Title from './Title';

const Section5Brands = async ({ homebrands }: { homebrands: Promise<{ data: { _id: string, brandName: string, image: string, isHome: boolean }[] }> }) => {

    const brands = await homebrands;

    const t = await getTranslations('home.section4');

    return (
        <div className='bg-black'>
            <div className='container p-5 py-12 md:py-14 lg:py-16 xl:py-20'>
                <div className='flex flex-col lg:flex-row justify-between items-start space-y-3'>
                    {/* <h3 className='text-3xl md:text-4xl xl:text-5xl font-lastica uppercase text-white'>{t("title")}</h3> */}
                    <Title text={t("title")} />
                    <p className='text-white font-poppins text-xs md:text-sm max-w-md text-left lg:text-right'>{t("details")}</p>
                </div>
                <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-5 items-center my-5 md:my-8 lg:my-12 xl:my-16 px-5 md:px-8 lg:px-10 xl:px-20'>
                    {
                        brands?.data.map(brand => {
                            return <Link href={`/cars?brand=${brand?._id}`} key={brand?._id}>
                                <Image src={brand?.image} alt='brand-image' className='w-full h-auto mx-auto' width={200} height={200} placeholder='blur' blurDataURL={car_card_image_blur} />
                            </Link>
                        })
                    }
                </div>

                <div className='flex flex-row justify-end gap-x-5 items-center'>

                    <Link href={'/cars?most_wanted=true'} className="relative px-4 py-2.5 lg:px-5 xl:px-6 lg:py-3 xl:py-4 overflow-hidden font-medium text-gray-600 bg-[#F8FAFC] group border border-stroke">
                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-black group-hover:w-full ease"></span>
                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-black group-hover:w-full ease"></span>
                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-black group-hover:h-full ease"></span>
                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-black group-hover:h-full ease"></span>
                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-black opacity-0 group-hover:opacity-100"></span>
                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease font-poppins flex flex-row gap-x-1.5 items-center">{t("btn_1")} </span>
                    </Link>

                    <Link href="/cars" className="px-4 py-2.5 lg:px-5 xl:px-6 lg:py-3 xl:py-4 m-1 overflow-hidden relative group cursor-pointer border font-medium black text-white">
                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative text-white transition duration-300 group-hover:text-black ease flex flex-row gap-x-1.5 items-center">{t("btn_2")} <IoIosArrowRoundUp className='text-2xl rotate-45' /></span>
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default Section5Brands;
import React from 'react';
import mostWantedCar from "../../../../../public/home/most-wanted-car.png"
import Image from 'next/image';
import MostTxt from './MostTxt';
import WantedTxt from './WantedTxt';
import Link from 'next/link';
import moreText from "../../../../../public/home/mstbar.png"
const Section4 = () => {
    return (
        <div className='container'>
            <div className='pt-5 md:pt-14 lg:pt-20 pb-14 md:pb-20 lg:pb-40 w-full lg:w-10/12 xl:w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-y-0 lg:gap-x-8'>
                <div className="relative">
                    <Link href='/details/3'>
                        <Image src={mostWantedCar} placeholder='blur' className='w-2/3 md:w-1/2 lg:w-5/6 h-auto mx-auto lg:mx-0 lg:ml-auto' alt='most wanted car' />
                    </Link>

                    <MostTxt />

                    <WantedTxt />

                </div>
                <div className=''>
                    <p className='text-base text-zinc-600 font-satoshi'>
                        This iconic supercar combines breathtaking design with unparalleled performance. Equipped with a naturally aspirated 6.5L V12 engine, the Aventador delivers an astonishing 770 horsepower and accelerates from 0 to 100 km/h in just 2.8 seconds. With a top speed of over 350 km/h, it’s built to thrill every time you hit the road. Take advantage of this exclusive deal and drive home the ultimate expression of speed, luxury, and innovation.
                    </p>
                    
                    <div className="flex items-center justify-center lg:justify-end mt-5 mb-0 md:mt-5 md:mb-0 lg:mb-0 lg:mt-10 xl:mt-24">
                        {/* <!-- Line --> */}
                        {/* <div className="flex-1 h-[1px] border-t border-dotted border-black"></div> */}
                        <Image src={moreText} alt='bar image' />

                        {/* <!-- Circle with Text --> */}
                        <Link href={'/cars'}>
                            <div className="relative flex items-center justify-center w-14 h-14 md:w-[70px] md:h-[70px] xl:w-20 xl:h-20 ml-4 rounded-full border border-strokedark hover:bg-slate-50 duration-200">
                                <span className="text-primary font-medium font-poppins text-sm md:text-base">More</span>
                            </div>
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Section4;
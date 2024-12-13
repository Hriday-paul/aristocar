import React from 'react';
import mostWantedCar from "../../../../../public/home/most-wanted-car.png"
import Image from 'next/image';
import MostTxt from './MostTxt';
import WantedTxt from './WantedTxt';
const Section4 = () => {
    return (
        <div className='container'>
            <div className='pt-5 md:pt-14 lg:pt-20 pb-14 md:pb-20 lg:pb-40 w-full lg:w-10/12 xl:w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-20 lg:gap-y-0 lg:gap-x-8'>
                <div className="relative">
                    <Image src={mostWantedCar} placeholder='blur' className='w-2/3 md:w-1/2 lg:w-5/6 h-auto mx-auto lg:mx-0 lg:ml-auto' alt='most wanted car' />

                    <MostTxt />

                    <WantedTxt />

                </div>
                <div>
                    <p className='text-base text-zinc-600 font-satoshi'>
                        This iconic supercar combines breathtaking design with unparalleled performance. Equipped with a naturally aspirated 6.5L V12 engine, the Aventador delivers an astonishing 770 horsepower and accelerates from 0 to 100 km/h in just 2.8 seconds. With a top speed of over 350 km/h, it’s built to thrill every time you hit the road. Take advantage of this exclusive deal and drive home the ultimate expression of speed, luxury, and innovation.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Section4;
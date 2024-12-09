import React from 'react';
import mostWantedCar from "../../../../../public/home/most-wanted-car.png"
import Image from 'next/image';
const Section4 = () => {
    return (
        <div className='container'>
            <div className='pt-20 pb-40 w-full lg:w-10/12 xl:w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8'>
                <div className="relative">
                    <Image src={mostWantedCar} placeholder='blur' className='w-1/3 md:w-5/6 h-auto ml-auto' alt='most wanted car' />

                    <div className='font-lastica flex flex-row gap-x-1 absolute -top-[87px] xl:-top-[108px] -left-9 xl:-left-10'>
                        <p className="lg:text-[96px] xl:text-[120px] relative">
                            <span className="text-[#BBBBBB]">M</span>
                            <span className="absolute top-0 left-0 h-full overflow-hidden">
                                <span className="text-primary">M</span>
                            </span>
                        </p>
                        <p className="lg:text-[96px] xl:text-[120px] relative">
                            <span className="text-[#BBBBBB]">O</span>
                            <span className="absolute top-0 left-0 h-3/5 overflow-hidden">
                                <span className="text-primary">O</span>
                            </span>
                        </p>
                        <p className="lg:text-[96px] xl:text-[120px] relative">
                            <span className="text-[#BBBBBB]">S</span>
                            <span className="absolute top-0 left-0 h-3/5 overflow-hidden">
                                <span className="text-primary">S</span>
                            </span>
                        </p>
                        <p className="lg:text-[96px] xl:text-[120px] relative">
                            <span className="text-[#BBBBBB]">T</span>
                            <span className="absolute top-0 left-0 h-3/5 overflow-hidden">
                                <span className="text-primary">T</span>
                            </span>
                        </p>

                    </div>

                    <div className='font-lastica flex flex-row gap-x-1 absolute -bottom-[72px] xl:-bottom-[90px] left-44 xl:left-2/4'>
                        <p className="lg:text-[96px] xl:text-[120px] relative">
                            <span className="text-primary">W</span>
                            <span className="absolute top-0 left-0 h-1/2 overflow-hidden">
                                <span className="text-[#BBBBBB]">W</span>
                            </span>
                        </p>
                        <p className="lg:text-[96px] xl:text-[120px] relative">
                            <span className="text-primary">A</span>
                            <span className="absolute top-0 left-0 h-1/2 overflow-hidden">
                                <span className="text-[#BBBBBB]">A</span>
                            </span>
                        </p>
                        <p className="lg:text-[96px] xl:text-[120px] relative">
                            <span className="text-[#BBBBBB]">N</span>
                            <span className="absolute top-0 left-0 h-full overflow-hidden">
                                <span className="text-primary">N</span>
                            </span>
                        </p>
                        <p className="lg:text-[96px] xl:text-[120px] relative">
                            <span className="text-[#BBBBBB]">T</span>
                            <span className="absolute top-0 left-0 h-full overflow-hidden">
                                <span className="text-primary">T</span>
                            </span>
                        </p>
                        <p className="lg:text-[96px] xl:text-[120px] relative">
                            <span className="text-[#BBBBBB]">E</span>
                            <span className="absolute top-0 left-0 h-full overflow-hidden">
                                <span className="text-primary">E</span>
                            </span>
                        </p>
                        <p className="lg:text-[96px] xl:text-[120px] relative">
                            <span className="text-[#BBBBBB]">D</span>
                            <span className="absolute top-0 left-0 h-full overflow-hidden">
                                <span className="text-primary">D</span>
                            </span>
                        </p>

                    </div>

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
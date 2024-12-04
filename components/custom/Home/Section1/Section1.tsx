import Image from 'next/image';
import React from 'react';
import HomeCar1 from '../../../../public/home/sec1_car.png'

const Section1 = () => {
    return (
        <div className='relative'>
            <Image src={HomeCar1} alt="aristocar home car" placeholder='blur' className='w-full h-auto' />
            <div className='absolute top-6 md:top-20 xl:top-32 w-full'>
                <div className='container flex justify-between'>
                    <h2 className='text-xl md:text-3xl lg:text-4xl xl:text-6xl font-lastica font-bold text-secondary uppercase '>
                        <span className='mb-8'>{"Romania’s"}</span> <br />
                        <span> finest Cars</span>
                    </h2>
                    <p className='text-secondary text-base xl:text-lg hidden md:block max-w-80 font-satoshi leading-6'>
                        Discover an exclusive collection of high-end automobiles crafted for those who demand excellence. From sleek sedans to powerful SUVs, our platform connects you with certified luxury vehicles from leading brands like Ferrari, Lamborghini, and Porsche.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Section1;
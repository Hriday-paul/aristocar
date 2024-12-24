'use client'
import React from 'react';
import arrow from '../../../../../public/home/marqueArrow.png'
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const MarqueItem = React.memo(({ text }: { text: string }) => {
    return (
        <Marquee className='' direction='right' autoFill={true} loop={0} gradient={true} gradientColor='#232323'>
            <div className='flex flex-row items-center py-5 xl:py-6'>
                <h6 className='font-lastica text-secondary text-base md:text-[26px] text-center font-medium mx-4'>{text}</h6>
                <Image src={arrow} className='h-3 md:h-5 w-auto' priority alt='arrow icon' />
                <Image src={arrow} className='h-3 md:h-5 w-auto' priority alt='arrow icon' />
                <Image src={arrow} className='h-3 md:h-5 w-auto' priority alt='arrow icon' />
            </div>
        </Marquee>
    );
});

MarqueItem.displayName = "MarqueItem"
export default MarqueItem;
import React from 'react';
import arrow from '../../../../../public/home/marqueArrow.png'
import Image from 'next/image';
import Marquee from "react-fast-marquee";
import { useTranslations } from 'next-intl';

const Section3 = React.memo(() => {

    return (
        <div className='bg-black w-full my-16 lg:my-20 xl:my-24 mx-auto '>
            <Marquee className='flex justify-center items-center' autoFill={true} loop={0} gradient={true} gradientColor='#232323'>
                <MarqueItem />
            </Marquee>
        </div>
    );
});

const MarqueItem = () => {
    const t = useTranslations('home.section3')
    return (
        <div className='flex flex-row items-center py-5 xl:py-6'>
            <h6 className='font-lastica text-secondary text-base md:text-[26px] text-center font-medium mx-4'>{t('title')}</h6>
            <Image src={arrow} className='h-3 md:h-5 w-auto' priority alt='arrow icon' />
            <Image src={arrow} className='h-3 md:h-5 w-auto' priority alt='arrow icon' />
            <Image src={arrow} className='h-3 md:h-5 w-auto' priority alt='arrow icon' />
        </div>
    )
}

Section3.displayName = "Section3"
export default Section3;
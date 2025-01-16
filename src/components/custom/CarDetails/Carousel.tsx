"use client"
import React from 'react';
import FramerCarousel from './FramerCarousel';
import { carDetailsI } from '@/app/[locale]/(main)/details/[id]/@cardetails/page';

const Carousel = ({ images, carData }: { images: { url: string, key: string, _id: string }[], carData: carDetailsI }) => {

    return (
        <div className='py-3 lg:py-5'>
            <FramerCarousel carouselCar={images} carData={carData}/>
        </div>
    );
};

export default Carousel;
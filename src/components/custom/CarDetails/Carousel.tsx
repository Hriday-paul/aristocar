"use client"
import React from 'react';
import FramerCarousel from './FramerCarousel';

const Carousel = ({images}:{images : {url : string, key : string, _id : string}[]}) => {
    
    return (
        <div className='py-3 lg:py-5'>
            <FramerCarousel carouselCar={images}/>
        </div>
    );
};

export default Carousel;
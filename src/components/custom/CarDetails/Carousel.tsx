"use client"
import React from 'react';
import FramerCarousel from './FramerCarousel';

const Carousel = () => {
    const carouselCar = [
        {
            id: 1,
            img: "https://res.cloudinary.com/devlj6p7h/image/upload/v1733981687/bdcalling/carousal/cmjnch2el5cyynaqp8i4.jpg"
        },
        {
            id: 2,
            img: "https://res.cloudinary.com/devlj6p7h/image/upload/v1733981686/bdcalling/carousal/ljxxz8khwdgle3x4fqk4.png"
        },
        {
            id: 3,
            img: "https://res.cloudinary.com/devlj6p7h/image/upload/v1733981687/bdcalling/carousal/xmtltee3nv5eg7bl2d03.jpg"
        },
        {
            id: 4,
            img: "https://res.cloudinary.com/devlj6p7h/image/upload/v1733981645/bdcalling/carousal/capnagxtbfzcrpivlthh.jpg"
        },
        {
            id: 5,
            img: "https://res.cloudinary.com/devlj6p7h/image/upload/v1733981643/bdcalling/carousal/po5yjqjoxt1zfw06lzul.jpg"
        },
        {
            id: 6,
            img: "https://res.cloudinary.com/devlj6p7h/image/upload/v1733981643/bdcalling/carousal/bwudwtz4bqbrorxjdxn6.jpg"
        },
        {
            id: 7,
            img: "https://res.cloudinary.com/devlj6p7h/image/upload/v1733981643/bdcalling/carousal/iomp33j84qru4uacu119.jpg"
        }
    ]
    return (
        <div className='py-3 lg:py-5'>
            <FramerCarousel carouselCar={carouselCar}/>
        </div>
    );
};

export default Carousel;
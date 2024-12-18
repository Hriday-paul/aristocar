'use client'
import React from 'react';
import car from '../../../../public/auth/car.png'
import moderncar from '../../../../public/auth/modern-car.png'
import Image from 'next/image';
import { motion } from "motion/react"

const MotionImage = motion(Image);
const AuthCarDesign = React.memo(() => {
    return (
        <div className="relative">
            <MotionImage
                initial={{ x: -70 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.6 }}
                src={moderncar} alt="aristocar auth car" priority className="w-4/5 md:w-3/4 mx-auto lg:w-full h-auto relative z-20" />
            <motion.div
                initial={{ y: 10, opacity : 0.7 }}
                animate={{ y: 0, opacity : 1 }}
                transition={{ duration: 0.6,  }}
                className="absolute w-7/12 md:w-1/2 lg:w-9/12 h-4/6 md:h-1/2 lg:h-4/6 bg-[#BBBBBB] left-[57px] md:left-32 lg:left-8 -top-5 md:-top-5 lg:-top-16 z-10 rounded-t-full"></motion.div>
        </div>

    );
});

AuthCarDesign.displayName = "AuthCarDesign"
export default AuthCarDesign;
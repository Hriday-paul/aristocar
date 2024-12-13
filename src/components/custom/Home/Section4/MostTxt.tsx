"use client"
import React from 'react';
import { motion } from "motion/react"

const MostTxt = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                    duration: 0.5,
                },
            }}
            viewport={{ once: true }}
            className='font-lastica flex flex-row gap-x-1 absolute -top-9 md:-top-[72px] lg:-top-[87px] xl:-top-[108px] left-1 md:left-3 lg:-left-9 xl:-left-10'>
            <p className="text-[40px] md:text-[80px] lg:text-[96px] xl:text-[120px] relative">
                <span className="text-[#BBBBBB]">M</span>
                <span className="absolute top-0 left-0 h-full overflow-hidden">
                    <span className="text-primary">M</span>
                </span>
            </p>
            <p className="text-[40px] md:text-[80px] lg:text-[96px] xl:text-[120px] relative">
                <span className="text-[#BBBBBB]">O</span>
                <span className="absolute top-0 left-0 h-3/5 md:h-full lg:h-3/5 overflow-hidden">
                    <span className="text-primary">O</span>
                </span>
            </p>
            <p className="text-[40px] md:text-[80px] lg:text-[96px] xl:text-[120px] relative">
                <span className="text-[#BBBBBB]">S</span>
                <span className="absolute top-0 left-0 h-3/5 overflow-hidden">
                    <span className="text-primary">S</span>
                </span>
            </p>
            <p className="text-[40px] md:text-[80px] lg:text-[96px] xl:text-[120px] relative">
                <span className="text-[#BBBBBB]">T</span>
                <span className="absolute top-0 left-0 h-3/5 overflow-hidden">
                    <span className="text-primary">T</span>
                </span>
            </p>

        </motion.div>
    );
};

export default MostTxt;
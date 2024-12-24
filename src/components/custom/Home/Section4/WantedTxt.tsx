"use client"
import React from 'react';
import { motion } from "motion/react"

const WantedTxt = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                    duration: 0.5,
                },
            }}
            viewport={{ once: true }}
            className='font-lastica flex flex-row gap-x-1 absolute -bottom-[36px] md:-bottom-[72px] xl:-bottom-[90px] left-16 md:left-52 lg:left-44 xl:left-2/4'>
            <p className="text-[40px] md:text-[80px] lg:text-[96px] xl:text-[120px] relative">
                <span className="text-primary">W</span>
                <span className="absolute top-0 left-0 h-2/5 md:h-2/5 lg:h-1/2 overflow-hidden">
                    <span className="text-[#BBBBBB]">W</span>
                </span>
            </p>
            <p className="text-[40px] md:text-[80px] lg:text-[96px] xl:text-[120px] relative">
                <span className="text-primary">A</span>
                <span className="absolute top-0 left-0 h-2/5 md:h-2/5 lg:h-1/2 overflow-hidden">
                    <span className="text-[#BBBBBB]">A</span>
                </span>
            </p>
            <p className="text-[40px] md:text-[80px] lg:text-[96px] xl:text-[120px] relative">
                <span className="text-primary lg:text-[#BBBBBB]">N</span>
                <span className="absolute top-0 left-0 h-2/5 md:h-2/5 lg:h-full overflow-hidden">
                    <span className="text-[#BBBBBB] lg:text-primary">N</span>
                </span>
            </p>
            <p className="text-[40px] md:text-[80px] lg:text-[96px] xl:text-[120px] relative">
                <span className="text-primary lg:text-[#BBBBBB]">T</span>
                <span className="absolute top-0 left-0 h-2/5 md:h-2/5 lg:h-full overflow-hidden">
                    <span className="text-[#BBBBBB] lg:text-primary">T</span>
                </span>
            </p>
            <p className="text-[40px] md:text-[80px] lg:text-[96px] xl:text-[120px] relative">
                <span className="text-primary md:text-[#BBBBBB]">E</span>
                <span className="absolute top-0 left-0 h-2/5 md:h-full overflow-hidden">
                    <span className="text-[#BBBBBB] md:text-primary">E</span>
                </span>
            </p>
            <p className="text-[40px] md:text-[80px] lg:text-[96px] xl:text-[120px] relative">
                <span className="text-[#BBBBBB]">D</span>
                <span className="absolute top-0 left-0 h-full overflow-hidden">
                    <span className="text-primary">D</span>
                </span>
            </p>

        </motion.div>
    );
};

export default WantedTxt;
"use client"
import React from 'react';
import { motion } from "motion/react"

const HomeTitle = ({ line1, line2 }: { line1: string, line2: string }) => {
    return (
        <motion.h1
            initial={{ opacity: 0, x: 30 }}
            whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                    duration: 0.5,
                },
            }}
            viewport={{ once: true }}
            className='text-xl md:text-3xl lg:text-4xl xl:text-6xl font-lastica font-medium text-secondary uppercase max-w-60 md:max-w-[400px] xl:max-w-[600px]'>
            <span className='mb-8'>{line1}</span> <br />
            <span> {line2}</span>
        </motion.h1>
    );
};

export default HomeTitle;
'use client'
import React from 'react';
import { motion } from "motion/react"

const CenterContent = ({ indx }: { indx: number }) => {
    return (

        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 0.6,
                    delay: 0.06 * indx,
                    ease: [0, 0.70, 0.5, 1.01]
                },
            }}
            viewport={{ once: true, amount: 0.5 }}
            className='h-auto lg:h-[28rem] max-h-full w-full bg-black text-secondary col-span-2 flex flex-col justify-center items-center p-8'>
            <h6 className='font-lastica text-lg text-secondary mb-8 text-center'>Everything you Desire</h6>
            <p className='text-sm text-secondary font-satoshi text-center'>Every driver’s dream is different, and our luxury car platform reflects that with a diverse selection of categories. Each category is curated to match your taste and lifestyle. Explore vehicles that prioritize comfort, innovation, and timeless appeal, all waiting for you to discover.</p>
            <h6 className="flex flex-row flex-nowrap items-center w-4/5 md:w-2/3 mt-8">
                <span className="flex-grow block border-t border-secondary"></span>
                <div className="flex-none block lg:mx-2 lg:px-2 py-2 rounded leading-none font-medium bg-black text-white font-serif text-base">
                    Our Categories
                </div>
                <span className="flex-grow block border-t border-secondary"></span>
            </h6>
        </motion.div>

    );
};

export default CenterContent;
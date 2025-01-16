'use client'
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { motion } from "motion/react"

const Title = ({ subtitle, title, details, btnTxt }: { subtitle: string, title: { line1: string, line2: string }, details: string, btnTxt: string }) => {
    return (
        <div>

            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,
                    },
                }}
                viewport={{ once: true }} className='flex flex-row justify-center gap-x-3 items-center mb-5'>
                <FaArrowRight className='text-white rotate-45' />
                <p className="capitalize font-satoshi text-base text-secondary text-center">{subtitle}</p>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 0.08,
                        duration: 0.5,
                    },
                }}
                viewport={{ once: true }} >
                <h5 className="font-lastica text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-secondary text-center my-3 md:my-4 lg:my-5">{title?.line1}</h5>
                <h5 className="font-lastica text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-secondary text-center my-3 md:my-4 lg:my-5">{title?.line2}</h5>
            </motion.section>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 0.12,
                        duration: 0.5,
                    },
                }}
                viewport={{ once: true }} className="capitalize font-satoshi text-base lg:text-lg text-secondary text-center mt-5 md:mt-7 lg:mt-8 xl:mt-10 mb-5 xl:mb-8">{details}</motion.p>

            <motion.center
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 0.15,
                        duration: 0.5,
                    },
                }}
                viewport={{ once: true }}>
                <Link href={'/signup'} className="relative px-7 py-3 overflow-hidden font-medium text-gray-600 bg-[#F8FAFC] rounded-sm group mx-auto">
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-black group-hover:w-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-black group-hover:w-full ease"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-black group-hover:h-full ease"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-black group-hover:h-full ease"></span>
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-black opacity-0 group-hover:opacity-100"></span>
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease font-poppins">{btnTxt}</span>
                </Link>
            </motion.center>

        </div>
    );
};

export default Title;
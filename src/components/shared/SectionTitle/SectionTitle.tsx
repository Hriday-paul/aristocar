'use client'
import { motion } from "motion/react"

const SectionTitle = ({ title }: { title: string }) => {
    return (
        <motion.h3
            initial={{ opacity: 0, x: -40 }}
            whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                    duration: 0.5,
                },
            }}
            viewport={{ once: true }}
            className="relative font-lastica text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-normal text-primary before:w-1 before:md:w-[5px] before:lg:w-1.5 before:xl:w-2 before:h-full before:bg-primary before:content-[''] before:absolute before:top-0 before:-left-1.5 before:md:-left-2 before:lg:-left-3 before:xl:-left-4 before:rounded-r-2xl ml-2 lg:ml-3 xl:ml-4 leading-6 md:leading-9 lg:leading-none before:-mt-0.5">{title}</motion.h3>
    );
};

export default SectionTitle;


export const Section6Title = ({ title1, title2, details }: { title1: string, title2: string, details: string }) => {
    return (
        <div className="overflow-hidden">
            <motion.h3
                initial={{ opacity: 0, x: -40 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 0.5,
                    },
                }}
                viewport={{ once: true }}
                className="relative font-lastica text-xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-primary text-left leading-6 md:leading-9 lg:leading-none before:-mt-0.5 ml-0 md:-ml-32 lg:-ml-36 xl:-ml-40 md:text-center">{title1}</motion.h3>
            <motion.h3
                initial={{ opacity: 0, x: 40 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 0.5,
                    },
                }}
                viewport={{ once: true }}
                className="relative font-lastica text-xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-primary ml-28 md:ml-36 lg:ml-48 xl:ml-64 mt-3 leading-6 md:leading-9 lg:leading-none before:-mt-0.5 text-center uppercase">{title2}</motion.h3>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,
                    },
                }}
                viewport={{ once: true }}
                className="relative w-full md:w-5/6 lg:w-3/4 xl:w-2/3 mx-auto">
                <p className="font-poppins text-xs lg:text-sm font-normal text-zinc-700 ml-2 md:ml-56 lg:ml-60 xl:ml-64 mt-3 leading-6 md:leading-6 lg::leading-7 lg:leading-7 before:-mt-0.5">
                    {details}
                </p>
            </motion.div>

        </div>
    );
};
'use client'
import { motion } from "motion/react"

const SectionTitle = ({ title }: { title: string }) => {
    return (
        <motion.h3
            initial={{ opacity: 0, x: 40 }}
            whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                    duration: 0.5,
                },
            }}
            viewport={{ once: true}}
            className="relative font-lastica text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-primary before:w-1 before:md:w-1.5 before:lg:w-2 before:xl:w-2 before:h-full before:bg-primary before:content-[''] before:absolute before:top-0 before:-left-1.5 before:md:-left-2 before:lg:-left-3 before:xl:-left-4 before:rounded-r-2xl ml-2 lg:ml-3 xl:ml-4 leading-6 md:leading-9 lg:leading-none before:-mt-0.5">{title}</motion.h3>
    );
};

export default SectionTitle;
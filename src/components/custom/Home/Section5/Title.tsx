'use client'
import { motion } from "motion/react"

const Title = ({ text }: { text: string }) => {
    return (
        <motion.h6
            initial={{  x: -40 }}
            whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                    duration: 0.5,
                },
            }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl xl:text-5xl font-lastica uppercase text-white">{text}</motion.h6>
    );
};

export default Title;
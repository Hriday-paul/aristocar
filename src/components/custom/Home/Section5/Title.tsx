'use client'
import { motion } from "motion/react"

const Title = ({ text }: { text: string }) => {
    return (
        <motion.h6
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5,
                },
            }}
            viewport={{ once: true }}
            className="font-lastica text-4xl lg:text-5xl text-secondary text-center">{text}</motion.h6>
    );
};

export default Title;
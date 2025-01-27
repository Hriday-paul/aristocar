"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from "motion/react"

const MotionLink = motion.create(Link);
function ExclusiveCarCard({ image, title, id, indx, big = false }: { image: string, title: string, id: number, big?: boolean, indx: number }) {
    return (

        <MotionLink
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
            href={title === 'Supercars' ? "/cars?min_price=50000" : (title == "Hybrid & Electric") ? "/cars?fuel_type=Hybrid%2CElectric" : `/cars?body=${title}`}
            className={`w-full ${big ? "lg:h-[16rem] max-h-full" : "lg:max-h-60  max-h-80"
                } max-h-64 h-full relative overflow-hidden first:col-span-2 lg:first:col-span-1 group`}>
            <div className="textBox title flex justify-start lg:pl-8 absolute w-full transition h-full top-0 left-0 bg-gradient-to-b from-transparent from-40% to-black duration-1000 z-10">
                <div className="absolute bottom-0 p-3 md:bottom-4 md:p-4 lg:bottom-8 lg:p-0 ">
                    <h6 className="text-white font-lastica font-normal text-xs sm:text-sm md:text-base lg:text-base uppercase">
                        {title}
                    </h6>
                </div>
            </div>
            <Image
                src={image}
                alt="exclusive car image"
                width={500}
                height={500}
                className="group-hover:scale-110 duration-700 object-cover w-full h-full"
                placeholder='blur' blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWnpaaXiDhOAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII='
            />
        </MotionLink>
    );
}

export default ExclusiveCarCard;
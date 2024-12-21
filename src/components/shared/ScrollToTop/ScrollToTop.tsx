'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { IoIosArrowRoundUp } from 'react-icons/io';
import scrollcar from '../../../../public/scrollcar.webp'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    function scrollToTop() {
        const isBrowser = () => typeof window !== 'undefined';
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <span
                className={`fixed bottom-0 right-1 md:right-0 rounded-full p-1 lg:p-1.5 mr-0 md:mr-1 lg:mr-1.5 mb-[10px] md:mb-2 z-50 items-center text-xs flex gap-2 bg-black border border-strokedark text-secondary ${isVisible ? "" : "hidden"}`}
                onClick={scrollToTop}
            >
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger><MdOutlineKeyboardArrowRight className='text-xl md:text-2xl xl:text-3xl text-secondary -rotate-90' /></TooltipTrigger>
                        <TooltipContent>
                            <p>Scroll To Top</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                
                {/* <IoIosArrowRoundUp className="inline-block h-4 w-4" /> */}
            </span>

        </div>
    );
};

export default ScrollToTop;
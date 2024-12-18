'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { IoIosArrowRoundUp } from 'react-icons/io';
import scrollcar from '../../../../public/scrollcar.webp'


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
            <button
                className={`fixed bottom-0 right-0 rounded-s-full px-2 py-2 mr-0 md:mr-1 lg:mr-1.5 mb-[10px] md:mb-2 z-50 items-center text-xs flex gap-2 ${isVisible ? "" : "hidden"}`}
                onClick={scrollToTop}
            >
                <Image src={scrollcar} alt='scroll car' className='w-10 md:w-12 lg:w-16 h-auto' />
                {/* BACK TO TOP
                <IoIosArrowRoundUp className="inline-block h-4 w-4" /> */}
            </button>

        </div>
    );
};

export default ScrollToTop;
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import { useTranslations } from 'next-intl';

const Footer = () => {
    const t = useTranslations('footer');
    const routs = [
        {
            id: 1,
            name: t('home'),
            link: "/"
        },
        {
            id: 2,
            name: t("about"),
            link: "/about"
        },
        {
            id: 3,
            name: t("contact"),
            link: "/contact"
        },
        {
            id: 4,
            name: t("privacy"),
            link: "/privacy"
        },
        {
            id: 5,
            name: t("terms"),
            link: "/terms"
        },
    ];

    return (
        <div className='bg-black '>
            <div className='py-10 pb-5 md:py-12 lg:py-16 xl:py-20 border-b border-b-strokeinput'>
                <div className='container'>
                    <center>
                        <h2 className='text-xl md:text-3xl lg:text-4xl xl:text-4xl font-lastica font-medium text-secondary uppercase md:mb-3 lg:mb-5'>
                            {t("title")}
                        </h2>
                        <h2 className="flex flex-row flex-nowrap items-center w-4/5 md:w-2/3">
                            <span className="flex-grow block border-t border-secondary"></span>
                            <div className="flex-none block lg:mx-2 lg:px-2 py-2 text-xl rounded leading-none font-medium bg-black text-white">
                                <div className="px-3 md:px-4 my-4 flex">
                                    <Link href='/' className="inline-flex items-center justify-center h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10 border border-gray-100 rounded-full mr-2 md:mr-3 hover:bg-secondary hover:text-primary duration-300">
                                        <FaFacebookF className='h-3 md:h-4 lg:h-5 w-3 md:w-4 lg:w-5' />
                                    </Link>
                                    <Link href='/' className="inline-flex items-center justify-center h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10 border border-gray-100 rounded-full mr-2 md:mr-3 hover:bg-secondary hover:text-primary duration-300">
                                        <FaInstagram className='h-3 md:h-4 lg:h-5 w-3 md:w-4 lg:w-5' />
                                    </Link>
                                    <Link href='/' className="inline-flex items-center justify-center h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10 border border-gray-100 rounded-full mr-2 md:mr-3 hover:bg-secondary hover:text-primary duration-300">
                                        <FaXTwitter className='h-3 md:h-4 lg:h-5 w-3 md:w-4 lg:w-5' />
                                    </Link>
                                    <Link href='/' className="inline-flex items-center justify-center h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10 border border-gray-100 rounded-full mr-2 md:mr-3 hover:bg-secondary hover:text-primary duration-300">
                                        <FaLinkedinIn className='h-3 md:h-4 lg:h-5 w-3 md:w-4 lg:w-5' />
                                    </Link>
                                </div>
                            </div>
                            <span className="flex-grow block border-t border-secondary"></span>
                        </h2>
                    </center>
                </div>
            </div>
            <div>
                <ul className='flex flex-row gap-x-3 md:gap-x-5 gap-y-2 items-center justify-center py-5 flex-wrap px-4'>
                    {
                        routs?.map(rout => {
                            return <li key={rout?.id} className='text-secondary font-satoshi text-xs md:text-sm uppercase'>
                                <Link href={rout?.link}>{rout?.name}</Link>
                            </li>
                        })
                    }
                </ul>
                <ScrollToTop />
            </div>
        </div>
    );
};

export default Footer;
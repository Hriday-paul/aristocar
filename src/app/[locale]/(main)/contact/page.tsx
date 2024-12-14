import ContactForm from '@/components/custom/Contact/ContactForm';
import React from 'react';

const page = () => {
    return (
        <div className='bg-[#F8FAFC]'>
            <div className='container py-5'>
                {/* --------------contact section--------------- */}
                <div className='my-5'>
                    <h2 className='text-4xl md:text-5xl xl:text-6xl text-black font-poppins font-semibold text-center mb-3 md:mb-4 lg:mb-5'>Contact</h2>
                    <p className='text-lg md:text-xl text-black font-poppins text-center my-2 md:my-3 lg:my-4'>We are available 24/7, 7 days a week.</p>
                    <p className='text-lg md:text-xl text-black font-poppins text-center my-2 md:my-3 lg:my-4'>Phone: <a href="tel:+8801611112222">+8801611112222</a></p>
                </div>
                <div className='mt-10 md:mt-12 lg:mt-14 xl:mt-16 mb-10'>
                    <h3 className='text-3xl lg:text-4xl xl:text-5xl text-black font-poppins font-semibold text-center'>Send a Message</h3>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default page;
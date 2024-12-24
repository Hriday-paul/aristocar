import React from 'react';
import Title from './Title';

const Section7 = () => {
    return (
        <div className='my-10 md:my-12 lg:my-16 xl:my-20'>
            <div className="bg-center bg-cover bg-no-repeat bg-[url('/home/features/SignIn.jpg')] bg-fixed w-full h-auto py-20 lg:py-24 xl:py-28 relative">
                <div className='absolute top-0 left-0 h-full w-full bg-black bg-opacity-70 z-0'></div>
                <div className='container relative z-10'>
                    <div >
                        <Title subtitle='Where Buyers Meet Sellers Seamlessly' title={{ line1: "Create your", line2: "Account!" }} details='Discover rare deals, connect with serious buyers, and list your luxury cars effortlessly.' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section7;
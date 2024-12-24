import React from 'react';
import CountDown from './CountDown';
import Title from './Title';

const Section5 = () => {
    const countData = [
        {
            id: 1,
            title: "Total Sell",
            value: 100,
            postSymbole: "+"
        },
        {
            id: 2,
            title: "Off Market Price",
            value: 10,
            postSymbole: "%"
        },
        {
            id: 3,
            title: "Verified Dealers",
            value: 5,
            postSymbole: "k+"
        },
        {
            id: 4,
            title: "Active Buyers",
            value: 10,
            postSymbole: "k+"
        },
        {
            id: 5,
            title: "Customer Support",
            value: 24,
            postSymbole: "/7"
        }
    ]
    return (
        <div>
            <div className="bg-center bg-contain md:bg-cover bg-no-repeat bg-[url('/home/features/OurFeaturesHorizontal.jpg')] md:bg-[url('/home/features/OurFeaturescrop.jpg')] bg-fixed w-full h-auto py-14 lg:py-20">
                <div className='container'>
                    <div className="p-4 md:p-8">
                        <Title text={"Our Features"}/>
                        <p className="capitalize font-satoshi text-lg text-secondary mt-3 lg:mt-5 text-center">Learn More</p>
                        <div className='mt-20 md:mt-28 lg:mt-36 xl:mt-48'>
                            <ul className='flex flex-row flex-wrap justify-center'>
                                {countData?.map(item => {
                                    return <li key={item?.id} className='w-1/2 md:w-1/3 lg:w-1/5 px-5 py-3 lg:py-0'>
                                        <p className='font-poppins text-sm block text-secondary border-b border-stroke text-left'>{item?.title}</p>
                                        <p className='font-lastica text-4xl block text-secondary text-left mt-3 lg:mt-5'>
                                            <CountDown count={item?.value} />
                                            {item?.postSymbole}</p>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Section5;
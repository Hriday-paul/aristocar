import BillingCard from '@/components/Dashboard/DealerDashboard/Subscription/BillingCard';
import RecentBillingHistory from '@/components/Dashboard/DealerDashboard/Subscription/RecentBillingHistory';
import HandlePagination from '@/components/shared/CustomPagination/HandlePagination';
import React from 'react';

const page = () => {
    const billingCardData = [
        {
            id: 1,
            title: "Basic",
            details: "150 Euro a month for max. 10 listings",
            price: 150,
        },
        {
            id: 2,
            title: "Medium",
            details: "200 Euro a month for max. 50 listings",
            price: 200,
        },
        {
            id: 1,
            title: "Pro",
            details: "300 Euro a month for max. 80 listings",
            price: 300,
        }
    ]
    return (
        <div>
            {/* --------------billing section-------------- */}
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-2xl font-lastica text-center text-primary pb-2'>Join Today</h2>
                <p className='text-sm font-satoshi text-primary w-2/3 text-center'>Start showcasing your exclusive listings to 1,000,000 high‑net‑worth individuals monthly.</p>
                <div className='my-5 lg:my-8 flex flex-row gap-x-3 justify-center items-center'>
                    <section className='flex flex-row gap-x-1 items-center'>
                        <span className='h-7 w-7 bg-zinc-300 rounded-full'></span>
                        <p className='text-base font-poppins'>Basic</p>
                    </section>
                    <section className='flex flex-row gap-x-1 items-center'>
                        <span className='h-7 w-7 bg-success rounded-full'></span>
                        <p className='text-base font-poppins'>Medium</p>
                    </section>
                    <section className='flex flex-row gap-x-1 items-center'>
                        <span className='h-7 w-7 bg-zinc-300 rounded-full'></span>
                        <p className='text-base font-poppins'>Pro</p>
                    </section>
                </div>
                <div className='mb-5 flex flex-row gap-x-3 justify-center items-center'>
                    <p className='text-sm md:text-base font-poppins bg-success text-white px-7 md:px-10 py-2 '>Active – 10 days left</p>
                    <p className='text-sm md:text-base font-poppins bg-danger text-white px-6 py-2 '>Expired – October 22, 2024</p>
                </div>
                {/* ---------billing cards--------------- */}
                <div className="my-5 lg:my-8 w-fit mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:flex">
                    {
                        billingCardData?.map(card => {
                            return <BillingCard key={card?.id} cardData={card} />
                        })
                    }
                </div>
            </div>

            {/* ------------------ recent billing history------------------ */}
            <div>
                <RecentBillingHistory />

                <HandlePagination />
            </div>
        </div>
    );
};

export default page;
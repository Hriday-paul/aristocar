import { useCreateCheckoutMutation, useCreateSubscriptionMutation } from '@/redux/features/DealerApi';
import { packageType } from '@/redux/features/types';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';
import { ImSpinner2 } from 'react-icons/im';
import { toast } from 'sonner';

const BillingCard = ({ cardData, btnTxt }: { cardData: packageType, btnTxt: string }) => {
    const [createCheckout, { isLoading: checkoutLoading }] = useCreateCheckoutMutation()
    const [createSubsctiption, { isLoading: subscriptionLoading }] = useCreateSubscriptionMutation();
    const router = useRouter();

    const handlePurchase = useCallback(async (id: string) => {
        try {
            const subsRes = await createSubsctiption({ packageId: id }).unwrap();
            const checkRes = await createCheckout({ subscriptionId: subsRes?.data?._id }).unwrap();

            router.push(checkRes?.data);

        } catch (err: any) {
            toast.error(err?.data?.message || 'Something went wrong, try again');
        }
    }, [createSubsctiption, createCheckout, router])

    return (
        <div className="group relative overflow-hidden bg-[#F8FAFC] p-4 shadow-2 transition-all duration-300  hover:shadow-4 rounded-sm  border border-primary">
            <div className='z-10 relative'>
                <h4 className='text-2xl font-semibold font-satoshi text-black group-hover:text-secondary transition-all duration-300'>{cardData?.title}</h4>

                <h5 className='text-base font-semibold font-satoshi text-black group-hover:text-secondary transition-all duration-300 mt-1'>Up to {cardData?.carCreateLimit} listings</h5>

                <p className='text-sm font-medium font-satoshi text-zinc-900 group-hover:text-secondary transition-all duration-300 my-2'>{cardData?.shortDescription}</p>

                <h3 className='text-3xl font-semibold font-satoshi text-black group-hover:text-secondary transition-all duration-300 mt-1'>€ {cardData?.price}
                    <span className='text-base'> / {cardData?.durationDay}</span>
                </h3>

                <button onClick={() => handlePurchase(cardData?._id)} className='bg-[#F8FAFC] px-4 py-3 border border-primary text-primary mt-4 font-poppins font-medium text-base duration-300 transition-all flex flex-row items-center justify-center gap-x-1'>
                    {(subscriptionLoading || checkoutLoading) && < ImSpinner2 className="text-base text-primary animate-spin" />}
                    <span>{(subscriptionLoading || checkoutLoading) ? 'Loading...' : btnTxt}</span>
                </button>
            </div>
            <span className="absolute -bottom-10 -right-10 z-0 h-8 w-8  rounded-full bg-primary transition-all duration-500 group-hover:scale-[40]"></span>
        </div>
    );
};

export default BillingCard;
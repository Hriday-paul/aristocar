import React from 'react';

const page = () => {
    return (
        <div className='py-8'>
            <div className='w-[700px] mx-auto '>
                <div className='p-8 bg-white shadow-2'>
                    <h3 className='uppercase font-lastica text-3xl text-center text-primary mb-10'>Aristocar</h3>
                    <h4 className='font-poppins font-bold text-4xl'>Invoice</h4>
                    <section className='flex flex-row gap-x-2 items-center mt-2'>
                        <h5 className='font-poppins font-bold text-xl'>Date : </h5>
                        <p className='font-poppins font-medium text-lg text-zinc-700'>18 December 20024</p>
                    </section>
                    <section className='flex flex-row gap-x-2 items-center'>
                        <h5 className='font-poppins font-bold text-xl'>Invoice : </h5>
                        <p className='font-poppins font-medium text-lg text-zinc-700'>#LI7701</p>
                    </section>

                    <div className='my-8 flex flex-row justify-between'>

                        <div>
                            <p className='font-poppins text-base text-zinc-600 font-medium'>Bill To</p>
                            <p className='font-poppins text-xl text-black font-semibold'>Bd Calling Ltd.</p>
                            <p className='font-poppins text-lg text-zinc-700 font-medium'>+62 21 123456</p>
                        </div>
                        <div>
                            <p className='font-poppins text-base text-zinc-600 font-medium text-right'>Pay To</p>
                            <p className='font-poppins text-xl text-black font-semibold text-right'>Aristocar</p>
                            <p className='font-poppins text-lg text-zinc-700 font-medium text-right'>Jakarta, Indonesia</p>
                            <p className='font-poppins text-lg text-zinc-700 font-medium text-right'>+62 21 123456</p>
                        </div>

                    </div>

                    <table className="w-full text-left mb-8">
                        <thead className='border-b border-b-strokeinput'>
                            <tr>
                                <th className="text-gray-700 font-medium uppercase py-2 font-poppins">Description</th>
                                <th className="text-gray-700 font-medium uppercase py-2 font-poppins">Rate</th>
                                <th className="text-gray-700 font-medium uppercase py-2 font-poppins">Time</th>
                                <th className="text-gray-700 font-medium uppercase py-2 font-poppins">Sub Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 text-gray-700 font-poppins text-lg">Basic</td>
                                <td className="py-2 text-gray-700 font-poppins text-lg">150 €</td>
                                <td className="py-2 text-gray-700 font-poppins text-lg">11.54 PM</td>
                                <td className="py-2 text-gray-700 font-poppins text-lg">150 €</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <section className='flex flex-row gap-x-5 items-center my-5'>
                    <button className='border-2 border-primary bg-primary py-2.5 text-center font-poppins text-base w-full hover:bg-opacity-85 duration-200 text-white'>Download</button>
                    <button className='border-2 border-primary hover:bg-primary py-2.5 text-center font-poppins text-base w-full text-black hover:text-secondary duration-200'>Print</button>
                </section>
            </div>
        </div>
    );
};

export default page;
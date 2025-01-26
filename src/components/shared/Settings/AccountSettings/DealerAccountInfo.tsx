'use client'
import { userResponseI } from '@/redux/features/types';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ImSpinner2 } from 'react-icons/im';

export type dealerprofileInputType = {
    full_name: string,
    phone?: string;
    vatId: string,
    street: string,
    city: string,
    country: string,
    postalCode: string
}

const DealerAccountInfo = ({ handleUpdate, isLoading, data, txt }: { handleUpdate: (info: dealerprofileInputType) => void, isLoading: boolean, data: userResponseI, txt: { [key: string]: string } }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<dealerprofileInputType>({
        defaultValues: {
            city: data?.dealer_address?.city || '',
            country: data?.dealer_address?.country || '',
            full_name: data?.name,
            phone: data?.phoneNumber || '',
            postalCode: data?.dealer_address?.post_code || '',
            street: data?.dealer_address?.street || '',
            vatId: data?.dealer_address?.vat_id || ''
        }
    });

    const handleFormSubmit: SubmitHandler<dealerprofileInputType> = (data) => {
        handleUpdate(data)
    }

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className=''>
            <div className="w-full mx-auto mb-3">
                <label htmlFor='Fullname' className="mb-1.5 block text-black dark:text-white font-poppins text-sm">
                    {txt?.full_name}
                    <span className='text-danger text-xs ml-1'>*</span>
                </label>
                <input
                    type="text"
                    id='Fullname'
                    {...register("full_name", { required: true, minLength: { value: 3, message: "Full name minimum 2 character" } })}
                    placeholder="Full name"
                    className={`text-sm w-full rounded-sm bg-white border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.full_name ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                />
                {errors?.full_name && <p className="text-red-500 text-sm col-span-2">{errors?.full_name?.message}</p>}
            </div>

            <div className="w-full mx-auto mb-3">
                <label htmlFor='email' className="mb-1.5 block text-black font-poppins text-sm">
                    {txt?.email}
                    <span className='text-danger text-xs ml-1'>*</span>
                </label>
                <input
                    type="email"
                    id='email'
                    placeholder="Email"
                    disabled
                    value={data?.email}
                    className={`w-full text-sm rounded-sm bg-white border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary disabled:cursor-not-allowed disabled:bg-opacity-85`}
                />
            </div>

            <div className="w-full mx-auto mb-3">
                <label htmlFor='phone' className="mb-1.5 block text-black font-poppins text-sm">
                    {txt?.phone}
                    <span className='text-danger text-xs ml-1'>*</span>
                </label>
                <input
                    type="number"
                    id='phone'
                    {...register("phone", {
                        pattern: {
                            value: /^(\+?\d{1,3})?[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{1,4}[\s.-]?\d{1,9}$/, message: 'invalid phone'
                        }
                    })}
                    placeholder="Phone Number"
                    className={`w-full text-sm rounded-sm bg-white border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.phone ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                />
                {errors?.phone && <p className="text-red-500 text-sm col-span-2">{errors?.phone?.message}</p>}
            </div>

            <div className="w-full mx-auto mb-3">
                <label htmlFor='vatid' className="mb-1.5 block text-black font-poppins text-sm">
                    {txt?.vat_id}
                    <span className='text-danger text-xs ml-1'>*</span>
                </label>
                <input
                    type="text"
                    id='vatid'
                    {...register("vatId")}
                    placeholder="Vat id"
                    className={`w-full text-sm rounded-sm bg-white border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.vatId ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                />
                {errors?.vatId && <p className="text-red-500 text-sm col-span-2">{errors?.vatId?.message}</p>}
            </div>

            <div className='grid grid-cols-2 gap-x-5'>

                <div className="w-full mx-auto mb-3">
                    <label htmlFor='Country' className="mb-1.5 block text-black dark:text-white font-poppins text-sm">
                        {txt?.country}
                        <span className='text-danger text-xs ml-1'>*</span>
                    </label>
                    <input
                        type="text"
                        id='Country'
                        {...register("country", { required: true })}
                        placeholder="Country"
                        className={`text-sm w-full rounded-sm bg-white border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.country ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                    />
                    {errors?.country && <p className="text-red-500 text-sm col-span-2">{errors?.country?.message}</p>}
                </div>

                <div className="w-full mx-auto mb-3">
                    <label htmlFor='city' className="mb-1.5 block text-black dark:text-white font-poppins text-sm">
                        {txt?.city}
                        <span className='text-danger text-xs ml-1'>*</span>
                    </label>
                    <input
                        type="text"
                        id='city'
                        {...register("city", { required: true })}
                        placeholder="City"
                        className={`text-sm w-full rounded-sm bg-white border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.city ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                    />
                    {errors?.city && <p className="text-red-500 text-sm col-span-2">{errors?.city?.message}</p>}
                </div>

            </div>

            <div className='grid grid-cols-2 gap-x-5 '>
                <div className="w-full mx-auto mb-3">
                    <label htmlFor='address' className="mb-1.5 block text-black dark:text-white font-poppins text-sm">
                        {txt?.street}
                        <span className='text-danger text-xs ml-1'>*</span>
                    </label>
                    <input
                        type="text"
                        id='address'
                        {...register("street", { required: true })}
                        placeholder="Street number"
                        className={`text-sm w-full rounded-sm bg-white border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.street ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                    />
                    {errors?.street && <p className="text-red-500 text-sm col-span-2">{errors?.street?.message}</p>}
                </div>
                <div className="w-full mx-auto mb-3">
                    <label htmlFor='post' className="mb-1.5 block text-black dark:text-white font-poppins text-sm">
                        {txt?.post_code}
                        <span className='text-danger text-xs ml-1'>*</span>
                    </label>
                    <input
                        type="text"
                        id='post'
                        {...register("postalCode", { required: true })}
                        placeholder="Post code"
                        className={`text-sm w-full rounded-sm bg-white border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.postalCode ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                    />
                    {errors?.postalCode && <p className="text-red-500 text-sm col-span-2">{errors?.postalCode?.message}</p>}
                </div>
            </div>

            <button className='bg-primary text-secondary py-2.5 px-4 w-full hover:bg-opacity-90 font-poppins duration-200 rounded-sm flex flex-row gap-x-1 items-center justify-center'>
                {isLoading && < ImSpinner2 className="text-sm text-white animate-spin" />}
                <span>{isLoading ? 'Loading...' : txt?.save_changes}</span>
            </button>
        </form>
    );
};

export default DealerAccountInfo;
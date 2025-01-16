'use client'
import { Skeleton } from '@/components/ui/skeleton';
import { useGetUserProfileQuery } from '@/redux/features/AuthApi';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ImSpinner2 } from 'react-icons/im';
import SmError from '../../Dashboard/SmError';
import { userResponseI } from '@/redux/features/types';

export type profileInputType = {
    full_name: string,
    location?: string,
    phone?: string;
}

const AccountSettings = ({ handleUpdate, isLoading, data, txt }: { handleUpdate: (da: profileInputType) => void, isLoading: boolean, data: userResponseI, txt: { [key: string]: string } }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<profileInputType>({
        defaultValues: {
            full_name: data?.name,
            location: data?.user_address,
            phone: data?.phoneNumber || ''
        }
    });

    const handleFormSubmit: SubmitHandler<profileInputType> = (data) => {
        handleUpdate(data)
    }

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className=''>
            <div className="w-full mx-auto mb-3">
                <label htmlFor='Fullname' className="mb-1.5 block text-black dark:text-white font-poppins text-sm">
                    {txt?.full_name}
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
                <label htmlFor='address' className="mb-1.5 block text-black dark:text-white font-poppins text-sm">
                    {txt?.location}
                </label>
                <input
                    type="text"
                    id='address'
                    {...register("location")}
                    placeholder="Location"
                    className={`text-sm w-full rounded-sm bg-white border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.location ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                />
                {errors?.location && <p className="text-red-500 text-sm col-span-2">{errors?.location?.message}</p>}
            </div>
            <div className="w-full mx-auto mb-3">
                <label htmlFor='email' className="mb-1.5 block text-black font-poppins text-sm">
                    {txt?.email}
                </label>
                <input
                    type="email"
                    id='email'
                    placeholder="Email"
                    disabled={true}
                    value={data?.email}
                    className={`w-full text-sm rounded-sm bg-white border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary disabled:bg-opacity-80 disabled:cursor-not-allowed`}
                />
            </div>
            <div className="w-full mx-auto mb-3">
                <label htmlFor='phone' className="mb-1.5 block text-black font-poppins text-sm">
                    {txt?.phone}
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
            <button className='bg-primary text-secondary py-2.5 px-4 w-full hover:bg-opacity-90 font-poppins duration-200 rounded-sm flex flex-row gap-x-1 items-center justify-center'>
                {isLoading && < ImSpinner2 className="text-sm text-white animate-spin" />}
                <span>{isLoading ? 'Loading...' : txt?.save_changes}</span>
            </button>
        </form>
    );
};

export default AccountSettings;
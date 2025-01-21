'use client'
import React, { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import { useResendOtpMutation } from '@/redux/features/AuthApi';
import { toast } from 'sonner';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import { ImSpinner2 } from 'react-icons/im';

type ForgotInputs = {
    email: string,
}

const ResendOtp = ({ txt }: { txt : {[key : string] : string} }) => {
    const [postResendOtpEmail, { isLoading }] = useResendOtpMutation()
    const [_, setCookie] = useCookies(['token']);
    const navig = useRouter();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ForgotInputs>();

    const handleFormSubmit: SubmitHandler<ForgotInputs> = async (data) => {
        try {
            const res = await postResendOtpEmail(data).unwrap()
            toast.success(res?.message || 'Otp Send successfully');
            reset();

            setCookie('token', res?.data?.token, {
                httpOnly: false,
                maxAge: 14 * 24 * 60 * 60, // 7 days
                path: '/',
                sameSite: 'lax',
                secure: process.env.production === 'production',
            });

            navig.push('/otp-varify?next=/reset-password')

        } catch (err: any) {
            toast.error(err?.data?.message || 'Something went wrong, try again');
        }
    }

    return (
        <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-normal font-lastica text-black uppercase text-center">
                Aristocar
            </h1>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold font-poppins text-primary capitalize text-center mt-4">
                {txt?.title}
            </h3>

            <form onSubmit={handleSubmit(handleFormSubmit)} className="my-10 flex flex-col gap-4 w-4/5 mx-auto">
                <div className="w-full mx-auto">
                    <label htmlFor='email' className="mb-1.5 block text-black dark:text-white font-poppins">
                        {txt?.input_email}
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <input
                        type="text"
                        id='email'
                        {...register("email", {
                            required: true, pattern: {
                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: 'email invalid'
                            }
                        })}
                        placeholder="Email"
                        className={`w-full mx-auto rounded border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input  font-poppins placeholder:font-poppins ${errors?.email ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                    />
                    {errors?.email && <p className="text-red-500 text-sm col-span-2">{errors?.email?.message}</p>}
                </div>

                <center>
                    <button type='submit' disabled={isLoading} className='bg-primary text-secondary font-poppins font-medium px-6 py-3 rounded text-base hover:bg-opacity-85 duration-200 flex flex-row gap-x-2 items-center disabled:bg-opacity-80 disabled:cursor-not-allowed'>
                        {isLoading && < ImSpinner2 className="text-lg text-white animate-spin" />}
                        <span>{isLoading ? 'Loading...' : txt?.btn}</span>
                    </button>
                </center>

            </form>
        </div>
    );
};

export default ResendOtp;
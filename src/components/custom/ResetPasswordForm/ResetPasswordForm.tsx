'use client'
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import PasswordInput from './PasswordInput';
import ConfirmPasswordInput from './ConfirmPasswordInput';
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';

export type ResetInputs = {
    password: string;
    confirm_password: string;
}

const ResetPasswordForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<ResetInputs>();

    const handleFormSubmit: SubmitHandler<ResetInputs> = (data) => {
        if (data?.password !== data?.confirm_password) return
    }

    return (
        <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-normal font-lastica text-black uppercase text-center">
                Aristocar
            </h1>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold font-poppins text-primary capitalize text-center mt-4">
                Set New Password
            </h3>

            <form onSubmit={handleSubmit(handleFormSubmit)} className="my-10 flex flex-col gap-4 w-4/5 mx-auto">
                
                <PasswordInput register={register} errors={errors} />
                <ConfirmPasswordInput register={register} errors={errors} watch={watch} />

                <center>
                    <button type='submit' className='bg-primary text-secondary font-poppins font-medium px-6 py-3 rounded text-base hover:bg-opacity-85 duration-200'>Submit</button>
                </center>

            </form>
        </div>
    );
};


export default ResetPasswordForm;
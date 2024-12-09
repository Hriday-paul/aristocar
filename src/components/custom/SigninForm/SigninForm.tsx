'use client'
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import PasswordInput from './PasswordInput';

export type SignInInputs = {
    email_user: string,
    password: string;
}

const SigninForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInInputs>();

    const handleFormSubmit: SubmitHandler<SignInInputs> = (data) => {
        console.log(data)
    }

    return (
        <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-normal font-lastica text-black uppercase text-center">
                Aristocar
            </h1>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold font-poppins text-primary capitalize text-center mt-4">
                Login to Aristocar
            </h3>

            <form onSubmit={handleSubmit(handleFormSubmit)} className="my-10 flex flex-col gap-4 w-4/5 mx-auto">
                <div className="w-full mx-auto">
                    <label htmlFor='username' className="mb-1.5 block text-black dark:text-white font-poppins">
                        Email or Username
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <input
                        type="text"
                        id='username'
                        {...register("email_user", { required: true })}
                        placeholder="Email or Username"
                        className={`w-full rounded border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input  font-poppins placeholder:font-poppins ${errors?.email_user ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                    />
                    {errors?.email_user && <p className="text-red-500 text-sm col-span-2">{errors?.email_user?.message}</p>}
                </div>

                <PasswordInput register={register} errors={errors} />

                <Link href={'/forgot-password'} className='underline underline-offset-2 font-medium font-poppins'>Forgot Password</Link>

                <p className='text-center text-xl font-poppins font-bold'>OR</p>

                <button type='button' className="w-full mx-auto border border-strokeinput py-2.5 px-4 items-center flex flex-row justify-center gap-x-3 rounded-xl hover:bg-slate-100 duration-200 cursor-pointer outline-none">
                    <FcGoogle className='text-3xl' />
                    <p className='text-lg font-satoshi text-primary text-center'>Continue with Google</p>
                </button>

                <center>
                    <button type='submit' className='bg-primary text-secondary font-poppins font-medium px-6 py-3 rounded text-base hover:bg-opacity-85 duration-200'>Sign in</button>
                </center>

                <p className='text-center text-primary font-satoshi text-lg'>
                    <span className=''>New to Aristocar ?</span>
                    <Link href={'/signup'} className='underline underline-offset-2 decoration-2 font-semibold'> Sign Up</Link>
                </p>

            </form>
        </div>
    );
};

SigninForm.displayName = "SigninForm"

export default SigninForm;
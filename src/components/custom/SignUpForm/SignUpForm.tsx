'use client'
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import PasswordInput from './PasswordInput';
import ConfirmPasswordInput from './ConfirmPasswordInput';
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';

export type Inputs = {
    username: string,
    email: string;
    password: string;
    confirm_password: string;
}

const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
        if (data?.password !== data?.confirm_password) return
    }

    return (
        <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-normal font-lastica text-black uppercase text-center">
                Aristocar
            </h1>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold font-poppins text-primary capitalize text-center mt-4">
                Register to Aristocar
            </h3>

            <form onSubmit={handleSubmit(handleFormSubmit)} className="my-10 flex flex-col gap-4 w-4/5 mx-auto">
                <div className="w-full mx-auto">
                    <label htmlFor='username' className="mb-1.5 block text-black dark:text-white font-poppins">
                        Username
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <input
                        type="text"
                        id='username'
                        {...register("username", { required: true, minLength: { value: 3, message: "username minimum 3 character" } })}
                        placeholder="Username"
                        className={`w-full rounded border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input  font-poppins placeholder:font-poppins ${errors?.username ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                    />
                    {errors?.username && <p className="text-red-500 text-sm col-span-2">{errors?.username?.message}</p>}
                </div>
                <div className="w-full mx-auto">
                    <label htmlFor='email' className="mb-1.5 block text-black dark:text-white font-poppins">
                        Email
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <input
                        type="email"
                        id='email'
                        {...register("email", {
                            required: true, pattern: {
                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: 'email invalid'
                            }
                        })}
                        placeholder="Email"
                        className={`w-full rounded border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.email ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                    />
                    {errors?.email && <p className="text-red-500 text-sm col-span-2">{errors?.email?.message}</p>}
                </div>

                <PasswordInput register={register} errors={errors} />
                <ConfirmPasswordInput register={register} errors={errors} watch={watch} />

                <p className='text-center text-xl font-poppins font-bold'>OR</p>

                <button type='button' className="w-full mx-auto border border-strokeinput py-2.5 px-4 items-center flex flex-row justify-center gap-x-3 rounded-xl hover:bg-slate-100 duration-200 cursor-pointer outline-none">
                    <FcGoogle className='text-3xl' />
                    <p className='text-lg font-satoshi text-primary text-center'>Continue with Google</p>
                </button>

                <center>
                    <button type='submit' className='bg-primary text-secondary font-poppins font-medium px-6 py-3 rounded text-base hover:bg-opacity-85 duration-200'>Sign up</button>
                </center>

                <p className='text-center text-primary font-satoshi text-lg'>
                    <span className=''>Already have an account?</span>
                    <Link href={'/signin'} className='underline underline-offset-2 decoration-2 font-semibold'> Sign In</Link>
                </p>

            </form>
        </div>
    );
};

SignUpForm.displayName = "SignUpForm"

export default SignUpForm;
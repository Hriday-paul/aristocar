'use client'
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import PasswordInput from './PasswordInput';
import ConfirmPasswordInput from './ConfirmPasswordInput';
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import { useRegisterUserMutation } from '@/redux/features/AuthApi';
import { toast } from 'sonner'
import { ImSpinner2 } from "react-icons/im";
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie'

export type Inputs = {
    username: string,
    email: string;
    password: string;
    confirm_password: string;
    userType: 'user' | 'dealer'
}

const SignUpForm = () => {
    const [postUser, { isLoading }] = useRegisterUserMutation();
    const navig = useRouter();
    const [_, setCookie] = useCookies(['token']);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<Inputs>({
        defaultValues: {
            userType: "user"
        }
    });

    const handleFormSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            if (data?.password !== data?.confirm_password) return

            const res = await postUser({ data: { name: data?.username, email: data?.email, password: data.password, role: data?.userType } }).unwrap();

            toast.success(res?.message || 'Signup successfully');
            reset({ userType: 'user' });

            setCookie('token', res?.data?.otpToken?.token, {
                httpOnly: false,
                maxAge: 4 * 60, // 4 minutes
                path: '/',
                sameSite: 'lax',
                secure: process.env.production === 'production',
            });

            navig.push('/otp-varify')

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
                Register to Aristocar
            </h3>


            <form onSubmit={handleSubmit(handleFormSubmit)} className="my-5 flex flex-col gap-4 w-4/5 mx-auto">

                {/* -------------------check box---------------------- */}
                <div className="flex gap-10 justify-center">
                    <div className="inline-flex items-center">
                        <label className="relative flex items-center cursor-pointer" htmlFor="user">
                            <input {...register("userType", { required: true })} value='user' type="radio" className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all" id="user" />
                            <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            </span>
                        </label>
                        <label className="ml-2 text-primary cursor-pointer text-base font-poppins" htmlFor="user">User</label>
                    </div>

                    <div className="inline-flex items-center">
                        <label className="relative flex items-center cursor-pointer" htmlFor="dealer">
                            <input {...register("userType", { required: true })} value='dealer' type="radio" className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all" id="dealer" />
                            <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            </span>
                        </label>
                        <label className="ml-2 text-primary cursor-pointer text-base font-poppins" htmlFor="dealer">dealer</label>
                    </div>
                </div>


                {/* ------------------ another form---------------- */}
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
                    <button type='submit' disabled={isLoading} className='bg-primary text-secondary font-poppins font-medium px-6 py-3 rounded text-base hover:bg-opacity-85 duration-200 flex flex-row gap-x-2 items-center disabled:bg-opacity-60'>
                        {isLoading && < ImSpinner2 className="text-lg text-white animate-spin" />}
                        <span>{isLoading ? 'Loading...' : 'Sign Up'}</span>
                    </button>
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
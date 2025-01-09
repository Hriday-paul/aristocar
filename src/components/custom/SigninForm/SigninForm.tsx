'use client'
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import PasswordInput from './PasswordInput';
import { useLoginUserMutation } from '@/redux/features/AuthApi';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'sonner';
import { useCookies } from 'react-cookie';
import { ImSpinner2 } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { addUserDetails } from '@/redux/slice/userSlice';
import { setToLocalStorage } from '@/utils/local-storage';

export type SignInInputs = {
    email: string,
    password: string;
}

const SigninForm = () => {
    const [postSignIn, { isLoading }] = useLoginUserMutation()
    const navig = useRouter();
    const [_, setCookie] = useCookies(['accessToken', 'refreshToken']);
    const goingRout = useSearchParams().get('next') || '/';
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<SignInInputs>();

    const handleFormSubmit: SubmitHandler<SignInInputs> = async (data) => {
        try {

            const res = await postSignIn(data).unwrap();

            toast.success(res?.message || 'Signin successfully');
            reset();

            setToLocalStorage("accessToken", res?.data?.accessToken);

            setCookie('accessToken', res?.data?.accessToken, {
                httpOnly: false,
                maxAge: 14 * 24 * 60 * 60, // 7 days
                path: '/',
                sameSite: 'lax',
                secure: process.env.production === 'production',
            });
            setCookie('refreshToken', res?.data?.refreshToken, {
                httpOnly: false,
                maxAge: 14 * 24 * 60 * 60, // 7 days
                path: '/',
                sameSite: 'lax',
                secure: process.env.production === 'production',
            });

            dispatch(addUserDetails({
                name: res?.data?.user?.name,
                email: res?.data?.user?.email,
                address: res?.data?.user?.address || '',
                gender: res?.data?.user?.gender || '',
                phoneNumber: res?.data?.user?.phoneNumber || '',
                image: res?.data?.user?.image || '',
                role: res?.data?.user?.role,
            }))

            navig.push(goingRout)

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
                Login to Aristocar
            </h3>

            <form onSubmit={handleSubmit(handleFormSubmit)} className="my-10 flex flex-col gap-4 w-4/5 mx-auto">
                <div className="w-full mx-auto">
                    <label htmlFor='username' className="mb-1.5 block text-black dark:text-white font-poppins">
                        Email
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <input
                        type="text"
                        id='username'
                        {...register("email", { required: true })}
                        placeholder="Email"
                        className={`w-full rounded border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input  font-poppins placeholder:font-poppins ${errors?.email ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                    />
                    {errors?.email && <p className="text-red-500 text-sm col-span-2">{errors?.email?.message}</p>}
                </div>

                <PasswordInput register={register} errors={errors} />

                <Link href={'/forgot-password'} className='underline underline-offset-2 font-medium font-poppins'>Forgot Password</Link>

                <p className='text-center text-xl font-poppins font-bold'>OR</p>

                <button type='button' className="w-full mx-auto border border-strokeinput py-2.5 px-4 items-center flex flex-row justify-center gap-x-3 rounded-xl hover:bg-slate-100 duration-200 cursor-pointer outline-none">
                    <FcGoogle className='text-3xl' />
                    <p className='text-lg font-satoshi text-primary text-center'>Continue with Google</p>
                </button>

                <center>
                    <center>
                        <button type='submit' disabled={isLoading} className='bg-primary text-secondary font-poppins font-medium px-6 py-3 rounded text-base hover:bg-opacity-85 duration-200 flex flex-row gap-x-2 items-center disabled:bg-opacity-60'>
                            {isLoading && < ImSpinner2 className="text-lg text-white animate-spin" />}
                            <span>{isLoading ? 'Loading...' : 'Sign in'}</span>
                        </button>
                    </center>
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
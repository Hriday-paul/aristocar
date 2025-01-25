'use client'
import React, { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import PasswordInput from './PasswordInput';
import ConfirmPasswordInput from './ConfirmPasswordInput';
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import { useLoginUserMutation, useRegisterUserMutation } from '@/redux/features/AuthApi';
import { toast } from 'sonner'
import { ImSpinner2 } from "react-icons/im";
import { useRouter, useSearchParams } from 'next/navigation';
import { useCookies } from 'react-cookie'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { countries } from '@/utils/Default';
import { GoogleLogin } from '@/utils/LoginAction';
import { useDispatch } from 'react-redux';
import { addUserDetails } from '@/redux/slice/userSlice';

export type Inputs = {
    username: string,
    email: string;
    password: string;
    confirm_password: string;
    userType: 'user' | 'dealer',
    vatId?: string,
    street?: string,
    city?: string,
    country?: string,
    postalCode?: string,
    company_name?: string,
    dealership?: string
}

const SignUpForm = ({ txt }: { txt: { [key: string]: string } }) => {
    const [postUser, { isLoading }] = useRegisterUserMutation();
    const [postGoogleSignIn, { isLoading: googleLoading }] = useLoginUserMutation();
    const navig = useRouter();
    const [_, setCookie] = useCookies(['token', 'accessToken', 'refreshToken']);
    const dispatch = useDispatch();
    const goingRout = useSearchParams().get('next') || '/';

    const {
        register,
        handleSubmit,
        watch,
        control,
        reset,
        formState: { errors },
    } = useForm<Inputs>({
        defaultValues: {
            userType: "user"
        }
    });

    const handleFormSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            if (data?.password !== data?.confirm_password) return;

            const req_body = data?.userType == 'user' ?
                { name: data?.username, email: data?.email, password: data.password, role: data?.userType }
                :
                { name: data?.username, email: data?.email, password: data.password, role: data?.userType, dealer_address: { city: data?.city, country: data?.country, post_code: data?.postalCode, street: data?.street, vat_id: data?.vatId }, companyName: data?.company_name, dealership: data?.dealership }

            const res = await postUser({ data: req_body }).unwrap();

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

    const handleGoogleLogin = async () => {
        try {
            const { displayName, email, photoURL } = await GoogleLogin()
            const res = await postGoogleSignIn({ email: email || '', name: displayName || '', image: photoURL || '', isGoogleLogin: true, role: 'user', password: "" }).unwrap()

            toast.success(res?.message || 'Signin successfully');
            reset();

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
                {txt?.title} Aristocar
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
                        <label className="ml-2 text-primary cursor-pointer text-base font-poppins" htmlFor="user">{txt?.user}</label>
                    </div>

                    <div className="inline-flex items-center">
                        <label className="relative flex items-center cursor-pointer" htmlFor="dealer">
                            <input {...register("userType", { required: true })} value='dealer' type="radio" className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all" id="dealer" />
                            <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            </span>
                        </label>
                        <label className="ml-2 text-primary cursor-pointer text-base font-poppins" htmlFor="dealer">{txt?.dealer}</label>
                    </div>
                </div>


                {/* ------------------ another form---------------- */}
                <div className="w-full mx-auto">
                    <label htmlFor='username' className="mb-1.5 block text-black dark:text-white font-poppins">
                        {txt?.user_name}
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

                {/* -----------------------email--------------------------- */}
                <div className="w-full mx-auto">
                    <label htmlFor='email' className="mb-1.5 block text-black dark:text-white font-poppins">
                        {txt?.email}
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

                {/* ----------------------company name----------------------- */}
                {watch("userType") === 'dealer' && <div className="w-full mx-auto">
                    <label htmlFor='company' className="mb-1.5 block text-black font-poppins text-sm">
                        {txt?.company_name}
                        <span className='text-danger text-xs ml-1'>*</span>
                    </label>
                    <input
                        type="text"
                        id='company'
                        {...register("company_name", { required: watch("userType") === 'dealer' })}
                        placeholder="Company name"
                        className={`w-full rounded border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.company_name ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                    />
                    {errors?.company_name && <p className="text-red-500 text-sm col-span-2">{errors?.company_name?.message}</p>}
                </div>}

                {/* ----------------------dealership name---------------------- */}
                {watch("userType") === 'dealer' && <div className="w-full mx-auto">
                    <label htmlFor='dealership' className="mb-1.5 block text-black font-poppins text-sm">
                        {txt?.dealership_name}
                        <span className='text-danger text-xs ml-1'>*</span>
                    </label>
                    <input
                        type="text"
                        id='dealership'
                        {...register("dealership", { required: watch("userType") === 'dealer' })}
                        placeholder="Dealership name"
                        className={`w-full rounded border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.dealership ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                    />
                    {errors?.dealership && <p className="text-red-500 text-sm col-span-2">{errors?.dealership?.message}</p>}
                </div>}

                {/* ----------------------vat id----------------------- */}
                {watch("userType") === 'dealer' && <div className="w-full mx-auto">
                    <label htmlFor='vatid' className="mb-1.5 block text-black font-poppins text-sm">
                        {txt?.vat_id}
                        <span className='text-danger text-xs ml-1'></span>
                    </label>
                    <input
                        type="text"
                        id='vatid'
                        {...register("vatId")}
                        placeholder="Vat id"
                        className={`w-full rounded border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.vatId ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                    />
                    {errors?.vatId && <p className="text-red-500 text-sm col-span-2">{errors?.vatId?.message}</p>}
                </div>}


                {/* ------------------------city & country----------- */}
                {
                    watch("userType") === 'dealer' &&
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className="w-full mx-auto">
                            <label htmlFor='Country' className="mb-1.5 block text-black dark:text-white font-poppins">
                                {txt?.country}
                                <span className='text-danger text-xs ml-1'>*</span>
                            </label>
                            {/* <input
                                type="text"
                                id='Country'
                                {...register("country", { required: watch("userType") === 'dealer' })}
                                placeholder="Country"
                                className={`w-full rounded border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input  font-poppins placeholder:font-poppins ${errors?.country ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                            /> */}
                            <Controller
                                name={'country'}
                                control={control}
                                rules={{ required: watch("userType") === 'dealer' }}
                                render={({ field }) => (
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger className={`px-4 py-3 bg-transparent text-sm font-poppins w-full rounded text-black border ${errors?.country ? " border-danger" : "border-strokeinput"}`}>
                                            <SelectValue placeholder={"Select Country"} />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-sm text-sm font-poppins">
                                            {
                                                countries?.map(item => {
                                                    return <SelectItem key={item} value={`${item}`} className="h-10 font-satoshi text-base font-medium">{item}</SelectItem>
                                                })
                                            }
                                        </SelectContent>
                                    </Select>
                                )} >

                            </Controller>
                            {errors?.country && <p className="text-red-500 text-sm col-span-2">{errors?.country?.message}</p>}
                        </div>

                        <div className="w-full mx-auto">
                            <label htmlFor='city' className="mb-1.5 block text-black dark:text-white font-poppins">
                                {txt?.city}
                                <span className='text-danger text-xs ml-1'>*</span>
                            </label>
                            <input
                                type="text"
                                id='city'
                                {...register("city", { required: watch("userType") === 'dealer' })}
                                placeholder="City"
                                className={`w-full rounded border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input  font-poppins placeholder:font-poppins ${errors?.city ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                            />
                            {errors?.city && <p className="text-red-500 text-sm col-span-2">{errors?.city?.message}</p>}
                        </div>
                    </div>
                }

                {/* ----------------------street & postcode---------------- */}
                {watch("userType") === 'dealer' && <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className="w-full mx-auto">
                        <label htmlFor='street' className="mb-1.5 block text-black dark:text-white font-poppins">
                            {txt?.street}
                            <span className="text-red-500 text-base ml-1">*</span>
                        </label>
                        <input
                            type="text"
                            id='street'
                            {...register("street", { required: watch("userType") === 'dealer', minLength: { value: 3, message: "Street minimum 3 character" } })}
                            placeholder="Street"
                            className={`w-full rounded border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input  font-poppins placeholder:font-poppins ${errors?.street ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                        />
                        {errors?.street && <p className="text-red-500 text-sm col-span-2">{errors?.street?.message}</p>}
                    </div>
                    <div className="w-full mx-auto">
                        <label htmlFor='post' className="mb-1.5 block text-black dark:text-white font-poppins">
                            {txt?.street}
                            <span className="text-red-500 text-base ml-1">*</span>
                        </label>
                        <input
                            type="text"
                            id='post'
                            {...register("postalCode", { required: watch("userType") === 'dealer' })}
                            placeholder="Post code"
                            className={`w-full rounded border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input  font-poppins placeholder:font-poppins ${errors?.postalCode ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                        />
                        {errors?.postalCode && <p className="text-red-500 text-sm col-span-2">{errors?.postalCode?.message}</p>}
                    </div>
                </div>}

                <PasswordInput register={register} errors={errors} txt={txt?.password} />
                <ConfirmPasswordInput register={register} errors={errors} watch={watch} txt={txt?.confirm_password} />

                {watch("userType") != 'dealer' && <section>
                    <p className='text-center text-xl font-poppins font-bold'>{txt?.or}</p>
                    <button onClick={handleGoogleLogin} type='button' className="w-full mx-auto border border-strokeinput py-2.5 px-4 items-center flex flex-row justify-center gap-x-3 rounded-xl hover:bg-slate-100 duration-200 cursor-pointer outline-none">
                        <FcGoogle className='text-3xl' />
                        <p className='text-lg font-satoshi text-primary text-center'>{txt?.social}</p>
                    </button>
                </section>}

                <center>
                    <button type='submit' disabled={isLoading || googleLoading} className='bg-primary text-secondary font-poppins font-medium px-6 py-3 rounded text-base hover:bg-opacity-85 duration-200 flex flex-row gap-x-2 items-center disabled:bg-opacity-60'>
                        {(isLoading || googleLoading) && < ImSpinner2 className="text-lg text-white animate-spin" />}
                        <span>{isLoading ? 'Loading...' : txt?.btn}</span>
                    </button>
                </center>

                <p className='text-center text-primary font-satoshi text-lg'>
                    <span className=''>{txt?.linktitle}</span>
                    <Link href={'/signin'} className='underline underline-offset-2 decoration-2 font-semibold'>{txt?.linktext}</Link>
                </p>

            </form>
        </div>
    );
};

SignUpForm.displayName = "SignUpForm"

export default SignUpForm;
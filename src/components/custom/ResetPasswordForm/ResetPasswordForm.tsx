'use client'
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import PasswordInput from './PasswordInput';
import ConfirmPasswordInput from './ConfirmPasswordInput';
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import { useResetPasswordMutation } from '@/redux/features/AuthApi';
import { useCookies } from 'react-cookie';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { ImSpinner2 } from 'react-icons/im';

export type ResetInputs = {
    password: string;
    confirm_password: string;
}

const ResetPasswordForm = ({ txt }: { txt: { [key: string]: string } }) => {
   
    const [postResetPassword, { isLoading }] = useResetPasswordMutation();
    const navig = useRouter();
    const [cookie] = useCookies(['token']);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<ResetInputs>();

    const handleFormSubmit: SubmitHandler<ResetInputs> = async (data) => {
        if (data?.password !== data?.confirm_password) {
            toast.error('Password not match');
            return
        }
        try {
            if (data?.password !== data?.confirm_password) return

            const res = await postResetPassword({ newPassword: data?.password, confirmPassword: data?.confirm_password, token: cookie?.token }).unwrap();

            toast.success(res?.message || 'New Password set successfully');
            reset();

            navig.push('/signin')

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

                <PasswordInput register={register} errors={errors} txt={txt?.input1}/>
                <ConfirmPasswordInput register={register} errors={errors} watch={watch} txt={txt?.input2}/>

                <center>
                    <button type='submit' disabled={isLoading} className='bg-primary text-secondary font-poppins font-medium px-6 py-3 rounded text-base hover:bg-opacity-85 duration-200 flex flex-row gap-x-2 items-center disabled:bg-opacity-60'>
                        {isLoading && < ImSpinner2 className="text-lg text-white animate-spin" />}
                        <span>{isLoading ? 'Loading...' : txt?.btn}</span>
                    </button>
                </center>

            </form>
        </div>
    );
};


export default ResetPasswordForm;
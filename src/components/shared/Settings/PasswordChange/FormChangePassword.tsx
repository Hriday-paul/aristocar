"use client"
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import PasswordInput from './PasswordInput';
import { useChangePasswordMutation } from '@/redux/features/AuthApi';
import { toast } from 'sonner';
import { ImSpinner2 } from 'react-icons/im';

type InputType = {
    current_password: string,
    new_password: string,
    confirm_password: string
}
const FormChangePassword = ({ txt }: { txt: { [key: string]: string } }) => {
    const [postChangePassword, { isLoading }] = useChangePasswordMutation();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<InputType>();

    const handleFormSubmit: SubmitHandler<InputType> = async (data) => {
        try {
            if (data?.new_password !== data?.confirm_password) {
                toast.error('Password not match');
                return;
            }
            const res = await postChangePassword({ oldPassword: data?.current_password, newPassword: data?.new_password, confirmPassword: data?.confirm_password }).unwrap();
            toast.success(res?.message || 'Password update successfully');
            reset();
        } catch (err: any) {
            toast.error(err?.data?.message || 'Something went wrong, try again')
        }
    }

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className='grid grid-cols-2 gap-3'>
            <div className='col-span-2'>
                <PasswordInput
                    name="current_password"
                    label={txt?.current_password}
                    placeholder="Current password"
                    register={register}
                    errors={errors}
                    validationRules={{
                        required: "Current Password is required",
                    }}
                />
            </div>
            <PasswordInput
                name="new_password"
                label={txt?.new_password}
                placeholder="New password"
                register={register}
                errors={errors}
                validationRules={{
                    required: "New Password is required",
                    pattern: {
                        value: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                        message:
                            "Password must include 1 uppercase, 1 number, 1 special character, and 8+ characters.",
                    },
                }}
            />

            <PasswordInput
                name="confirm_password"
                label="Confirm Password"
                placeholder={txt?.confirm_password}
                register={register}
                errors={errors}
                validationRules={{
                    required: "Confirm Password is required",
                    pattern: {
                        value: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                        message:
                            "Password must include 1 uppercase, 1 number, 1 special character, and 8+ characters.",
                    },
                }}
            />

            <button type='submit' className='bg-primary text-secondary py-2.5 px-4 w-full hover:bg-opacity-90 font-poppins duration-200 rounded-sm col-span-2 flex flex-row items-center justify-center gap-x-1'>
                {isLoading && < ImSpinner2 className="text-base text-white animate-spin" />}
                <span>{isLoading ? 'Loading...' : txt?.change_password}</span>
            </button>


        </form>
    );
};

export default FormChangePassword;
"use client"
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import PasswordInput from './PasswordInput';

type InputType = {
    current_password: string,
    new_password: string,
    confirm_password: string
}
const FormChangePassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputType>();

    const handleFormSubmit: SubmitHandler<InputType> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className='grid grid-cols-2 gap-3'>
            <div className='col-span-2'>
                <PasswordInput
                    name="current_password"
                    label="Current Password"
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
                label="New Password"
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
                placeholder="Confirm password"
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

            <button type='submit' className='bg-primary text-secondary py-2.5 px-4 w-full hover:bg-opacity-90 font-poppins duration-200 rounded-sm col-span-2'>Change Password</button>


        </form>
    );
};

export default FormChangePassword;
"use client"
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export type dellerInputType = {
    first_name: string,
    last_name?: string,
    email: string;
    message: string;
}
const ContactForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<dellerInputType>();

    const handleFormSubmit: SubmitHandler<dellerInputType> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className='my-3'>

            <div className='flex flex-col lg:flex-row gap-5'>
                <div className="w-full lg:w-1/2 mx-auto">
                    <label htmlFor='Fullname' className="mb-1.5 block text-black dark:text-white font-poppins">
                        Full name
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <input
                        type="text"
                        id='Fullname'
                        {...register("first_name", { required: true, minLength: { value: 3, message: "first name minimum 2 character" } })}
                        placeholder="First name"
                        className={`w-full rounded-sm bg-white border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.first_name ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                    />
                    {errors?.first_name && <p className="text-red-500 text-sm col-span-2">{errors?.first_name?.message}</p>}
                </div>
                <div className="w-full lg:w-1/2 mx-auto">
                    <label htmlFor='lastname' className="mb-1.5 block text-black dark:text-white font-poppins">
                        Last name
                    </label>
                    <input
                        type="text"
                        id='lastname'
                        {...register("last_name")}
                        placeholder="Last name"
                        className={`w-full rounded-sm bg-white border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.last_name ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                    />
                    {errors?.last_name && <p className="text-red-500 text-sm col-span-2">{errors?.last_name?.message}</p>}
                </div>

            </div>
            <div className="w-full mx-auto my-5">
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
                    className={`w-full rounded-sm bg-white border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.email ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                />
                {errors?.email && <p className="text-red-500 text-sm col-span-2">{errors?.email?.message}</p>}
            </div>
            <div className="w-full mx-auto">
                <label htmlFor='message' className="mb-1.5 block text-black dark:text-white font-poppins">
                    Message
                    <span className="text-red-500 text-base ml-1">*</span>
                </label>
                <textarea
                    id='message'
                    rows={5}
                    {...register("message", { required: true, minLength: { value: 10, message: "message minimum 10 character required" } })}
                    placeholder="Write something...."
                    className={`w-full rounded-sm bg-white border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.message ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                />
                {errors?.message && <p className="text-red-500 text-sm col-span-2">{errors?.message?.message}</p>}
            </div>
            <button className='bg-primary py-3 text-center font-poppins text-secondary rounded-sm w-full mt-5 hover:bg-opacity-90 duration-200'>Submit</button>
        </form>
    );
};

ContactForm.displayName = "ContactForm"
export default ContactForm;
'use client'
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export type profileInputType = {
    full_name: string,
    location?: string,
    email: string;
    phone?: string;
}

const AccountSettings = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<profileInputType>();

    const handleFormSubmit: SubmitHandler<profileInputType> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className=''>
            <div className="w-full mx-auto mb-3">
                <label htmlFor='Fullname' className="mb-1.5 block text-black dark:text-white font-poppins text-sm">
                    Full name
                </label>
                <input
                    type="text"
                    id='Fullname'
                    {...register("full_name", { required: true, minLength: { value: 3, message: "Full name minimum 2 character" } })}
                    placeholder="Full name"
                    className={`text-sm w-full rounded-sm bg-white border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.full_name ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                />
                {errors?.full_name && <p className="text-red-500 text-sm col-span-2">{errors?.full_name?.message}</p>}
            </div>
            <div className="w-full mx-auto mb-3">
                <label htmlFor='address' className="mb-1.5 block text-black dark:text-white font-poppins text-sm">
                    Location
                </label>
                <input
                    type="text"
                    id='address'
                    {...register("location")}
                    placeholder="Location"
                    className={`text-sm w-full rounded-sm bg-white border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.location ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                />
                {errors?.location && <p className="text-red-500 text-sm col-span-2">{errors?.location?.message}</p>}
            </div>
            <div className="w-full mx-auto mb-3">
                <label htmlFor='email' className="mb-1.5 block text-black font-poppins text-sm">
                    Email
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
                    className={`w-full text-sm rounded-sm bg-white border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.email ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                />
                {errors?.email && <p className="text-red-500 text-sm col-span-2">{errors?.email?.message}</p>}
            </div>
            <div className="w-full mx-auto mb-3">
                <label htmlFor='phone' className="mb-1.5 block text-black font-poppins text-sm">
                    Phone Number
                </label>
                <input
                    type="number"
                    id='phone'
                    {...register("phone", {
                        pattern: {
                            value: /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, message: 'invalid phone'
                        }
                    })}
                    placeholder="Phone Number"
                    className={`w-full text-sm rounded-sm bg-white border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.phone ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                />
                {errors?.phone && <p className="text-red-500 text-sm col-span-2">{errors?.phone?.message}</p>}
            </div>
            <button className='bg-primary text-secondary py-2.5 px-4 w-full hover:bg-opacity-90 font-poppins duration-200 rounded-sm'>Save Changes</button>
        </form>
    );
};

export default AccountSettings;
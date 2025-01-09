"use client"
import { useContact_with_dealerMutation } from '@/redux/features/DealerApi';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CiSquareQuestion } from 'react-icons/ci';
import { ImSpinner2 } from 'react-icons/im';
import { toast } from 'sonner';

export type dellerInputType = {
    fullname: string,
    email: string;
    phone: string;
    message: string;
}
const DellerContactForm = ({ carId }: { carId ?: string }) => {
    const [postForm, { isLoading }] = useContact_with_dealerMutation();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<dellerInputType>();

    const handleFormSubmit: SubmitHandler<dellerInputType> = async (data) => {
        try {
            const res = await postForm({ firstName: data?.fullname, lastName: '', email: data?.email, description: data?.message, carId, phone: data?.phone }).unwrap();

            toast.success(res?.message || 'Message send successfully');
            reset();

        } catch (err: any) {
            toast.error(err?.data?.message || 'Something went wrong, try again');
        }
    }

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className='my-10'>

            <h6 className='my-5 flex flex-row gap-x-2 items-center'>
                <CiSquareQuestion className='text-2xl lg:text-3xl text-primary' />
                <span className='font-lastica text-lg lg:text-xl text-primary'>Ask a Question</span>
            </h6>

            <div className='flex flex-col lg:flex-row gap-5'>
                <div className="w-full lg:w-1/2 mx-auto">
                    <label htmlFor='Fullname' className="mb-1.5 block text-black dark:text-white font-poppins">
                        Full name
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <input
                        type="text"
                        id='Fullname'
                        {...register("fullname", { required: true, minLength: { value: 3, message: "name minimum 3 character" } })}
                        placeholder="Name"
                        className={`w-full rounded-sm bg-white border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.fullname ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                    />
                    {errors?.fullname && <p className="text-red-500 text-sm col-span-2">{errors?.fullname?.message}</p>}
                </div>
                <div className="w-full lg:w-1/2 mx-auto">
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
            </div>
            <div className="w-full mx-auto my-5">
                <label htmlFor='phone' className="mb-1.5 block text-black dark:text-white font-poppins">
                    Phone
                    <span className="text-red-500 text-base ml-1">*</span>
                </label>
                <input
                    type="number"
                    id='phone'
                    {...register("phone", {
                        required: true, pattern: {
                            value: /(?=.*?[0-9])/, message: 'phone number invalid'
                        }
                    })}
                    placeholder="Phone"
                    className={`w-full rounded-sm bg-white border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.phone ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                />
                {errors?.phone && <p className="text-red-500 text-sm col-span-2">{errors?.phone?.message}</p>}
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

            <button type='submit' disabled={isLoading} className='bg-primary py-3 font-poppins text-secondary rounded-sm w-full mt-5 hover:bg-opacity-90 duration-200 flex flex-row gap-x-2 items-center justify-center disabled:bg-opacity-60'>
                {isLoading && < ImSpinner2 className="text-lg text-white animate-spin" />}
                <span>{isLoading ? 'Loading...' : 'Submit'}</span>
            </button>

        </form>
    );
};

export default DellerContactForm;
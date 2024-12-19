"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { GoPlus } from "react-icons/go";
import Selection from './Selection';

export type addCarformType = {
    car_name: string,
    details: string,
    brand: string,
    model: string;
    country: string;
    price: number,
    power: number,
    power_unit: string,
    mileage: number,
    mileage_unit: string,
    vin: number,
    body_style: string,
    interior_color: string,
    exterior_color: string,
    fuel_type: string
}

const cars = ['https://res.cloudinary.com/devlj6p7h/image/upload/v1733563021/bdcalling/lxd8blyjqspnscymgvbx.png', "https://res.cloudinary.com/devlj6p7h/image/upload/v1733563021/bdcalling/b6xpffqsyz3wpfyfxrto.png", "https://res.cloudinary.com/devlj6p7h/image/upload/v1733563021/bdcalling/ogxmdzhvui9rx42e9rme.png"]

const AddForm = React.memo(() => {
    const [images, setImages] = useState<File[]>([]);

    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm<addCarformType>({
        defaultValues: {
            power_unit: "Horsepower",
            mileage_unit: "KM"
        }
    });

    const handleFormSubmit: SubmitHandler<addCarformType> = (data) => {
        console.log(data)
    }

    const fileonChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files as File[] | null;
        if (!fileList) {
            return;
        }

        setImages(prev => [...prev, fileList[0]])
    };

    const specification = {
        brand: [
            'SUV', "BMW", 'AUDI', 'TATA', "AKIJ", "Ferrari"
        ],
        model: ["A-Class", "C-Class", "CLA", "E-Class", "EQE", "EQE SUV", "AMG SL", "V-CLASS/VAINO"],
        country: ['Bangladesh', 'Europe', "Africa", 'Austrelia'],
        power_units: ['Horsepower', "Kilowatt", "Torque", "Metric Horsepower"],
        mileage: ['100km', '200km', '300km', '400km', '500km', '600km', '800km', '1000km'],
        mileage_units: ['KM', 'Mile'],
        bodyStyles: ["sedan", 'Suv', "Coupe", "BMW", "Akij"],
        year: [2024, 2023, 2022, 2021, 2020, 2019, 2018],
        drive_config: ["LHD", "RHD"],
        exteriorColors: ['Black', "White", "Blue", 'Gray', 'Green', 'Olive'],
        interiorColors: ['Black', "White", "Blue", 'Gray', 'Green', 'Olive'],
        fuel_type: ['Gas', "Petrol", "Octen", "Hybrid", "Electric"]
    }

    return (
        <div>
            {/* -------------------iamges----------------- */}
            <section>
                <p className="mb-1.5 block text-primary font-poppins text-base text-left">Attach Images</p>
                <div className='flex flex-row gap-x-2 items-center'>
                    {
                        images?.map((img, indx) => {
                            return <div key={indx} className='relative w-20 h-20'>
                                <Image src={URL.createObjectURL(img)} fill className='h-full w-full object-cover rounded-md' alt='uploaded car' />
                            </div>
                        })
                    }
                    <label htmlFor='addImage' className='h-20 w-20 rounded-md border-2 border-dotted border-strokeinput flex flex-col justify-center items-center'>
                        <GoPlus className='text-orange-500 text-base' />
                        <p className="mb-1.5 block text-orange-500 font-poppins text-xs text-center">Add Image</p>
                    </label>
                    <input onChange={fileonChange} type="file" name="addImage" id="addImage" className='hidden' accept="image/*" multiple={false} />
                </div>
            </section>

            {/* --------------------- form --------------------- */}

            <form onSubmit={handleSubmit(handleFormSubmit)} className='mt-5 text-left'>
                {/* ---------name------------ */}
                <div className="w-full mx-auto mb-3">
                    <label htmlFor='Car name' className="mb-1.5 block text-black dark:text-white font-poppins">
                        Car name
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <input
                        type="text"
                        id='Car name'
                        {...register("car_name", { required: true, minLength: { value: 3, message: "car name minimum 2 character" } })}
                        placeholder="car name"
                        className={`w-full rounded-sm border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.car_name ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                    />
                    {errors?.car_name && <p className="text-red-500 text-sm col-span-2">{errors?.car_name?.message}</p>}
                </div>

                {/* ----------details-------------- */}
                <div className="w-full mx-auto mb-3">
                    <label htmlFor='Details' className="mb-1.5 block text-black dark:text-white font-poppins">
                        Details
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <textarea
                        id='Details'
                        {...register("details", { required: true, minLength: { value: 10, message: "car details minimum 10 character" } })}
                        placeholder="write car details here..."
                        rows={4}
                        className={`w-full rounded-sm border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins  ${errors?.details ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                    />
                    {errors?.details && <p className="text-red-500 text-sm col-span-2">{errors?.details?.message}</p>}
                </div>

                {/* ------------------------brand------------------ */}
                <div className="w-full mx-auto mb-3">
                    <label htmlFor='brand' className="mb-1.5 block text-black dark:text-white font-poppins">
                        Brand
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <Selection
                        name="brand"
                        placeholder="Select Brand"
                        items={specification?.brand}
                        control={control}
                        errors={errors}
                        validationRules={{
                            required: true,
                        }}
                    />
                    {errors?.brand && <p className="text-red-500 text-sm col-span-2">{errors?.brand?.message}</p>}
                </div>

                {/* -----------------model--------------------- */}
                <div className="w-full mx-auto mb-3">
                    <label htmlFor='model' className="mb-1.5 block text-black dark:text-white font-poppins">
                        Model
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <Selection
                        name="model"
                        placeholder="Select Model"
                        items={specification?.model}
                        control={control}
                        errors={errors}
                        validationRules={{
                            required: true,
                        }}
                    />
                    {errors?.model && <p className="text-red-500 text-sm col-span-2">{errors?.model?.message}</p>}
                </div>

                {/* ---------------countryt------------------ */}
                <div className="w-full mx-auto mb-3">
                    <label htmlFor='country' className="mb-1.5 block text-black dark:text-white font-poppins">
                        Country
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <Selection
                        name="country"
                        placeholder="Select Country"
                        items={specification?.country}
                        control={control}
                        errors={errors}
                        validationRules={{
                            required: true,
                        }}
                    />
                    {errors?.country && <p className="text-red-500 text-sm col-span-2">{errors?.country?.message}</p>}
                </div>

                {/* ----------------price---------------- */}
                <div className="w-full mx-auto mb-3">
                    <label htmlFor='Price' className="mb-1.5 block text-black dark:text-white font-poppins">
                        Price
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <input
                        type="number"
                        id='Price'
                        {...register("price", { required: true, min: { value: 1, message: "price minimum 1" }, max: { value: 1000000000, message: 'price maximum 1000000000' } })}
                        placeholder="Price"
                        className={`w-full rounded-sm border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.price ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                    />
                    {errors?.price && <p className="text-red-500 text-sm col-span-2">{errors?.price?.message}</p>}
                </div>

                {/* --------------------------power-------------------- */}
                <div className="w-full mx-auto mb-3">
                    <label htmlFor='power' className="mb-1.5 block text-black dark:text-white font-poppins">
                        Power
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <div className='flex flex-row gap-x-2'>
                        <div className='w-3/4'>
                            <input
                                type="text"
                                id='power'
                                {...register("power", { required: true, min: { value: 0, message: "power minimum 0" }, max: { value: 10000000, message: 'power maximum 10000000' } })}
                                placeholder="Power"
                                className={`w-full rounded-sm border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.power ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                            />
                            {errors?.power && <p className="text-red-500 text-sm col-span-2">{errors?.power?.message}</p>}
                        </div>
                        <div className='w-1/4'>
                            <Selection
                                name="power_unit"
                                placeholder="Power Unit"
                                items={specification?.power_units}
                                control={control}
                                errors={errors}
                                validationRules={{
                                    required: true
                                }}
                            />
                        </div>
                    </div>

                </div>

                {/* --------------mileage------------------ */}
                <div className="w-full mx-auto mb-3">
                    <label htmlFor='Mileage' className="mb-1.5 block text-black dark:text-white font-poppins">
                        Mileage
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <div className='flex flex-row gap-x-2'>
                        <div className='w-3/4'>
                            <input
                                type="text"
                                id='Mileage'
                                {...register("mileage", { required: true, min: { value: 0, message: "Mileage minimum 0" }, max: { value: 10000000, message: 'Mileage maximum 10000000' } })}
                                placeholder="Mileage"
                                className={`w-full rounded-sm border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.mileage ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                            />
                            {errors?.mileage && <p className="text-red-500 text-sm col-span-2">{errors?.mileage?.message}</p>}
                        </div>
                        <div className='w-1/4'>
                            <Selection
                                name="mileage_unit"
                                placeholder="Mileage Unit"
                                items={specification?.mileage_units}
                                control={control}
                                errors={errors}
                                validationRules={{
                                    required: true
                                }}
                            />
                        </div>
                    </div>

                </div>

                {/* -----------------vin ----------------- */}
                <div className="w-full mx-auto mb-3">
                    <label htmlFor='vin' className="mb-1.5 block text-black dark:text-white font-poppins">
                        VIN (Vehicle Information Number)
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <input
                        type="number"
                        id='vin'
                        {...register("vin", { required: true, minLength: { value: 5, message: "vin minimum length 5" } })}
                        placeholder="Vin"
                        className={`w-full rounded-sm border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.vin ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                    />
                    {errors?.vin && <p className="text-red-500 text-sm col-span-2">{errors?.vin?.message}</p>}
                </div>

                {/* -----------------body style-------------- */}
                <div className="mb-4">
                    <p className='mb-2 block text-black dark:text-white font-poppins text-sm'>
                        Body Style
                    </p>
                    <section className='flex flex-row flex-wrap gap-x-5 gap-y-2'>
                        {specification?.bodyStyles?.map((item, indx) => (
                            <div key={indx} className="inline-flex items-center">
                                <Controller
                                    name="body_style"
                                    control={control}
                                    rules={{ required: 'Body style is required' }}
                                    render={({ field }) => (
                                        <label className="flex items-center cursor-pointer relative" htmlFor={item}>
                                            <input
                                                {...field}
                                                type="radio"
                                                value={item}
                                                id={item}
                                                checked={field.value === item}
                                                className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-sm border bg-secondary checked:bg-secondary border-strokedark checked:border-strokedark"
                                            />
                                            <span className="absolute text-primary opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    stroke="currentColor"
                                                    strokeWidth="1"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </label>
                                    )}
                                />
                                <label className="cursor-pointer ml-1.5 text-primary font-poppins text-sm capitalize" htmlFor={item}>
                                    {item}
                                </label>
                            </div>
                        ))}
                        <p className='text-warning text-xs font-poppins mt-1.5 cursor-pointer'>+ add additional</p>
                    </section>
                    {errors?.body_style && <p className="text-red-500 text-sm col-span-2">{errors?.body_style?.message}</p>}
                </div>

                {/* -----------------interior color -------------- */}
                <div className="mb-4">
                    <p className='mb-2 block text-black dark:text-white font-poppins text-sm'>
                        Interior Color
                    </p>
                    <section className='flex flex-row flex-wrap gap-x-5 gap-y-2'>
                        {specification?.interiorColors?.map((item, indx) => (
                            <div key={indx} className="inline-flex items-center">
                                <Controller
                                    name="interior_color"
                                    control={control}
                                    rules={{ required: 'Interior color is required' }}
                                    render={({ field }) => (
                                        <label className="flex items-center cursor-pointer relative" htmlFor={item}>
                                            <input
                                                {...field}
                                                type="radio"
                                                value={item}
                                                id={item}
                                                checked={field.value === item}
                                                className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-sm border bg-secondary checked:bg-secondary border-strokedark checked:border-strokedark"
                                            />
                                            <span className="absolute text-primary opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    stroke="currentColor"
                                                    strokeWidth="1"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </label>
                                    )}
                                />
                                <label className="cursor-pointer ml-1.5 text-primary font-poppins text-sm capitalize" htmlFor={item}>
                                    {item}
                                </label>
                            </div>
                        ))}
                        <p className='text-warning text-xs font-poppins mt-1.5 cursor-pointer'>+ add additional</p>
                    </section>
                    {errors?.interior_color && <p className="text-red-500 text-sm col-span-2">{errors?.interior_color?.message}</p>}
                </div>

                {/* -----------------exterior color -------------- */}
                <div className="mb-4">
                    <p className='mb-2 block text-black dark:text-white font-poppins text-sm'>
                        Exterior Color
                    </p>
                    <section className='flex flex-row flex-wrap gap-x-5 gap-y-2'>
                        {specification?.exteriorColors?.map((item, indx) => (
                            <div key={indx} className="inline-flex items-center">
                                <Controller
                                    name="exterior_color"
                                    control={control}
                                    rules={{ required: 'Exterior color is required' }}
                                    render={({ field }) => (
                                        <label className="flex items-center cursor-pointer relative" htmlFor={item + indx}>
                                            <input
                                                {...field}
                                                type="radio"
                                                value={item}
                                                id={item + indx}
                                                checked={field.value === item}
                                                className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-sm border bg-secondary checked:bg-secondary border-strokedark checked:border-strokedark"
                                            />
                                            <span className="absolute text-primary opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    stroke="currentColor"
                                                    strokeWidth="1"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </label>
                                    )}
                                />
                                <label className="cursor-pointer ml-1.5 text-primary font-poppins text-sm capitalize" htmlFor={item + indx}>
                                    {item}
                                </label>
                            </div>
                        ))}
                        <p className='text-warning text-xs font-poppins mt-1.5 cursor-pointer'>+ add additional</p>
                    </section>
                    {errors?.exterior_color && <p className="text-red-500 text-sm col-span-2">{errors?.exterior_color?.message}</p>}
                </div>

                {/* -----------------fuel type -------------- */}
                <div className="mb-4">
                    <p className='mb-2 block text-black dark:text-white font-poppins text-sm'>
                        Fuel Type
                    </p>
                    <section className='flex flex-row flex-wrap gap-x-5 gap-y-2'>
                        {specification?.fuel_type?.map((item, indx) => (
                            <div key={indx} className="inline-flex items-center">
                                <Controller
                                    name="fuel_type"
                                    control={control}
                                    rules={{ required: 'Fule type is required' }}
                                    render={({ field }) => (
                                        <label className="flex items-center cursor-pointer relative" htmlFor={item}>
                                            <input
                                                {...field}
                                                type="radio"
                                                value={item}
                                                id={item}
                                                checked={field.value === item}
                                                className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-sm border bg-secondary checked:bg-secondary border-strokedark checked:border-strokedark"
                                            />
                                            <span className="absolute text-primary opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    stroke="currentColor"
                                                    strokeWidth="1"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </label>
                                    )}
                                />
                                <label className="cursor-pointer ml-1.5 text-primary font-poppins text-sm capitalize" htmlFor={item}>
                                    {item}
                                </label>
                            </div>
                        ))}
                        <p className='text-warning text-xs font-poppins mt-1.5 cursor-pointer'>+ add additional</p>
                    </section>
                    {errors?.fuel_type && <p className="text-red-500 text-sm col-span-2">{errors?.fuel_type?.message}</p>}
                </div>

                <button type='submit' className='w-full bg-primary text-secondary font-poppins text-base text-center py-2.5 px-4'>Upload</button>
            </form>
        </div>
    );
});

AddForm.displayName = "AddForm"
export default AddForm;
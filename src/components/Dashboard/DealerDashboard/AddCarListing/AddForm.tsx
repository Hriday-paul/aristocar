"use client"
import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { GoPlus } from "react-icons/go";
import Selection from './Selection';
import AddEditionalPopup from './AddEditionalPopup';
import { toast } from 'sonner';
import { useCreateCarMutation } from '@/redux/features/DealerApi';
import { ImSpinner2 } from 'react-icons/im';
import { useAllbrandsQuery, useModels_by_brandQuery } from '@/redux/features/CarsApi';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MdDeleteOutline } from 'react-icons/md';
import { bodyStyles, colors, countries, years } from '@/utils/Default';

export type addCarformType = {
    name: string,
    details: string,
    brand: string,
    model: string;
    country: string;
    price: number,
    power: number,
    powerUnit: string,
    mileage: number,
    mileageUnit: string,
    YearOfManufacture: string,
    vin: string,
    bodyStyle: string,
    interiorColor: string,
    exteriorColor: string,
    fuelType: string,
    Drive: string
}

export type SpecificationsType = {
    brand: string[];
    model: string[];
    country: string[];
    power_units: string[];
    mileage: string[];
    mileage_units: string[];
    bodyStyle: string[];
    year: number[];
    drive_config: string[];
    exteriorColor: string[];
    interiorColor: string[];
    fuelType: string[];
}

const AddForm = React.memo(({ formTxt }: { formTxt: { [key: string]: string } }) => {
    const {
        register,
        handleSubmit,
        control,
        reset,
        watch,
        formState: { errors },
    } = useForm<addCarformType>({
        defaultValues: {
            powerUnit: "Horsepower",
            mileageUnit: "KM"
        }
    });

    const brand = watch('brand');

    const [postCar, { isLoading }] = useCreateCarMutation();
    const { isLoading: brandLoading, isSuccess: brandSuccess, data: brandData } = useAllbrandsQuery();
    const { isLoading: modelIsLoading, isSuccess: modelIsSuccess, data: modelData, isFetching } = useModels_by_brandQuery({ id: brand });

    const [images, setImages] = useState<File[]>([]);

    const handleFormSubmit: SubmitHandler<addCarformType> = async (data) => {
        try {
            if (images?.length <= 0) {
                toast.error('Please, select minimum 1 image');
                return;
            }

            const form = new FormData();

            form.append('data', JSON.stringify(data))
            images.forEach((image) => {
                form.append('images', image);
            });

            const res = await postCar({ data: form }).unwrap()

            toast.success(res?.message || 'car create successfully');

            reset();
            setImages([]);

        } catch (err: any) {
            toast.error(err?.data?.message || 'Something went wrong, try again')
        }
    }

    const fileonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files as File[] | null;
        if (!fileList) {
            return;
        }
        setImages(prev => [...prev, ...fileList])
    };

    const [specification, setSpecifications] = useState<SpecificationsType>({
        brand: ['SUV', 'BMW', 'AUDI', 'TATA', 'AKIJ', 'Ferrari'],
        model: [
            'A-Class',
            'C-Class',
            'CLA',
            'E-Class',
            'EQE',
            'EQE SUV',
            'AMG SL',
            'V-CLASS/VAINO',
        ],
        country: countries,
        power_units: ['Horsepower', 'Kilowatt'], //'Torque', 'Metric Horsepower'
        mileage: [
            '100km',
            '200km',
            '300km',
            '400km',
            '500km',
            '600km',
            '800km',
            '1000km',
        ],
        mileage_units: ['KM'],
        bodyStyle: bodyStyles,
        year: years(),
        drive_config: ['LHD', 'RHD'],
        exteriorColor: colors,
        interiorColor: colors,
        fuelType: ['Gas', 'Petrol', 'Octane', 'Hybrid', 'Electric'],
    });

    const removeImg = useCallback((indxParam: number) => {
        const finalImgs = images?.filter((i, indx) => {
            return indx !== indxParam
        })
        setImages(finalImgs)
    }, [images])


    return (
        <div>
            <h1 className='font-poppins text-lg text-primary mb-3'>{formTxt?.add_title}</h1>
            {/* -------------------iamges----------------- */}
            <section>
                <p className="mb-1.5 block text-primary font-poppins text-base text-left">{formTxt?.attach_image}</p>
                <div className='flex flex-row gap-x-2 items-center'>
                    {
                        images?.map((img, indx) => {
                            return <div key={indx} >
                                <div className='relative w-20 h-20'>
                                    <Image src={URL.createObjectURL(img)} fill className='h-full w-full object-cover rounded-md' alt='uploaded car' />
                                </div>

                                <button onClick={() => removeImg(indx)}>
                                    <MdDeleteOutline className='text-sm text-danger' />
                                </button>
                            </div>
                        })
                    }
                    <label htmlFor='addImage' className='h-20 w-20 rounded-md border-2 border-dotted border-strokeinput flex flex-col justify-center items-center'>
                        <GoPlus className='text-orange-500 text-base' />
                        <p className="mb-1.5 block text-orange-500 font-poppins text-xs text-center">{formTxt?.attach_image}</p>
                    </label>
                    <input onChange={fileonChange} type="file" name="addImage" id="addImage" className='hidden' accept="image/*" multiple />
                </div>
            </section>

            {/* --------------------- form --------------------- */}

            <form onSubmit={handleSubmit(handleFormSubmit)} className='mt-5 text-left -z-10'>
                {/* ---------name------------ */}
                <div className="w-full mx-auto mb-3">
                    <label htmlFor='Car name' className="mb-1.5 block text-black dark:text-white font-poppins">
                        {formTxt?.car_name}
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <input
                        type="text"
                        id='Car name'
                        {...register("name", { required: true, minLength: { value: 3, message: "car name minimum 2 character" } })}
                        placeholder="car name"
                        className={`w-full rounded-sm border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.name ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                    />
                    {errors?.name && <p className="text-red-500 text-sm col-span-2">{errors?.name?.message}</p>}
                </div>

                {/* ----------details-------------- */}
                <div className="w-full mx-auto mb-3">
                    <label htmlFor='Details' className="mb-1.5 block text-black dark:text-white font-poppins">
                        {formTxt?.details}
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
                        {formTxt?.brand}
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <Controller
                        name={'brand'}
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field }) => (
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <SelectTrigger className={`px-3 py-2.5  text-sm font-poppins w-full rounded-none text-primary bg-secondary border ${errors?.brand ? "font-medium  border-danger" : "border-strokeinput"}`}>
                                    <SelectValue placeholder={brandLoading ? "loading..." : formTxt?.brand} />
                                </SelectTrigger>
                                <SelectContent className="rounded-sm text-sm font-poppins">
                                    {
                                        brandSuccess && brandData?.data?.data?.map(item => {
                                            return <SelectItem key={item?._id} value={item?._id} className="h-10 font-satoshi text-base font-medium">{item?.brandName}</SelectItem>
                                        })
                                    }
                                </SelectContent>
                            </Select>
                        )} >

                    </Controller>
                    {errors?.brand && <p className="text-red-500 text-sm col-span-2">{errors?.brand?.message}</p>}
                </div>

                {/* -----------------model--------------------- */}
                <div className="w-full mx-auto mb-3">
                    <label htmlFor='model' className="mb-1.5 block text-black dark:text-white font-poppins">
                        {formTxt?.model}
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <Controller
                        name={'model'}
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field }) => (
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <SelectTrigger className={`px-3 py-2.5  text-sm font-poppins w-full rounded-none text-primary bg-secondary border ${errors?.model ? "font-medium  border-danger" : "border-strokeinput"}`}>
                                    <SelectValue placeholder={modelIsLoading ? "loading..." : formTxt?.model} />
                                </SelectTrigger>
                                <SelectContent className="rounded-sm text-sm font-poppins">
                                    {
                                        modelIsSuccess && modelData?.data?.models?.map(item => {
                                            return <SelectItem key={item?._id} value={item?._id} className="h-10 font-satoshi text-base font-medium">{item?.modelName}</SelectItem>
                                        })
                                    }
                                </SelectContent>
                            </Select>
                        )} >

                    </Controller>
                    {errors?.model && <p className="text-red-500 text-sm col-span-2">{errors?.model?.message}</p>}
                </div>

                {/* ---------------country------------------ */}
                <div className="w-full mx-auto mb-3">
                    <label htmlFor='country' className="mb-1.5 block text-black dark:text-white font-poppins">
                        {formTxt?.country}
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <Selection
                        name="country"
                        placeholder={formTxt?.country}
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
                        {formTxt?.price}
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

                {/* ----------------year---------------- */}
                <div className="w-full mx-auto mb-3">
                    <label htmlFor='year' className="mb-1.5 block text-black dark:text-white font-poppins">
                        {formTxt?.year}
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <input
                        type="number"
                        id='year'
                        {...register("YearOfManufacture", { required: true, min: { value: 1800, message: "minimum year 1800" }, max: { value: new Date().getFullYear(), message: `Year maximum ${new Date().getFullYear()}` } })}
                        placeholder="eg : 2025"
                        className={`w-full rounded-sm border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.YearOfManufacture ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                    />
                    {errors?.YearOfManufacture && <p className="text-red-500 text-sm col-span-2">{errors?.YearOfManufacture?.message}</p>}
                </div>

                {/* --------------------------power-------------------- */}
                <div className="w-full mx-auto mb-3">
                    <label htmlFor='power' className="mb-1.5 block text-black dark:text-white font-poppins">
                        {formTxt?.power}
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <div className='flex flex-row gap-x-2'>
                        <div className='w-3/4'>
                            <input
                                type="number"
                                id='power'
                                {...register("power", { required: true, min: { value: 0, message: "power minimum 0" }, max: { value: 10000000, message: 'power maximum 10000000' } })}
                                placeholder="Power"
                                className={`w-full rounded-sm border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.power ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                            />
                            {errors?.power && <p className="text-red-500 text-sm col-span-2">{errors?.power?.message}</p>}
                        </div>
                        <div className='w-1/4'>
                            <Selection
                                name="powerUnit"
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
                        {formTxt?.mileage}
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <div className='flex flex-row gap-x-2'>
                        <div className='w-3/4'>
                            <input
                                type="number"
                                id='Mileage'
                                {...register("mileage", { required: true, min: { value: 0, message: "Mileage minimum 0" }, max: { value: 10000000, message: 'Mileage maximum 10000000' } })}
                                placeholder="Mileage"
                                className={`w-full rounded-sm border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins placeholder:font-poppins ${errors?.mileage ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                            />
                            {errors?.mileage && <p className="text-red-500 text-sm col-span-2">{errors?.mileage?.message}</p>}
                        </div>
                        <div className='w-1/4'>
                            <Selection
                                name="mileageUnit"
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
                        {formTxt?.vin}
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <input
                        type="text"
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
                        {formTxt?.body_style}
                    </p>
                    <section className='flex flex-row flex-wrap gap-x-5 gap-y-2'>
                        {specification?.bodyStyle?.map((item, indx) => (
                            <div key={indx} className="inline-flex items-center">
                                <Controller
                                    name="bodyStyle"
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
                        <AddEditionalPopup control={control} kname='bodyStyle' reset={reset} setSpecifications={setSpecifications}>
                            <p className='text-warning text-xs font-poppins mt-1.5'>+ {formTxt?.add_editional}</p>
                        </AddEditionalPopup>

                    </section>
                    {errors?.bodyStyle && <p className="text-red-500 text-sm col-span-2">{errors?.bodyStyle?.message}</p>}
                </div>

                {/* -----------------interior color -------------- */}
                <div className="mb-4">
                    <p className='mb-2 block text-black dark:text-white font-poppins text-sm'>
                        {formTxt?.interior_color}
                    </p>
                    <section className='flex flex-row flex-wrap gap-x-5 gap-y-2'>
                        {specification?.interiorColor?.map((item, indx) => (
                            <div key={indx} className="inline-flex items-center">
                                <Controller
                                    name="interiorColor"
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
                        <AddEditionalPopup control={control} kname={'interiorColor'} reset={reset} setSpecifications={setSpecifications}>
                            <p className='text-warning text-xs font-poppins mt-1.5 cursor-pointer'>+ {formTxt?.add_editional}</p>
                        </AddEditionalPopup>
                    </section>
                    {errors?.interiorColor && <p className="text-red-500 text-sm col-span-2">{errors?.interiorColor?.message}</p>}
                </div>

                {/* -----------------exterior color -------------- */}
                <div className="mb-4">
                    <p className='mb-2 block text-black dark:text-white font-poppins text-sm'>
                        {formTxt?.exterior_color}
                    </p>
                    <section className='flex flex-row flex-wrap gap-x-5 gap-y-2'>
                        {specification?.exteriorColor?.map((item, indx) => (
                            <div key={indx} className="inline-flex items-center">
                                <Controller
                                    name="exteriorColor"
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
                        <AddEditionalPopup control={control} kname='exteriorColor' reset={reset} setSpecifications={setSpecifications}>
                            <p className='text-warning text-xs font-poppins mt-1.5'>+ {formTxt?.add_editional}</p>
                        </AddEditionalPopup>
                    </section>
                    {errors?.exteriorColor && <p className="text-red-500 text-sm col-span-2">{errors?.exteriorColor?.message}</p>}
                </div>

                {/* -----------------fuel type -------------- */}
                <div className="mb-4">
                    <p className='mb-2 block text-black dark:text-white font-poppins text-sm'>
                        {formTxt?.fuel_type}
                    </p>
                    <section className='flex flex-row flex-wrap gap-x-5 gap-y-2'>
                        {specification?.fuelType?.map((item, indx) => (
                            <div key={indx} className="inline-flex items-center">
                                <Controller
                                    name="fuelType"
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
                        {/* <AddEditionalPopup control={control} kname='fuelType' reset={reset} setSpecifications={setSpecifications}>
                            <p className='text-warning text-xs font-poppins mt-1.5'>+ add additional</p>
                        </AddEditionalPopup> */}
                    </section>
                    {errors?.fuelType && <p className="text-red-500 text-sm col-span-2">{errors?.fuelType?.message}</p>}
                </div>

                {/* -----------------drive type -------------- */}
                <div className="mb-4">
                    <p className='mb-2 block text-black dark:text-white font-poppins text-sm'>
                        {formTxt?.drive}
                    </p>
                    <section className='flex flex-row flex-wrap gap-x-5 gap-y-2'>
                        {specification?.drive_config?.map((item, indx) => (
                            <div key={indx} className="inline-flex items-center">
                                <Controller
                                    name="Drive"
                                    control={control}
                                    rules={{ required: 'Drive is required' }}
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
                    </section>
                    {errors?.Drive && <p className="text-red-500 text-sm col-span-2">{errors?.Drive?.message}</p>}
                </div>

                <button disabled={isLoading} type='submit' className='w-full bg-primary text-secondary hover:bg-opacity-85 duration-200 font-poppins text-base text-center py-2.5 px-4 mt-3 flex flex-row items-center gap-x-1 justify-center disabled:cursor-not-allowed'>
                    {isLoading && < ImSpinner2 className="text-lg text-white animate-spin" />}
                    <span>{isLoading ? 'Loading...' : formTxt?.submit}</span>
                </button>

            </form>
        </div>
    );
});

AddForm.displayName = "AddForm"
export default AddForm;
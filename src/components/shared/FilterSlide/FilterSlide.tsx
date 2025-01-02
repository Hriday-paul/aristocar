'use client'
import React, { useCallback, useEffect, useState } from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import SelectFilter from './SelectFilter';
import { shortfilterType } from '@/components/custom/Home/Section1/TabFilter';
import Link from 'next/link';
import PriceRange from './PriceRange';
import MilageRange from './MilageRange';
import { useAllbrandsQuery, useModels_by_brandQuery } from '@/redux/features/CarsApi';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useRouter, useSearchParams } from 'next/navigation';

interface defaultShortFilterType extends shortfilterType {
    brand: string | null,
    model: string | null
}

type defaultFilterType = {
    model: string | null,
    country: string | null,
    price: {
        min: string | null,
        max: string | null
    },
    mileage: {
        min: string | null,
        max: string | null,
    },
    body: string | null
}

const FilterSlide = ({ children, filter }: { children: React.ReactNode, filter?: defaultShortFilterType }) => {

    const { isLoading, isSuccess, data: brandData } = useAllbrandsQuery();
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
    const { isLoading: modelIsLoading, isSuccess: modelIsSuccess, data: modelData, isFetching } = useModels_by_brandQuery({ id: selectedBrand });

    const searchParams = useSearchParams();
    const router = useRouter();

    const [filterData, setFilterData] = useState<defaultFilterType>({
        model: '',
        country: '',
        price: {
            min: '0',
            max: '5000000'
        },
        mileage: {
            min: '0',
            max: '5000000',
        },
        body: ''
    })


    const data = {
        brand: [
            'SUV', "BMW", 'AUDI', 'TATA', "AKIJ", "Ferrari"
        ],
        model: ["A-Class", "C-Class", "CLA", "E-Class", "EQE", "EQE SUV", "AMG SL", "V-CLASS/VAINO"],
        country: [
            "All Countries",
            "United Arab Emirates",
            "France",
            "United States",
            "Germany",
            "Japan",
            "Spain",
            "Qatar",
            "Canada",
            "United Kingdom",
            "Italy",
            "Netherlands",
            "Albania",
            "Indonesia",
            "Australia",
            "Portugal",
            "New Caledonia",
            "Cayman Islands",
            "New Zealand",
            "Bahrain",
            "Monaco",
            "Austria",
            "Luxembourg",
            "Saudi Arabia",
            "Sweden",
            "Kuwait",
            "Belgium",
            "Slovenia",
            "Hungary",
            "South Africa",
            "Israel",
            "Türkiye",
            "Greece",
            "Azerbaijan"
        ],
        mileage: ['100km', '200km', '300km', '400km', '500km', '600km', '800km', '1000km'],
        bodyStyles: ["sedan", 'Suv', "Coupe", "BMW", "Akij"],
        year: [2024, 2023, 2022, 2021, 2020, 2019, 2018],
        drive_config: ["LHD", "RHD"],
        exteriorColors: ['Black', "White", "Blue", 'Gray', 'Green', 'Olive'],
        interiorColors: ['Black', "White", "Blue", 'Gray', 'Green', 'Olive'],
        fuel_type: ['Gas', "Petrol", "Octen", "Hybrid", "Electric"]
    }

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)
            return params.toString()
        },
        [searchParams]
    );

    const handleOnchangeBrand = useCallback((item: string) => {
        setSelectedBrand(item)
        const params = new URLSearchParams(searchParams.toString())
        params.set('brand', item)
        params.delete('model')
        router.push('/cars' + '?' + params?.toString())
    }, [router, searchParams]);

    const handleOnchangeModel = useCallback((item: string) => {
        setFilterData(prev => {
            return { ...prev, model: item }
        })
        router.push('/cars' + '?' + createQueryString('model', item))
    }, [router, createQueryString])

    useEffect(() => {
        const brand = searchParams.get('brand')
        const model = searchParams.get('model')
        const country = searchParams.get('country')
        const body = searchParams.get('body')
        const min_price = searchParams.get('min_price')
        const max_price = searchParams.get('max_price')
        const min_mileage = searchParams.get('max_mileage')
        const max_mileage = searchParams.get('max_mileage')

        setSelectedBrand(brand);
        setFilterData({ model, country, body, price: { min: min_price, max: max_price }, mileage: { min: min_mileage, max: max_mileage } })

    }, [searchParams])

    const handleOnchangeCountry = useCallback((country: string) => {
        setFilterData(prev => {
            return { ...prev, country: country }
        })
        router.push('/cars' + '?' + createQueryString('country', country))
    }, [createQueryString, router])

    console.log(filterData?.country)

    return (
        <div>
            <Sheet>
                <SheetTrigger>
                    {children}
                </SheetTrigger>

                <SheetContent side={'left'} className="w-10/12 md:w-6/12 lg:w-5/12 xl:w-3/12 !p-6 filter-scroll overflow-y-scroll">
                    <SheetHeader>
                        <SheetTitle></SheetTitle>
                        <SheetDescription />

                        <div>

                            <div className="my-3 flex flex-row justify-between gap-x-5 mb-6">
                                <section className='w-full'>
                                    <p className='font-lastica text-sm text-secondary w-full mb-1 text-left'>
                                        Brand
                                    </p>
                                    <Select onValueChange={handleOnchangeBrand} defaultValue={selectedBrand || ""}>
                                        <SelectTrigger className="px-3.5 py-2.5 w-full rounded-none text-primary bg-secondary text-lg font-satoshi font-medium h-[50px]">
                                            <SelectValue placeholder={isLoading ? "loading..." : "Brand"} />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-sm">
                                            {
                                                isSuccess && brandData?.data?.map(item => {
                                                    return <SelectItem key={item?._id} value={item?._id} className="h-10 font-satoshi text-base font-medium">{item?.brandName}</SelectItem>
                                                })
                                            }
                                        </SelectContent>
                                    </Select>
                                </section>
                                <section className='w-full'>
                                    <p className='font-lastica text-sm text-secondary w-full mb-1 text-left'>
                                        Model
                                    </p>
                                    <Select onValueChange={handleOnchangeModel} defaultValue={filterData?.model || 'Model'}>
                                        <SelectTrigger className="px-3.5 py-2.5 w-full rounded-none text-primary bg-secondary text-lg font-satoshi font-medium h-[50px]">
                                            <SelectValue placeholder={(modelIsLoading || isFetching) ? 'loading...' : "Model"} />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-sm">
                                            {
                                                modelIsSuccess && modelData?.data?.models?.map(item => {
                                                    return <SelectItem key={item?._id} value={item?._id} className="h-10 font-satoshi text-base font-medium">{item?.modelName}</SelectItem>
                                                })
                                            }
                                        </SelectContent>
                                    </Select>
                                </section>
                            </div>

                            <section className='w-1/2 mb-6'>
                                <p className='font-lastica text-sm text-secondary w-full mb-1 text-left'>
                                    Country
                                </p>
                                <Select onValueChange={handleOnchangeCountry} defaultValue={filterData?.country !== null ? filterData?.country : 'All Countries'}>
                                    <SelectTrigger className="px-3.5 py-2.5 w-full rounded-none text-primary bg-secondary text-lg font-satoshi font-medium h-[50px]">
                                        <SelectValue placeholder={"Country"} />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-sm">
                                        {
                                            data?.country.map(item => {
                                                return <SelectItem key={item} value={item} className="h-10 font-satoshi text-base font-medium">{item}</SelectItem>
                                            })
                                        }
                                    </SelectContent>
                                </Select>
                            </section>

                            {/* ----------------price----------------- */}
                            <section className='mb-6'>
                                <p className='font-lastica text-sm text-secondary w-full mb-1 text-left'>
                                    Price
                                </p>
                                <PriceRange />
                            </section>

                            {/* ----------------Mileage----------------- */}
                            <section className='mb-6'>
                                <p className='font-lastica text-sm text-secondary w-full mb-1 text-left'>
                                    Mileage
                                </p>
                                <MilageRange />
                            </section>

                            {/* -----------------body style-------------- */}
                            <div className="mb-6">
                                <p className='font-lastica text-sm text-secondary w-full mb-1 text-left'>
                                    Body Style
                                </p>
                                <section className='grid grid-cols-3 md:grid-cols-4 gap-5'>
                                    {
                                        data?.bodyStyles?.map((item, indx) => {
                                            return <div key={indx} className="inline-flex items-center mt-2">
                                                <label className="flex items-center cursor-pointer relative" htmlFor={item}>
                                                    <input type="checkbox" defaultChecked={item == 'All'} name='bodyStyles' className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-sm shadow hover:shadow-md bg-secondary checked:bg-secondary checked:border-stroke" id={item} />
                                                    <span className="absolute text-primary opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                        </svg>
                                                    </span>
                                                </label>
                                                <label className="cursor-pointer ml-1.5 text-secondary font-poppins text-base capitalize" htmlFor={item}>
                                                    {item}
                                                </label>
                                            </div>
                                        })
                                    }
                                </section>
                            </div>

                            {/* -----------------Year of Manufacture------------- */}
                            <section className="mb-6">
                                <p className='font-lastica text-sm text-secondary w-full mb-1.5 text-left'>
                                    Year of Manufacture
                                </p>
                                <section className='w-full flex flex-row justify-between gap-x-5 '>
                                    <SelectFilter defaultV={''} items={data?.year} placeholder={"Min"} />
                                    <SelectFilter defaultV={''} items={data?.year} placeholder={"Max"} />
                                </section>
                            </section>

                            <section className="mb-6">
                                <p className='font-lastica text-sm text-secondary w-full mb-1 text-left'>
                                    Drive configuration
                                </p>
                                <div className='w-1/2'>
                                    <SelectFilter defaultV={filter?.drive || ''} items={data?.drive_config} placeholder={"Drive"} />
                                </div>
                            </section>

                            {/* -----------------exterior color-------------- */}
                            <div className="mb-6">
                                <p className='font-lastica text-sm text-secondary w-full mb-1 text-left'>
                                    Exterior color
                                </p>
                                <section className='grid grid-cols-3 md:grid-cols-4 gap-5'>
                                    {
                                        data?.exteriorColors?.map((item, indx) => {
                                            return <div key={indx} className="inline-flex items-center mt-2">
                                                <label className="flex items-center cursor-pointer relative" htmlFor={item}>
                                                    <input type="checkbox" defaultChecked={item == 'All'} name='exterior_color' className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-sm shadow hover:shadow-md bg-secondary checked:bg-secondary checked:border-stroke" id={item} />
                                                    <span className="absolute text-primary opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                        </svg>
                                                    </span>
                                                </label>
                                                <label className="cursor-pointer ml-1.5 text-secondary font-poppins text-base capitalize" htmlFor={item}>
                                                    {item}
                                                </label>
                                            </div>
                                        })
                                    }
                                </section>
                            </div>

                            {/* -----------------interior color-------------- */}
                            <div className="mb-6">
                                <p className='font-lastica text-sm text-secondary w-full mb-1 text-left'>
                                    Interior color
                                </p>
                                <section className='grid grid-cols-3 md:grid-cols-4 gap-5'>
                                    {
                                        data?.interiorColors?.map((item, indx) => {
                                            return <div key={indx} className="inline-flex items-center mt-2">
                                                <label className="flex items-center cursor-pointer relative" htmlFor={item + indx}>
                                                    <input type="checkbox" defaultChecked={item == 'All'} name='interiorColors' className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-sm shadow hover:shadow-md bg-secondary checked:bg-secondary checked:border-stroke" id={item + indx} />
                                                    <span className="absolute text-primary opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                        </svg>
                                                    </span>
                                                </label>
                                                <label className="cursor-pointer ml-1.5 text-secondary font-poppins text-base capitalize" htmlFor={item + indx}>
                                                    {item}
                                                </label>
                                            </div>
                                        })
                                    }
                                </section>
                            </div>

                            {/* -----------------Fuel color-------------- */}
                            <div className="mb-6">
                                <p className='font-lastica text-sm text-secondary w-full mb-1 text-left'>
                                    Fuel type
                                </p>
                                <section className='grid grid-cols-3 md:grid-cols-4 gap-5'>
                                    {
                                        data?.fuel_type?.map((item, indx) => {
                                            return <div key={indx} className="inline-flex items-center mt-2">
                                                <label className="flex items-center cursor-pointer relative" htmlFor={item}>
                                                    <input type="checkbox" defaultChecked={item == 'All'} name='fuel_type' className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-sm shadow hover:shadow-md bg-secondary checked:bg-secondary checked:border-stroke" id={item} />
                                                    <span className="absolute text-primary opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                        </svg>
                                                    </span>
                                                </label>
                                                <label className="cursor-pointer ml-1.5 text-secondary font-poppins text-base capitalize" htmlFor={item}>
                                                    {item}
                                                </label>
                                            </div>
                                        })
                                    }
                                </section>
                            </div>


                            <Link href='/cars'>
                                <button className='w-full text-center bg-secondary hover:bg-opacity-90 duration-150 py-2.5 rounded-sm font-poppins mb-12'>Search</button>
                            </Link>

                        </div>

                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    );
};

FilterSlide.displayName = "FilterSlide"
export default FilterSlide;
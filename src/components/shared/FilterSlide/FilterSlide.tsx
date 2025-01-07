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
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface defaultShortFilterType extends shortfilterType {
    brand: string | null,
    model: string | null
}

type defaultFilterType = {
    model: string,
    country: string,
    body: string[],
    exterior_color: string[],
    interior_color: string[],
    fuel_type: string[],
    min_year: string,
    max_year: string,
    drive: string,
    [key: string]: string | string[];
}

const FilterSlide = ({ children, filter }: { children: React.ReactNode, filter?: defaultShortFilterType }) => {

    const { isLoading, isSuccess, data: brandData } = useAllbrandsQuery();
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
    const { isLoading: modelIsLoading, isSuccess: modelIsSuccess, data: modelData, isFetching } = useModels_by_brandQuery({ id: selectedBrand });

    const currentPath = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const [filterData, setFilterData] = useState<defaultFilterType>({
        model: '',
        country: '',
        body: [],
        exterior_color: [],
        interior_color: [],
        fuel_type: [],
        min_year: '',
        max_year: '',
        drive: ''
    })

    const [price, setPrice] = useState({
        min: 0,
        max: 50000
    });
    const [milage, setMilage] = useState({
        min: 0,
        max: 50000
    });

    const generateCustomYears = useCallback((): number[] => {
        const years = [];
        const currentYear = new Date().getFullYear();
        for (let year = currentYear; year >= 1850; year--) {
            if (year > 2005 || [2000, 1990, 1980, 1970, 1960, 1950, 1900, 1850].includes(year)) {
                years.push(year);
            }
        }
        return years;
    }, [])

    let data = {
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
        year: generateCustomYears(),
        drive_config: ["LHD", "RHD"],
        exteriorColors: ['Black', "White", "Blue", 'Gray', 'Green', 'Olive'],
        interiorColors: ['Black', "White", "Blue", 'Gray', 'Green', 'Olive'],
        fuel_type: ['Gas', "Petrol", "Octen", "Hybrid", "Electric"]
    };

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
        if (currentPath !== '/cars') {
            return
        }
        const params = new URLSearchParams(searchParams.toString())
        params.set('brand', item)
        params.delete('model')
        router.push('/cars' + '?' + params?.toString())
    }, [router, searchParams, currentPath]);

    const handleOnchangeModel = useCallback((item: string) => {
        setFilterData(prev => {
            return { ...prev, model: item }
        })
        if (currentPath !== '/cars') {
            return
        }
        router.push('/cars' + '?' + createQueryString('model', item))
    }, [router, createQueryString, currentPath])


    useEffect(() => {
        const brand = searchParams.get('brand') || ''
        const model = searchParams.get('model') || ''
        const country = searchParams.get('country') || ''
        const min_price = searchParams.get('min_price') || 0
        const max_price = searchParams.get('max_price') || 0
        const min_mileage = searchParams.get('min_mileage') || 0
        const max_mileage = searchParams.get('max_mileage') || 0
        const min_year = searchParams.get('min_year') || ''
        const max_year = searchParams.get('max_year') || ''
        const drive = searchParams.get('drive') || ''
        const body = searchParams.get('body')?.split(',') || [] as string[]
        const exterior_color = searchParams.get('exterior_color')?.split(',') || [] as string[]
        const interior_color = searchParams.get('interior_color')?.split(',') || [] as string[]
        const fuel_type = searchParams.get('fuel_type')?.split(',') || [] as string[]

        setSelectedBrand(filter?.brand || brand);
        setFilterData({ model: filter?.model || model, country: filter?.country || country, body, min_year, max_year, drive: filter?.drive || drive, exterior_color, interior_color, fuel_type });

        setPrice({ min: Number(filter?.min_price) || Number(min_price) || 0, max: Number(max_price) || 0 })
        setMilage({ min: Number(filter?.min_mileage) || Number(min_mileage) || 0, max: Number(max_mileage) || 0 })

    }, [searchParams, filter])

    // -------checkbox handler--------------------
    const checkBoxHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>, key: string, value: string) => {
        const target = e.target;
        let checkboxGroup = filterData[key] as string[];

        if (target.checked) {
            checkboxGroup.push(value)
        } else {
            const filter = checkboxGroup.filter(item => item !== value)
            checkboxGroup = filter
        }
        setFilterData(prev => {
            return { ...prev, [key]: checkboxGroup }
        })

        if (currentPath !== '/cars') {
            return
        }

        router.push('/cars' + '?' + createQueryString(key, checkboxGroup.join(',')))
    }, [createQueryString, router, currentPath, filterData]);


    // ---------------------select handler-------------------
    const SelectHandler = useCallback((key: string, value: string) => {
        setFilterData(prev => {
            return { ...prev, [key]: value }
        })

        if (currentPath !== '/cars') {
            return
        }
        router.push('/cars' + '?' + createQueryString(key, value))
    }, [createQueryString, router, currentPath])

    const searchBtnClkHandler = useCallback(() => {
        let queryString = ''
        const ary = Object.keys(filterData);
        for (let key of ary) {
            const value: any = filterData[key]
            if (value == '' || value == null || value == undefined) continue;
            if (Array.isArray(value)) {
                queryString += '&' + createQueryString(key, value.join(','))
            } else {
                queryString += '&' + createQueryString(key, value)
            }
        }
        queryString += '&' + createQueryString('min_price', price?.min.toString())
        queryString += '&' + createQueryString('max_price', price?.max.toString())
        queryString += '&' + createQueryString('min_mileage', milage?.min.toString())
        queryString += '&' + createQueryString('max_mileage', milage?.max.toString());

        router.push('/cars' + '?' + queryString)
    }, [filterData, createQueryString, router, price, milage])

    const handleClear = useCallback(() => {
        router.push('/cars')
    }, [router])


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
                                    <Select onValueChange={handleOnchangeModel} defaultValue={filterData?.model || ''}>
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
                                <Select onValueChange={(v) => SelectHandler('country', v)} defaultValue={filterData?.country}>
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
                                <PriceRange price={price} setPrice={setPrice} />
                            </section>

                            {/* ----------------Mileage----------------- */}
                            <section className='mb-6'>
                                <p className='font-lastica text-sm text-secondary w-full mb-1 text-left'>
                                    Mileage
                                </p>
                                <MilageRange milage={milage} setMilage={setMilage} />
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
                                                    <input type="checkbox" onChange={(e) => checkBoxHandler(e, 'body', item)} defaultChecked={filterData?.body.includes(item)} name='bodyStyles' className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-sm shadow hover:shadow-md bg-secondary checked:bg-secondary checked:border-stroke" id={item} />
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
                                    <Select defaultValue={filterData?.min_year} onValueChange={(v) => SelectHandler('min_year', v)}>
                                        <SelectTrigger className="px-3.5 py-2.5 w-full rounded-none text-primary bg-secondary text-lg font-satoshi font-medium h-[50px]">
                                            <SelectValue placeholder={"Min"} />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-sm">
                                            {
                                                data?.year.map(item => {
                                                    return <SelectItem key={item} value={item.toString()} className="h-10 font-satoshi text-base font-medium">{item}</SelectItem>
                                                })
                                            }
                                        </SelectContent>
                                    </Select>
                                    <Select defaultValue={filterData?.max_year} onValueChange={(v) => SelectHandler('max_year', v)}>
                                        <SelectTrigger className="px-3.5 py-2.5 w-full rounded-none text-primary bg-secondary text-lg font-satoshi font-medium h-[50px]">
                                            <SelectValue placeholder={"Max"} />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-sm">
                                            {
                                                data?.year.map(item => {
                                                    return <SelectItem key={item} value={item.toString()} className="h-10 font-satoshi text-base font-medium">{item}</SelectItem>
                                                })
                                            }
                                        </SelectContent>
                                    </Select>
                                </section>
                            </section>

                            {/* ----------------------drive config---------------- */}
                            <section className="mb-6">
                                <p className='font-lastica text-sm text-secondary w-full mb-1 text-left'>
                                    Drive configuration
                                </p>
                                <div className='w-1/2'>
                                    <Select defaultValue={filter?.drive || filterData?.drive} onValueChange={(v) => SelectHandler('drive', v)}>
                                        <SelectTrigger className="px-3.5 py-2.5 w-full rounded-none text-primary bg-secondary text-lg font-satoshi font-medium h-[50px]">
                                            <SelectValue placeholder={"Drive"} />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-sm">
                                            {
                                                data?.drive_config?.map(item => {
                                                    return <SelectItem key={item} value={item.toString()} className="h-10 font-satoshi text-base font-medium">{item}</SelectItem>
                                                })
                                            }
                                        </SelectContent>
                                    </Select>
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
                                                    <input type="checkbox" onChange={(e) => checkBoxHandler(e, 'exterior_color', item)} defaultChecked={filterData?.exterior_color.includes(item)} name='exterior_color' className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-sm shadow hover:shadow-md bg-secondary checked:bg-secondary checked:border-stroke" id={item} />
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
                                                    <input type="checkbox" onChange={(e) => checkBoxHandler(e, 'interior_color', item)} defaultChecked={filterData?.interior_color.includes(item)} name='interiorColors' className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-sm shadow hover:shadow-md bg-secondary checked:bg-secondary checked:border-stroke" id={item + indx} />
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

                            {/* -----------------Fuel type-------------- */}
                            <div className="mb-6">
                                <p className='font-lastica text-sm text-secondary w-full mb-1 text-left'>
                                    Fuel type
                                </p>
                                <section className='grid grid-cols-3 md:grid-cols-4 gap-5'>
                                    {
                                        data?.fuel_type?.map((item, indx) => {
                                            return <div key={indx} className="inline-flex items-center mt-2">
                                                <label className="flex items-center cursor-pointer relative" htmlFor={item}>
                                                    <input type="checkbox" onChange={(e) => checkBoxHandler(e, 'fuel_type', item)} defaultChecked={filterData?.fuel_type.includes(item)} name='fuel_type' className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-sm shadow hover:shadow-md bg-secondary checked:bg-secondary checked:border-stroke" id={item} />
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

                            <section className='flex flex-row gap-x-5 items-center'>
                                {currentPath != '/cars' && <button onClick={searchBtnClkHandler} className='w-full text-center bg-secondary hover:bg-opacity-90 duration-150 py-2.5 rounded-sm font-poppins mb-12'>Search</button>}

                                <button onClick={handleClear} className='w-full text-center bg-secondary hover:bg-opacity-90 duration-150 py-2.5 rounded-sm font-poppins mb-12'>Clear</button>
                            </section>
                        </div>

                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    );
};

FilterSlide.displayName = "FilterSlide"
export default FilterSlide;
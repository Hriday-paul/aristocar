'use client'
import React, { useCallback, useState } from 'react';
import SelectFilter from './SelectFilter';
import FilterSlide from '@/components/shared/FilterSlide/FilterSlide';

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useAllbrandsQuery, useModels_by_brandQuery } from '@/redux/features/CarsApi';
import { useRouter, useSearchParams } from 'next/navigation';
import { countries } from '@/utils/Default';

const TabFilter = React.memo(({ filterNames }: { filterNames: { [key: string]: string } }) => {

    return (
        <div className='relative md:absolute md:-bottom-40 lg:-bottom-24 xl:-bottom-10 w-full z-20 mt-5 md:mt-0'>
            <Selection filterNames={filterNames} />
        </div>
    )
});

export type shortfilterType = {
    min_price: string,
    drive: string,
    min_mileage: string,
    country: string,
    [key: string]: string | string[] | null;
}

const Selection = React.memo(({ filterNames }: { filterNames: { [key: string]: string } }) => {
    const { isLoading, isSuccess, data: brandData } = useAllbrandsQuery();
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
    const { isLoading: modelIsLoading, isSuccess: modelIsSuccess, data: modelData, isFetching } = useModels_by_brandQuery({ id: selectedBrand });

    const [selectedModel, setSelectedModel] = useState<string | null>(null);

    const [shortFilter, setShortFilter] = useState<shortfilterType>({
        min_price: "",
        drive: "",
        min_mileage: "",
        country: ""
    })

    const searchParams = useSearchParams();
    const router = useRouter();

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
        const target = e.target;
        setShortFilter((prev) => ({
            ...prev,
            [name]: target.value,
        }));
    }

    const handleOnchangeBrand = useCallback((item: string) => {
        setSelectedBrand(item)
    }, [])

    const handleOnchangeModel = useCallback((item: string) => {
        setSelectedModel(item)
    }, [])



    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)
            return params.toString()
        },
        [searchParams]
    );

    const searchBtnClkHandler = useCallback(() => {
        let queryString = ''
        const ary = Object.keys(shortFilter);
        for (let key of ary) {
            const value: any = shortFilter[key]

            if (value == '' || value == null || value == undefined) continue;

            if (Array.isArray(value)) {
                queryString += '&' + createQueryString(key, value.join(','))
            } else {
                queryString += '&' + createQueryString(key, value)
            }
        }
        (selectedBrand !== '' || selectedBrand !== null || selectedBrand !== undefined) && (queryString += '&' + createQueryString('brand', selectedBrand || ''));

        (selectedModel !== '' || selectedModel !== null || selectedModel !== undefined) && (queryString += '&' + createQueryString('model', selectedModel || ''));

        router.push('/cars' + '?' + queryString)
    }, [createQueryString, router, selectedBrand, selectedModel, shortFilter])

    const countrys = countries

    return (
        <div className='bg-black shadow-4 w-11/12 md:w-[550px] lg:w-[600px] xl:w-[750px] mx-auto rounded-sm border border-zinc-800 grid grid-cols-2 gap-x-3 lg:gap-x-4 xl:gap-x-5 items-center p-5 md:p-6 lg:p-8 xl:p-10 pb-5 md:pb-6 lg:pb-8 relative'>

            <div className="mr-1.5 md:mr-3 my-3 w-full">
                <Select onValueChange={handleOnchangeBrand}>
                    <SelectTrigger className="px-3.5 py-2.5 w-full rounded-none text-primary bg-secondary text-lg font-satoshi font-medium h-[50px]">
                        <SelectValue placeholder={isLoading ? "loading..." : filterNames?.brand_support} />
                    </SelectTrigger>
                    <SelectContent className="rounded-sm">
                        {
                            isSuccess && brandData?.data?.data?.map(item => {
                                return <SelectItem key={item?._id} value={item?._id} className="h-10 font-satoshi text-base font-medium">{item?.brandName}</SelectItem>
                            })
                        }
                    </SelectContent>
                </Select>
            </div>
            <div className="mr-1.5 md:mr-3 my-3 w-full">
                <Select onValueChange={handleOnchangeModel}>
                    <SelectTrigger className="px-3.5 py-2.5 w-full rounded-none text-primary bg-secondary text-lg font-satoshi font-medium h-[50px]">
                        <SelectValue placeholder={(modelIsLoading || isFetching) ? 'loading...' : filterNames?.model} />
                    </SelectTrigger>
                    <SelectContent className="rounded-sm">
                        {
                            modelIsSuccess && modelData?.data?.models?.map(item => {
                                return <SelectItem key={item?._id} value={item?._id || 'gfgf'} className="h-10 font-satoshi text-base font-medium">{item?.modelName}</SelectItem>
                            })
                        }
                    </SelectContent>
                </Select>
            </div>
            <div className="mr-1.5 md:mr-3 my-3 w-full">
                <input type="number" onChange={(e) => inputChange(e, "min_price")} className='bg-secondary px-3.5 py-2.5 text-primary w-full text-lg font-satoshi font-medium border-none outline-none placeholder:text-primary rounded-none' placeholder={filterNames?.price_from} />
            </div>
            <div className="mr-1.5 md:mr-3 my-3 w-full">
                <SelectFilter name='drive' setShortFilter={setShortFilter} items={["LHD", "RHD"]} placeholder={filterNames?.drive_config} />
            </div>
            <div className="mr-1.5 md:mr-3 my-3 w-full relative">
                <input type="number" onChange={(e) => inputChange(e, "min_mileage")} className='bg-secondary px-3.5 py-2.5 text-primary w-full text-lg font-satoshi font-medium border-none outline-none placeholder:text-primary rounded-none' placeholder={filterNames?.mileage_from} />
            </div>
            <div className="mr-1.5 md:mr-3 my-3 w-full">
                <SelectFilter name='country' setShortFilter={setShortFilter} items={countrys} placeholder={filterNames?.country_support} />
            </div>

            <div className='w-full absolute -bottom-5 left-0 col-span-2'>
                <center>
                    <button type='button' onClick={searchBtnClkHandler} className='w-2/3 button-drop-shadow bg-primary text-secondary p-4 text-center text-sm md:text-base lg:text-lg font-satoshi font-extrabold hover:bg-[#1a1a1a] duration-200 border border-strokedark'>
                        {filterNames?.search}
                    </button>
                </center>
            </div>

            <FilterSlide filterNames={filterNames} filter={{ ...shortFilter, brand: selectedBrand, model: selectedModel }} >
                <div className='absolute bottom-5 right-5 text-white'>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <svg
                                    className="cursor-pointer h-5 xl:h-6 w-5 xl:w-6 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 50 50"
                                    fill="currentColor"
                                >
                                    <path d="M39.582 47.3957C38.7279 47.3957 38.0195 46.6873 38.0195 45.8332V22.9165C38.0195 22.0623 38.7279 21.354 39.582 21.354C40.4362 21.354 41.1445 22.0623 41.1445 22.9165V45.8332C41.1445 46.6873 40.4362 47.3957 39.582 47.3957Z" />
                                    <path d="M39.582 16.1457C38.7279 16.1457 38.0195 15.4373 38.0195 14.5832V4.1665C38.0195 3.31234 38.7279 2.604 39.582 2.604C40.4362 2.604 41.1445 3.31234 41.1445 4.1665V14.5832C41.1445 15.4373 40.4362 16.1457 39.582 16.1457Z" />
                                    <path d="M25 47.3957C24.1458 47.3957 23.4375 46.6873 23.4375 45.8332V35.4165C23.4375 34.5623 24.1458 33.854 25 33.854C25.8542 33.854 26.5625 34.5623 26.5625 35.4165V45.8332C26.5625 46.6873 25.8542 47.3957 25 47.3957Z" />
                                    <path d="M25 28.6457C24.1458 28.6457 23.4375 27.9373 23.4375 27.0832V4.1665C23.4375 3.31234 24.1458 2.604 25 2.604C25.8542 2.604 26.5625 3.31234 26.5625 4.1665V27.0832C26.5625 27.9373 25.8542 28.6457 25 28.6457Z" />
                                    <path d="M10.418 47.3957C9.5638 47.3957 8.85547 46.6873 8.85547 45.8332V22.9165C8.85547 22.0623 9.5638 21.354 10.418 21.354C11.2721 21.354 11.9805 22.0623 11.9805 22.9165V45.8332C11.9805 46.6873 11.2721 47.3957 10.418 47.3957Z" />
                                    <path d="M10.418 16.1457C9.5638 16.1457 8.85547 15.4373 8.85547 14.5832V4.1665C8.85547 3.31234 9.5638 2.604 10.418 2.604C11.2721 2.604 11.9805 3.31234 11.9805 4.1665V14.5832C11.9805 15.4373 11.2721 16.1457 10.418 16.1457Z" />
                                    <path d="M14.5833 24.479H6.25C5.39583 24.479 4.6875 23.7707 4.6875 22.9165C4.6875 22.0623 5.39583 21.354 6.25 21.354H14.5833C15.4375 21.354 16.1458 22.0623 16.1458 22.9165C16.1458 23.7707 15.4375 24.479 14.5833 24.479Z" />
                                    <path d="M43.7513 24.479H35.418C34.5638 24.479 33.8555 23.7707 33.8555 22.9165C33.8555 22.0623 34.5638 21.354 35.418 21.354H43.7513C44.6055 21.354 45.3138 22.0623 45.3138 22.9165C45.3138 23.7707 44.6055 24.479 43.7513 24.479Z" />
                                    <path d="M29.1654 28.646H20.832C19.9779 28.646 19.2695 27.9377 19.2695 27.0835C19.2695 26.2293 19.9779 25.521 20.832 25.521H29.1654C30.0195 25.521 30.7279 26.2293 30.7279 27.0835C30.7279 27.9377 30.0195 28.646 29.1654 28.646Z" />
                                </svg>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Advance Filter</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </FilterSlide>



        </div>
    )
})

Selection.displayName = "Selection"
TabFilter.displayName = "TabFilter"

export default TabFilter;

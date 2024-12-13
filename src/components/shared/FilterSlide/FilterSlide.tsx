import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import SelectFilter from '@/components/custom/Home/Section1/SelectFilter';
import { Slider, ConfigProvider } from 'antd';


const FilterSlide = ({ children }: { children: React.ReactNode }) => {

    const data = {
        brand: [
            'SUV', "BMW", 'AUDI', 'TATA', "AKIJ", "Ferrari"
        ],
        model: ["A-Class", "C-Class", "CLA", "E-Class", "EQE", "EQE SUV", "AMG SL", "V-CLASS/VAINO"],
        country: ['Bangladesh', 'Europe', "Africa", 'Austrelia'],
        mileage: ['100km', '200km', '300km', '400km', '500km', '600km', '800km', '1000km'],
        bodyStyles: ["sedan", 'Suv', "Coupe", "BMW", "Akij"],
        year: [2024, 2023, 2022, 2021, 2020, 2019, 2018],
        drive_config: ["LHD", "RHD"],
        exteriorColors: ['Black', "White", "Blue", 'Gray', 'Green', 'Olive'],
        interiorColors: ['Black', "White", "Blue", 'Gray', 'Green', 'Olive'],
        fuel_type: ['Gas', "Petrol", "Octen", "Hybrid", "Electric"]
    }

    const formatter = (value: number) => `${value}`;

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
                                    <SelectFilter items={data?.brand} placeholder={"Brand"} />
                                </section>
                                <section className='w-full'>
                                    <p className='font-lastica text-sm text-secondary w-full mb-1 text-left'>
                                        Model
                                    </p>
                                    <SelectFilter items={data?.model} placeholder={"Model"} />
                                </section>
                            </div>

                            <section className='w-1/2 mb-6'>
                                <p className='font-lastica text-sm text-secondary w-full mb-1 text-left'>
                                    Country
                                </p>
                                <SelectFilter items={data?.country} placeholder={"Country"} />
                            </section>

                            <section className='mb-6'>
                                <p className='font-lastica text-sm text-secondary w-full mb-1 text-left'>
                                    Price
                                </p>
                                <ConfigProvider
                                    theme={{
                                        components: {
                                            Slider: {
                                                handleColor: "white", // dot border color
                                                handleActiveColor: '#BBBBBB',
                                                handleActiveOutlineColor: '#BBBBBB', // dot hober border color
                                                dotBorderColor: "white",
                                                trackBg: 'white', //active section bg color
                                                trackHoverBg: 'white', //active section bg color
                                                railBg: "#BABCBD", //inactive section bg color
                                                railHoverBg: "#BABCBD",
                                                dotActiveBorderColor: "#BBBBBB",
                                                dotSize: 10,
                                                railSize: 8
                                            }
                                        }
                                    }}>
                                    <Slider range defaultValue={[1000, 3500]} min={0} max={5000} />
                                </ConfigProvider>
                                <p className='font-poppins text-base text-secondary w-full text-left'>
                                    Price : 50 - 100
                                </p>
                            </section>

                            <div className="my-3 mb-6">
                                <p className='font-lastica text-sm text-secondary w-full mb-1 text-left'>
                                    Mileage
                                </p>
                                <section className='w-full flex flex-row justify-between gap-x-5 '>
                                    <SelectFilter items={data?.mileage} placeholder={"From"} />
                                    <SelectFilter items={data?.mileage} placeholder={"To"} />
                                </section>
                            </div>

                            {/* -----------------body style-------------- */}
                            <div className="mb-6">
                                <p className='font-lastica text-sm text-secondary w-full mb-1 text-left'>
                                    Body Style
                                </p>
                                <section className='grid grid-cols-4 gap-5'>
                                    {
                                        data?.bodyStyles?.map((item, indx) => {
                                            return <div key={indx} className="inline-flex items-center mt-2">
                                                <label className="flex items-center cursor-pointer relative" htmlFor={item}>
                                                    <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-sm shadow hover:shadow-md bg-secondary checked:bg-secondary checked:border-stroke" id={item} />
                                                    <span className="absolute text-primary opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
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

                            <section className="mb-6">
                                <p className='font-lastica text-sm text-secondary w-full mb-1 text-left'>
                                    Year of Manufacture
                                </p>
                                <div className='w-1/2'>
                                    <SelectFilter items={data?.year} placeholder={"Year"} />
                                </div>
                            </section>

                            <section className="mb-6">
                                <p className='font-lastica text-sm text-secondary w-full mb-1 text-left'>
                                    Drive configuration
                                </p>
                                <div className='w-1/2'>
                                    <SelectFilter items={data?.drive_config} placeholder={"LHD"} />
                                </div>
                            </section>

                            {/* -----------------exterior color-------------- */}
                            <div className="mb-6">
                                <p className='font-lastica text-sm text-secondary w-full mb-1 text-left'>
                                    Exterior color
                                </p>
                                <section className='grid grid-cols-4 gap-5'>
                                    {
                                        data?.exteriorColors?.map((item, indx) => {
                                            return <div key={indx} className="inline-flex items-center mt-2">
                                                <label className="flex items-center cursor-pointer relative" htmlFor={item}>
                                                    <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-sm shadow hover:shadow-md bg-secondary checked:bg-secondary checked:border-stroke" id={item} />
                                                    <span className="absolute text-primary opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
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
                                <section className='grid grid-cols-4 gap-5'>
                                    {
                                        data?.interiorColors?.map((item, indx) => {
                                            return <div key={indx} className="inline-flex items-center mt-2">
                                                <label className="flex items-center cursor-pointer relative" htmlFor={item}>
                                                    <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-sm shadow hover:shadow-md bg-secondary checked:bg-secondary checked:border-stroke" id={item} />
                                                    <span className="absolute text-primary opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
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

                            {/* -----------------Fuel color-------------- */}
                            <div className="mb-12">
                                <p className='font-lastica text-sm text-secondary w-full mb-1 text-left'>
                                    Fuel type
                                </p>
                                <section className='grid grid-cols-4 gap-5'>
                                    {
                                        data?.fuel_type?.map((item, indx) => {
                                            return <div key={indx} className="inline-flex items-center mt-2">
                                                <label className="flex items-center cursor-pointer relative" htmlFor={item}>
                                                    <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-sm shadow hover:shadow-md bg-secondary checked:bg-secondary checked:border-stroke" id={item} />
                                                    <span className="absolute text-primary opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
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


                        </div>

                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    );
};


export default FilterSlide;
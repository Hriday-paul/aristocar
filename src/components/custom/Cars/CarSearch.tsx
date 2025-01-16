'use client'
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';
import { IoIosSearch } from 'react-icons/io';

const CarSearch = ({ defaultV, searchText }: { defaultV: string | undefined, searchText: string }) => {

    const router = useRouter();

    const handleSearchFormSubmit = useCallback((e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        router.push('/cars' + '?search=' + target.search.value)
    }, [router])

    return (
        <form onSubmit={handleSearchFormSubmit} className='col-span-12 lg:col-span-8 order-3 lg:order-2 bg-white shadow-md border border-stroke py-2.5 md:py-3 pl-3 md:pl-4 pr-3 md:pr-4 flex flex-row justify-between gap-x-3 items-center'>
            <IoIosSearch className='text-3xl text-zinc-500' />
            <input defaultValue={defaultV} type="text" name='search' className='border-none outline-none focus:border-none focus:outline-none font-poppins text-base w-full placeholder:font-poppins placeholder:text-zinc-400' placeholder={searchText + '...'} />
            <button type='submit' className='bg-primary hover:bg-opacity-90 duration-200 font-poppins text-center px-4 py-2.5 text-secondary text-sm rounded-sm'>{searchText}</button>
        </form>
    );
};

export default CarSearch;
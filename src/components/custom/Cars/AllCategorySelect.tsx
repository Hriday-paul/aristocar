import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from "@/components/ui/select"
import { IoMenuSharp } from 'react-icons/io5';

const AllCategorySelect = React.memo(({ items }: { items: string[] | number[] }) => {
    return (
        <Select>
            <SelectTrigger className="px-3.5 py-4 w-full rounded-none text-secondary text-lg font-satoshi font-medium bg-primary">
                <section className='flex flex-row items-center gap-x-2 lg:gap-x-3'>
                    <IoMenuSharp className='text-xl md:text-xl lg:text-2xl text-secondary' />
                    <p className='text-sm md:text-sm lg:text-base text-secondary font-poppins'>All Categories</p>
                </section>
            </SelectTrigger>
            <SelectContent className="rounded-sm">
                {
                    items?.map(item => {
                        return <SelectItem key={item} value={`${item}`} className="h-10 font-satoshi text-base font-medium">{item}</SelectItem>
                    })
                }
            </SelectContent>
        </Select>
    );
});

AllCategorySelect.displayName = 'AllCategorySelect'


export default AllCategorySelect;
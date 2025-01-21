'use client'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useRouter, useSearchParams } from 'next/navigation';

const items = [
    {
        id: 0,
        label: 'Default',
        value: '0'
    },
    {
        id: 1,
        label: 'Price Low to High',
        value: 'price'
    },
    {
        id: 2,
        label: 'Price High to Low',
        value: '-price'
    },
    {
        id: 3,
        label: 'Milage Low to High',
        value: 'mileage'
    },
    {
        id: 4,
        label: 'Milage High to Low',
        value: '-mileage'
    },
    {
        id: 5,
        label: 'Year Low to High',
        value: 'year'
    },
    {
        id: 6,
        label: 'Year High to Low',
        value: '-year'
    },
    // {
    //     id: 7,
    //     label: 'Most Popular',
    //     value: 'most'
    // }
]

const PriceFilterSelect = React.memo(({ placeholder, defaultV }: { placeholder: string, defaultV: string | undefined}) => {

    const searchParams = useSearchParams();
    const router = useRouter();

    const handleOnChange = (value: string) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set('sort', value)
        router.push('/cars' + '?' + params?.toString())
    }

    return (
        <Select onValueChange={handleOnChange} defaultValue={defaultV}>
            <SelectTrigger className="py-2.5 w-auto rounded-none text-primary bg-transparent text-lg font-poppins font-medium border-none">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="rounded-sm">
                {
                    items?.map(item => {
                        return <SelectItem key={item?.id} value={`${item?.value}`} className="h-10 font-satoshi text-base font-medium">{item?.label}</SelectItem>
                    })
                }
            </SelectContent>
        </Select>
    );
});

PriceFilterSelect.displayName = 'PriceFilterSelect'

export default PriceFilterSelect;
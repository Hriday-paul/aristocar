import React, { Dispatch, SetStateAction } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { shortfilterType } from './TabFilter';

interface SelectFilterProps {
    items: string[] | number[];
    placeholder: string;
    setShortFilter: Dispatch<SetStateAction<shortfilterType>>;
    name: "brand" | "model" | "min_price" | "drive" | "min_mileage" | "country";
}

const SelectFilter: React.FC<SelectFilterProps> = React.memo(({ items, placeholder, setShortFilter, name }) => {
    const handleOnchange = (item: string) => {
        setShortFilter((prev) => ({
            ...prev,
            [name]: item,
        }));
    };

    return (
        <Select onValueChange={handleOnchange}>
            <SelectTrigger className="px-3.5 py-2.5 w-full rounded-none text-primary bg-secondary text-lg font-satoshi font-medium">
                <SelectValue placeholder={placeholder} />
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

SelectFilter.displayName = 'SelectFilter'

export default SelectFilter;
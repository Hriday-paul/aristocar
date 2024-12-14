import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const items = ['Default', 'Low to High', 'High to Low']

const PriceFilterSelect = React.memo(({ placeholder }: { placeholder: string }) => {
    return (
        <Select>
            <SelectTrigger className="py-2.5 w-auto rounded-none text-primary bg-transparent text-lg font-poppins font-medium border-none">
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

PriceFilterSelect.displayName = 'PriceFilterSelect'

export default PriceFilterSelect;
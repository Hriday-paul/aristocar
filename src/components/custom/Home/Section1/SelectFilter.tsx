import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const SelectFilter = React.memo(({ items, placeholder }: { items: string[], placeholder : string }) => {
    return (
        <div className="mr-1.5 md:mr-3 my-3">
            <Select>
                <SelectTrigger className="p-3.5 w-full rounded-none text-primary bg-secondary text-lg font-satoshi font-medium">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent className="rounded-sm">
                    {
                        items?.map(item => {
                            return <SelectItem key={item} value={item} className="h-10 font-satoshi text-base font-medium">{item}</SelectItem>
                        })
                    }
                </SelectContent>
            </Select>
        </div>
    );
});

SelectFilter.displayName = 'SelectFilter'

export default SelectFilter;
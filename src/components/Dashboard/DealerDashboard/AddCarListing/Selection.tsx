import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { FieldErrors, RegisterOptions, Path, Controller, Control } from "react-hook-form";

interface selectType<T extends Record<string, any>> {
    name: Path<T>;
    placeholder?: string;
    control: Control<T>;
    errors: FieldErrors<T>;
    validationRules: RegisterOptions<T, Path<T>>;
    items: string[] | number[],
}

const Selection = <T extends Record<string, any>>({
    name,
    placeholder = "Select",
    control,
    errors,
    validationRules,
    items
}: selectType<T>) => {

    return (
        <Controller
            name={name}
            control={control}
            rules={validationRules}
            render={({ field }) => (
                <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                >
                    <SelectTrigger className={`px-3 py-2.5  text-sm font-poppins w-full rounded-none text-primary bg-secondary border ${errors?.[name] ? "font-medium  border-danger" : "border-strokeinput"}`}>
                        <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                    <SelectContent className="rounded-sm text-sm font-poppins">
                        {
                            items?.map(item => {
                                return <SelectItem key={item} value={`${item}`} className="h-10 font-satoshi text-base font-medium">{item}</SelectItem>
                            })
                        }
                    </SelectContent>
                </Select>
            )} >

        </Controller>
    );
};

Selection.displayName = 'Selection'

export default Selection;
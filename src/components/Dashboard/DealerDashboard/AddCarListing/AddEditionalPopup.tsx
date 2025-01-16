'use client'
import React, { Dispatch, SetStateAction, useCallback, useRef } from 'react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { UseFormReset, Control, useWatch } from 'react-hook-form';
import { addCarformType, SpecificationsType } from './AddForm';

interface AddEditionalPopupProps {
    children: React.ReactNode;
    reset: UseFormReset<addCarformType>;
    setSpecifications: Dispatch<
        SetStateAction<SpecificationsType>
    >;
    control: Control<addCarformType>
    kname: 'bodyStyle' | 'interiorColor' | 'exteriorColor'
}

const AddEditionalPopup =
    ({
        children,
        reset,
        setSpecifications,
        kname,
        control
    }: AddEditionalPopupProps) => {

        const prevFormData = useWatch({ control })
        const ref = useRef<HTMLInputElement | null>(null);

        const handleAdd = useCallback(() => {
            const value = ref?.current?.value as string;
            if (value == '' || value === null || value == undefined) {
                return;
            }
            setSpecifications((prev) => {
                return {
                    ...prev,
                    [kname]: [...prev[kname], value]
                }
            })
            reset({ ...prevFormData, [kname]: value });
        }, [reset, setSpecifications, kname, prevFormData])

        return (
            <div>
                <Popover>
                    <PopoverTrigger>{children}</PopoverTrigger>
                    <PopoverContent>
                        <input
                            ref={ref}
                            type="text"
                            id='body name'
                            placeholder="name"
                            className={`text-sm w-full rounded-sm border-[1.5px] bg-transparent py-1.5 px-2 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-poppins dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary`}
                        />
                        <div className='flex flex-row justify-end items-center'>
                            <button onClick={handleAdd} type='button' className='text-secondary bg-primary px-2 py-1 rounded-sm mt-2 hover:bg-opacity-80 duration-200'>Add</button>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        );
    };

AddEditionalPopup.displayName = "AddEditionalPopup"
export default AddEditionalPopup;
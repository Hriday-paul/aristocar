'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useMemo } from 'react';
import debounce from 'lodash.debounce';
import { RangeSlider } from '@/components/ui/range-slider';

const MilageRange = React.memo(({ milage, setMilage, mileageTxt }: { milage: { min: number, max: number }, setMilage: React.Dispatch<React.SetStateAction<{ min: number, max: number }>>, mileageTxt: string }) => {

    const searchParams = useSearchParams();
    const router = useRouter();
    const currentPath = usePathname();

    const onChange = (newValue: number[]) => {
        setMilage({
            min: newValue[0] | 0,
            max: newValue[1] | 0
        });
    };

    const debouncedInputChange = useMemo(
        () =>
            debounce((name: string, value: string) => {
                const params = new URLSearchParams(searchParams.toString());
                params.set(name, value);
                router.push('/cars?' + params.toString());
            }, 500),
        [router, searchParams]
    );

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
        const target = e.target;
        setMilage((prev) => ({
            ...prev,
            [name]: parseInt(target.value) | 0,
        }));
        if (currentPath !== '/cars') {
            return
        }
        debouncedInputChange(name === 'max' ? 'max_mileage' : 'min_mileage', target.value);
    };

    const completeOnchange = () => {
        if (currentPath !== '/cars') {
            return
        }
        const params = new URLSearchParams(searchParams.toString());
        params.set('min_mileage', milage?.min.toString());
        params.set('max_mileage', milage?.max.toString());
        router.push('/cars?' + params.toString());
    };


    return (
        <div>
            
            <div className='py-2.5'>
                <RangeSlider
                    min={0}
                    max={1000000}
                    step={1}
                    value={[milage?.min, milage?.max]}
                    onValueChange={onChange}
                    onValueCommit={completeOnchange}
                    className="w-full"
                />
            </div>

            <div className='flex flex-row gap-x-2 items-center'>
                <input type="number" value={milage?.min} onChange={(e) => inputChange(e, 'min')} className='bg-secondary px-3.5 py-2.5 text-primary w-full text-lg font-satoshi font-medium border-none outline-none placeholder:text-primary rounded-none' placeholder='Min Mileage' />
                <input type="number" value={milage?.max} onChange={(e) => inputChange(e, 'max')} className='bg-secondary px-3.5 py-2.5 text-primary w-full text-lg font-satoshi font-medium border-none outline-none placeholder:text-primary rounded-none' placeholder='Max Mileage' />
            </div>
            <p className='font-poppins text-base text-secondary w-full text-left'>
                {mileageTxt} : {milage?.min} - {milage?.max}
            </p>
        </div>
    );
});

MilageRange.displayName = "PriceRange"
export default MilageRange;
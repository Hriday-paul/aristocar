'use client'
import { ConfigProvider, Slider } from 'antd';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useMemo } from 'react';
import debounce from 'lodash.debounce';

const PriceRange = React.memo(({ price, setPrice, priceTxt }: { price: { min: number, max: number }, setPrice: React.Dispatch<React.SetStateAction<{ min: number, max: number }>>, priceTxt: string }) => {

    const searchParams = useSearchParams();
    const router = useRouter();
    const currentPath = usePathname();

    const onChange = (newValue: number[]) => {
        setPrice({
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
        setPrice((prev) => ({
            ...prev,
            [name]: parseInt(target.value) | 0,
        }));
        if (currentPath !== '/cars') {
            return
        }
        debouncedInputChange(name === 'max' ? 'max_price' : 'min_price', target.value);
    };

    const completeOnchange = () => {
        if (currentPath !== '/cars') {
            return
        }
        const params = new URLSearchParams(searchParams.toString());
        params.set('min_price', price?.min.toString());
        params.set('max_price', price?.max.toString());
        router.push('/cars?' + params.toString());
    };

    return (
        <div>
            <ConfigProvider
                theme={{
                    components: {
                        Slider: {
                            handleColor: "white",
                            handleActiveColor: '#BBBBBB',
                            handleActiveOutlineColor: '#BBBBBB',
                            dotBorderColor: "white",
                            trackBg: 'white',
                            trackHoverBg: 'white',
                            railBg: "#BABCBD",
                            railHoverBg: "#BABCBD",
                            dotActiveBorderColor: "#BBBBBB",
                            dotSize: 10,
                            railSize: 8
                        }
                    }
                }}>
                <Slider
                    range
                    value={[price?.min, price?.max]}
                    min={0}
                    max={1000000}
                    onChange={onChange}
                    onChangeComplete={completeOnchange}
                />
            </ConfigProvider>
            <div className='flex flex-row gap-x-2 items-center'>
                <input
                    type="number"
                    value={price?.min}
                    onChange={(e) => inputChange(e, 'min')}
                    className='bg-secondary px-3.5 py-2.5 text-primary w-full text-lg font-satoshi font-medium border-none outline-none placeholder:text-primary rounded-none'
                    placeholder='Min Price'
                />
                <input
                    type="number"
                    value={price?.max}
                    onChange={(e) => inputChange(e, 'max')}
                    className='bg-secondary px-3.5 py-2.5 text-primary w-full text-lg font-satoshi font-medium border-none outline-none placeholder:text-primary rounded-none'
                    placeholder='Max Price'
                />
            </div>
            <p className='font-poppins text-base text-secondary w-full text-left'>
                {priceTxt} : {price?.min} - {price?.max}
            </p>
        </div>
    );
});

PriceRange.displayName = "PriceRange";
export default PriceRange;

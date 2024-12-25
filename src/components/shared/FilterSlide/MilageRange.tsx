'use client'
import { ConfigProvider, InputNumberProps, Slider } from 'antd';
import React, { useMemo, useState } from 'react';

const MilageRange = React.memo(() => {
    const [milage, setMilage] = useState({
        min: 0,
        max: 50000
    });
    const onChange = (newValue: number[]) => {
        setMilage({
            min: newValue[0],
            max: newValue[1]
        });
    };
    const inputChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
        const target = e.target;
        setMilage((prev) => ({
            ...prev,
            [name]: parseInt(target.value),
        }));
    }
    return (
        <div>
            <ConfigProvider
                theme={{
                    components: {
                        Slider: {
                            handleColor: "white", // dot border color
                            handleActiveColor: '#BBBBBB',
                            handleActiveOutlineColor: '#BBBBBB', // dot hober border color
                            dotBorderColor: "white",
                            trackBg: 'white', //active section bg color
                            trackHoverBg: 'white', //active section bg color
                            railBg: "#BABCBD", //inactive section bg color
                            railHoverBg: "#BABCBD",
                            dotActiveBorderColor: "#BBBBBB",
                            dotSize: 10,
                            railSize: 8
                        }
                    }
                }}>
                <Slider range value={[milage?.min, milage?.max]} min={0} max={1000000} onChange={onChange} />
            </ConfigProvider>
            <div className='flex flex-row gap-x-2 items-center'>
                <input type="number" value={milage?.min} onChange={(e) => inputChange(e, 'min')} className='bg-secondary px-3.5 py-2.5 text-primary w-full text-lg font-satoshi font-medium border-none outline-none placeholder:text-primary' placeholder='Min Mileage' />
                <input type="number" value={milage?.max} onChange={(e) => inputChange(e, 'max')} className='bg-secondary px-3.5 py-2.5 text-primary w-full text-lg font-satoshi font-medium border-none outline-none placeholder:text-primary' placeholder='Max Mileage' />
            </div>
            <p className='font-poppins text-base text-secondary w-full text-left'>
                Mileage : {milage?.min} - {milage?.max}
            </p>
        </div>
    );
});

MilageRange.displayName = "PriceRange"
export default MilageRange;
'use client';

import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const YearPicker = ({ selectedYear, setSelectedYear }: { selectedYear: number | null, setSelectedYear: React.Dispatch<React.SetStateAction<number | null>> }) => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i); // Generate the last 100 years

    return (
        <div className="flex items-center font-poppins">
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="w-[100px] justify-between !px-2.5 !py-0 !rounded-sm">
                        {selectedYear || "Select Year"}
                        <span className="ml-2">▼</span>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-2 max-h-[200px] overflow-y-auto w-32 popup-scroll">
                    <ul className="space-y-1">
                        {years.map((year) => (
                            <li key={year}>
                                <button
                                    className={`w-full px-2 py-1 text-left rounded hover:bg-gray-100 text-sm ${selectedYear === year ? "bg-gray-200 font-semibold" : ""
                                        }`}
                                    onClick={() => setSelectedYear(year)}
                                >
                                    {year}
                                </button>
                            </li>
                        ))}
                    </ul>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default YearPicker;

'use client';

import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const PrintPdf = ({ children, clicker }: { children: React.ReactNode, clicker: React.ReactElement }) => {
    const contentRef = useRef<HTMLDivElement>(null);

    const reactToPrintFn = useReactToPrint({
        contentRef,
        // pageStyle: `@page { size:'auto'}; margin: 10mm }`
    });

    return (
        <div>
            <span onClick={() => reactToPrintFn()}>
                {clicker}
            </span>
            <div className="overflow-hidden h-0 hidden">
                <div ref={contentRef}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default PrintPdf;

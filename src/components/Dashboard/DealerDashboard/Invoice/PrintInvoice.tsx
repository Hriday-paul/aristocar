"use client"
import { useInvoiceQuery } from '@/redux/features/DealerApi';
import moment from 'moment';
import React from 'react';
import InvoiceContent from './InvoiceContent';
import PrintPdf from './PrintPdf';
import { ImSpinner8 } from 'react-icons/im';

const PrintInvoice = ({ id }: { id: string }) => {
    const { isLoading, isSuccess, data, isFetching } = useInvoiceQuery({ id });

    return (
        <div>
            {isLoading ? <div className="min-h-80 flex justify-center items-center">
                <ImSpinner8 className="text-3xl text-primary animate-spin" />
            </div> : isSuccess && <div>
                <div className='shadow-lg bg-white max-w-3xl mx-auto'>
                    <InvoiceContent data={data} />
                </div>
                <center>
                    <PrintPdf clicker={<button className='bg-primary px-4 py-2 text-white rounded text-lg font-poppins mt-5 hover:bg-opacity-85 duration-200'>Print</button>}>
                        <InvoiceContent data={data} />
                    </PrintPdf>
                </center>
            </div>
            }
        </div >
    );
};

export default PrintInvoice;
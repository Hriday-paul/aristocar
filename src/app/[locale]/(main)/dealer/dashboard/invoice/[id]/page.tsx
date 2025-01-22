import PrintInvoice from '@/components/Dashboard/DealerDashboard/Invoice/PrintInvoice';
import React from 'react';

const page = async({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    return (
        <PrintInvoice id={id}/>
    );
};

export default page;
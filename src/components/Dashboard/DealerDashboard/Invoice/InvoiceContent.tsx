import { PaymentInvoiceType } from '@/redux/features/types';
import moment from 'moment';
import React from 'react';

const InvoiceContent = ({ data }: { data: { data: PaymentInvoiceType } }) => {
    return (
        <div className="max-w-3xl mx-auto p-8 font-poppins">
            <h1 className='text-3xl font-lastica text-center text-black mb-5 mt-2'>ARISTOCAR</h1>
            <h2 className="text-2xl font-bold mb-4">Invoice</h2>

            <div className="flex justify-between mb-6">
                <div>
                    <p><strong>Invoice Date:</strong> {moment(data?.data?.invoiceDate).format("DD MMMM YYYY")}</p>
                    <p><strong>Payment Date:</strong> {moment(data?.data?.paymentId?.createdAt).format("DD MMMM YYYY")}</p>
                    <p><strong>Invoice Nr.:</strong> {data?.data?.invoiceNumber}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-6">
                <div>
                    <h2 className="text-xl font-semibold mb-2">Bill To</h2>
                    <p>{data?.data?.paymentId?.user?.companyName}</p>
                    <p>{data?.data?.paymentId?.user?.dealer_address?.street}</p>
                    <p>{data?.data?.paymentId?.user?.dealer_address?.city}</p>
                    <p>{data?.data?.paymentId?.user?.dealer_address?.country}</p>
                    {data?.data?.paymentId?.user?.dealer_address?.vat_id && <p className='mt-4'><strong>VAT-ID:</strong> {data?.data?.paymentId?.user?.dealer_address?.vat_id}</p>}
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2">Pay To</h2>
                    <p>Aristocar Europe SRL</p>
                    <p>Teststreet 3</p>
                    <p>445200 Vama</p>
                    <p>Romania</p>
                    <p className='mt-4'><strong>VAT-ID:  </strong>RO12345678</p>
                </div>
            </div>

            <table className="w-full mb-6">
                <thead>
                    <tr className="border-b">
                        <th className="text-left py-2">Description</th>
                        <th className="text-right py-2">Quantity</th>
                        <th className="text-right py-2">Amount (excl. Tax)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-2">
                            {data?.data?.paymentId?.subscription?.package?.shortTitle}
                            <br />
                            <span className="text-sm text-gray-600">Service Period: {moment(data?.data?.paymentId?.subscription?.createdAt).format("DD MMMM YYYY")} – {moment(data?.data?.paymentId?.subscription?.expiredAt).format("DD MMMM YYYY")}</span>
                        </td>
                        <td className="text-right py-2">1</td>
                        <td className="text-right py-2">{data?.data?.paymentId?.subscription?.amount} €</td>
                    </tr>
                </tbody>
            </table>

            <div className="flex justify-end mb-6">
                <div className="w-1/2">
                    <div className="flex justify-between">
                        <p>Subtotal</p>
                        <p>{data?.data?.paymentId?.subscription?.amount} €</p>
                    </div>
                    <div className="flex justify-between">
                        <p>VAT {data?.data?.paymentId?.user?.vat_type == "Romanian" ? "19%" : "0%"}</p>
                        <p>{data?.data?.paymentId?.user?.vat_type == "Romanian" ? ((data?.data?.paymentId?.subscription?.amount * 19) / 100) : '0'} €</p>
                    </div>
                    <div className="flex justify-between font-bold">
                        <p>Amount due</p>
                        <p>0 €</p>
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Note:</h2>
                <p>{data?.data?.paymentId?.user?.vat_type == "Romanian" ? "VAT charged according to Romanian tax regulations." : data?.data?.paymentId?.user?.vat_type == "Invalid vat" ? "Export - VAT-exempt according to Article 146 of the VAT Directive." : "VAT-exempt intra-community supply according to Article 138 of the VAT Directive."}</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">Payment Details:</h2>
                <p>Payment received in full on {moment(data?.data?.paymentId?.createdAt).format("DD MMMM YYYY")}. This invoice serves as confirmation of your payment.</p>
            </div>
        </div>
    );
};

export default InvoiceContent;
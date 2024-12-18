import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from 'next/link';


const RecentBillingHistory = () => {

    const invoices = [
        {
            id: 1,
            bill_num: "New GLC-2023",
            pk_name: "basic",
            price: "150",
            date: "11.45AM, 24 oct 2024"
        },
        {
            id: 2,
            bill_num: "New GLC-2023",
            pk_name: "basic",
            price: "150",
            date: "11.45AM, 24 oct 2024"
        },
        {
            id: 3,
            bill_num: "New GLC-2023",
            pk_name: "basic",
            price: "150",
            date: "11.45AM, 24 oct 2024"
        },
        {
            id: 4,
            bill_num: "New GLC-2023",
            pk_name: "basic",
            price: "150",
            date: "11.45AM, 24 oct 2024"
        },
        {
            id: 5,
            bill_num: "New GLC-2023",
            pk_name: "basic",
            price: "150",
            date: "11.45AM, 24 oct 2024"
        },
    ]

    return (
        <div>
            <h4 className='mt-10 mb-5 font-poppins text-xl xl:text-2xl text-primary'>Recent Billing History</h4>
            <div className='bg-white shadow-2 border-stroke my-5'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-lg font-poppins">Billing Number</TableHead>
                            <TableHead className="text-lg font-poppins">Package Name</TableHead>
                            <TableHead className="text-lg font-poppins">Package Amount</TableHead>
                            <TableHead className="text-lg font-poppins">Date</TableHead>
                            <TableHead className="text-right text-lg font-poppins"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            invoices?.map((inv, indx) => {
                                return <TableRow key={inv?.id} className={`font-poppins ${indx % 2 == 0 ? 'bg-slate-100/50' : ''}`}>
                                    <TableCell className='py-5'>{inv?.bill_num}</TableCell>
                                    <TableCell>{inv?.pk_name}</TableCell>
                                    <TableCell>{inv?.price} €</TableCell>
                                    <TableCell>{inv?.date}</TableCell>
                                    <TableCell className="text-right">
                                        <Link href={`/dealer/dashboard/invoice/${inv?.id}`}><span className='underline underline-offset-2 cursor-pointer'>View invoice</span></Link>
                                    </TableCell>
                                </TableRow>
                            })
                        }
                    </TableBody>
                </Table>

            </div>
        </div>
    );
};

export default RecentBillingHistory;
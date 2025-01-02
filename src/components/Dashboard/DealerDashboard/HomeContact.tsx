'use client'
import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import ContactView from '../UserDashboard/ContactView';
import { useDealerContactsQuery } from '@/redux/features/DealerApi';
import { Skeleton } from '@/components/ui/skeleton';
import SmError from '@/components/shared/Dashboard/SmError';
import Link from 'next/link';


const HomeContact = () => {
    const { isLoading, isSuccess, isError, data: contactData } = useDealerContactsQuery();


    const contacts = [
        {
            id: 1,
            car_name: "New GLC-2023",
            dealer_contact: "+09 4544844123",
            dealer_name: "Mr. Ostad Nazmul",
            email: "abcd@gmail.com"
        },
        {
            id: 2,
            car_name: "New GLC-2023",
            dealer_contact: "+09 4544844123",
            dealer_name: "Mr. Ostad Nazmul",
            email: "abcd@gmail.com"
        },
        {
            id: 3,
            car_name: "New GLC-2023",
            dealer_contact: "+09 4544844123",
            dealer_name: "Mr. Ostad Nazmul",
            email: "abcd@gmail.com"
        },
        {
            id: 4,
            car_name: "New GLC-2023",
            dealer_contact: "+09 4544844123",
            dealer_name: "Mr. Ostad Nazmul",
            email: "abcd@gmail.com"
        },
        {
            id: 5,
            car_name: "New GLC-2023",
            dealer_contact: "+09 4544844123",
            dealer_name: "Mr. Ostad Nazmul",
            email: "abcd@gmail.com"
        }
    ];

    return (
        <div>
            <h4 className='mt-10 mb-5 font-poppins text-xl xl:text-2xl text-primary'>Recent Contact History</h4>
            {isLoading ?
                <div className='flex flex-col md:flex-row gap-5 items-center'>
                    <Skeleton className="h-10 w-full rounded-xl" />
                    <Skeleton className="h-10 w-full rounded-xl" />
                </div> :
                isError ?
                    <SmError /> :
                    isSuccess ?
                        <div className='bg-white shadow-2 border-stroke my-5'>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="text-lg font-poppins">Car Name</TableHead>
                                        <TableHead className="text-lg font-poppins">Name</TableHead>
                                        <TableHead className="text-lg font-poppins">Contact</TableHead>
                                        <TableHead className="text-lg font-poppins">Email</TableHead>
                                        <TableHead className="text-right text-lg font-poppins"></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {
                                        contactData?.data?.map((contact, indx) => {
                                            return <TableRow key={contact?._id} className={`font-poppins ${indx % 2 == 0 ? 'bg-slate-100/50' : ''}`}>
                                                <TableCell className='py-5'>
                                                    <Link href={`/details/${contact?.carId?._id}`}>{contact?.carId?.name}</Link>
                                                </TableCell>

                                                <TableCell>{contact?.firstName + ' ' + contact?.lastName}</TableCell>
                                                <TableCell>{contact?.phone}</TableCell>
                                                <TableCell>{contact?.email}</TableCell>
                                                <TableCell className="text-right">
                                                    <ContactView details={contact}>
                                                        <span className='underline underline-offset-2 cursor-pointer'>View Details</span>
                                                    </ContactView>
                                                </TableCell>
                                            </TableRow>
                                        })
                                    }
                                </TableBody>
                            </Table>

                        </div> : <></>
            }
        </div>
    );
};

export default HomeContact;
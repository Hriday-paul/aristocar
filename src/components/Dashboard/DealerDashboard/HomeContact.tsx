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


const HomeContact = () => {

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
    ]

    return (
        <div>
            <h4 className='mt-10 mb-5 font-poppins text-xl xl:text-2xl text-primary'>Recent Contact History</h4>
            <div className='bg-white shadow-2 border-stroke my-5'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-lg font-poppins">Car Name</TableHead>
                            <TableHead className="text-lg font-poppins">Contact</TableHead>
                            <TableHead className="text-lg font-poppins">Name</TableHead>
                            <TableHead className="text-lg font-poppins">Email</TableHead>
                            <TableHead className="text-right text-lg font-poppins"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            contacts?.map((contact, indx) => {
                                return <TableRow key={contact?.id} className={`font-poppins ${indx % 2 == 0 ? 'bg-slate-100/50' : ''}`}>
                                    <TableCell className='py-5'>{contact?.car_name}</TableCell>
                                    <TableCell>{contact?.dealer_contact}</TableCell>
                                    <TableCell>{contact?.dealer_name}</TableCell>
                                    <TableCell>{contact?.email}</TableCell>
                                    <TableCell className="text-right"><ContactView><span className='underline underline-offset-2 cursor-pointer'>View Details</span></ContactView></TableCell>
                                </TableRow>
                            })
                        }
                    </TableBody>
                </Table>

            </div>
        </div>
    );
};

export default HomeContact;
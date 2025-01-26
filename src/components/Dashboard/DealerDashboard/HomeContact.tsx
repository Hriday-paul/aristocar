'use client'
import React, { useCallback, useState } from 'react';
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
import CustomPagination from '@/components/shared/CustomPagination/CustomPagination';
import Image from 'next/image';
import emptyDataImg from '../../../../public/empty_data.jpg'


const HomeContact = ({ title, txt }: { title: string, txt: { [key: string]: string } }) => {
    const [page, setPage] = useState(1);
    const { isLoading, isSuccess, isError, data: contactData } = useDealerContactsQuery({ page });

    const handleChangePage = useCallback((page: number) => {
        setPage(page);
    }, [])

    return (
        <div>
            <h4 className='mt-10 mb-5 font-poppins text-xl xl:text-2xl text-primary'>{title}</h4>
            {isLoading ?
                <div className='flex flex-col md:flex-row gap-5 items-center'>
                    <Skeleton className="h-10 w-full rounded-xl" />
                    <Skeleton className="h-10 w-full rounded-xl" />
                </div> :
                isError ?
                    <SmError /> :
                    isSuccess ?
                        <div>
                            <div className='bg-white shadow-2 border-stroke my-5'>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="text-lg font-poppins">{txt?.car_name}</TableHead>
                                            <TableHead className="text-lg font-poppins">{txt?.name}</TableHead>
                                            <TableHead className="text-lg font-poppins">{txt?.contact}</TableHead>
                                            <TableHead className="text-lg font-poppins">{txt?.email}</TableHead>
                                            <TableHead className="text-right text-lg font-poppins"></TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {
                                            contactData?.data?.data?.map((contact, indx) => {
                                                return <TableRow key={contact?._id} className={`font-poppins ${indx % 2 == 0 ? 'bg-slate-100/50' : ''}`}>
                                                    <TableCell className='py-5'>
                                                        <Link href={`/details/${contact?.carId?._id}`}>{contact?.carId?.name || "N/A"}</Link>
                                                    </TableCell>

                                                    <TableCell>{contact?.firstName + ' ' + contact?.lastName}</TableCell>
                                                    <TableCell>{contact?.phone}</TableCell>
                                                    <TableCell>{contact?.email}</TableCell>
                                                    <TableCell className="text-right">
                                                        <ContactView details={contact} txt={txt}>
                                                            <span className='underline underline-offset-2 cursor-pointer'>{txt?.view_details}</span>
                                                        </ContactView>
                                                    </TableCell>
                                                </TableRow>
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </div>
                            {
                                contactData?.data?.data?.length <= 0 && <section className='md:col-span-2 lg:col-span-3 min-h-[calc(30vh)] flex flex-col items-center justify-center'>
                                    <Image src={emptyDataImg} className='h-40 w-auto mx-auto' alt='empty data' />
                                    <h5 className='text-xl font-poppins text-center'>Empty data</h5>
                                </section>
                            }
                            <CustomPagination currentPage={page} onPageChange={handleChangePage} totalPages={contactData?.data?.meta?.totalPage || 1} siblingCount={1} />
                        </div> : <></>
            }
        </div>
    );
};

export default HomeContact;
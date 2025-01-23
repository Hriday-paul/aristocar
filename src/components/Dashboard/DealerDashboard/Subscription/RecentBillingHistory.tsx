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
import Link from 'next/link';
import { useRecentBillsQuery } from '@/redux/features/DealerApi';
import SmError from '@/components/shared/Dashboard/SmError';
import { Skeleton } from '@/components/ui/skeleton';
import moment from 'moment'
import CustomPagination from '@/components/shared/CustomPagination/CustomPagination';
import Image from 'next/image';
import emptyDataImg from '../../../../../public/empty_data.jpg'

const RecentBillingHistory = ({ title, headTxt }: { title: string, headTxt: { [key: string]: string } }) => {
    const [page, setPage] = useState(1);
    const { isLoading, isError, isSuccess, data } = useRecentBillsQuery({ page });

    const handleChangePage = useCallback((page: number) => {
        setPage(page);
    }, [])

    return (
        <div>
            {
                isLoading ? <div className='flex flex-col gap-5 items-center'>
                    <Skeleton className="h-10 w-full rounded" />
                    <Skeleton className="h-10 w-full rounded" />
                    <Skeleton className="h-10 w-full rounded" />
                    <Skeleton className="h-10 w-full rounded" />
                </div> : isError ? <SmError /> : isSuccess ? <div>
                    <h4 className='my-5 font-poppins text-xl xl:text-2xl text-primary'>{title}</h4>
                    {
                        data?.data?.data?.length > 0 ?
                            <div className='bg-white shadow-2 border-stroke my-5'>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="text-lg font-poppins">{headTxt?.trans_id}</TableHead>
                                            <TableHead className="text-lg font-poppins">{headTxt?.package}</TableHead>
                                            <TableHead className="text-lg font-poppins">{headTxt?.amount}</TableHead>
                                            <TableHead className="text-lg font-poppins">{headTxt?.date}</TableHead>
                                            <TableHead className="text-right text-lg font-poppins"></TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {
                                            data?.data?.data?.map((inv, indx) => {
                                                return <TableRow key={inv?._id} className={`font-poppins ${indx % 2 == 0 ? 'bg-slate-100/50' : ''}`}>
                                                    <TableCell className='py-5'>{inv?.tranId}</TableCell>
                                                    <TableCell>{inv?.subscription?.package?.shortTitle}</TableCell>
                                                    <TableCell>{inv?.amount} €</TableCell>
                                                    <TableCell>{moment(inv?.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</TableCell>
                                                    <TableCell className="text-right">
                                                        <Link href={`/dealer/dashboard/invoice/${inv?._id}`}><span className='underline underline-offset-2 cursor-pointer'>{headTxt?.view_invoice}</span></Link>
                                                    </TableCell>
                                                </TableRow>
                                            })
                                        }
                                    </TableBody>
                                </Table>

                            </div>
                            :
                            <section className='w-full min-h-[calc(30vh)] flex flex-col items-center justify-center'>
                                <Image src={emptyDataImg} className='h-40 w-auto mx-auto' alt='empty data' />
                                <h5 className='text-xl font-poppins text-center'>Data Not Found</h5>
                            </section>}
                    {data?.data?.meta?.page > 0 && <CustomPagination currentPage={page} onPageChange={handleChangePage} totalPages={data?.data?.meta?.page} siblingCount={1} />}
                </div> : <></>}
        </div>
    );
};

export default RecentBillingHistory;
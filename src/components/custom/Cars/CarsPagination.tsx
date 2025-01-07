'use client'
import CustomPagination from '@/components/shared/CustomPagination/CustomPagination';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';

const CarsPagination = ({ totalPage }: { totalPage: number }) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);

    const handleChangePage = useCallback((num: number) => {
        setCurrentPage(num)
        const params = new URLSearchParams(searchParams.toString())
        params.set('page', num.toString());
        router.push('/cars' + '?' + params?.toString())
    }, [router, searchParams])

    useEffect(() => {
        const currentPage = Number(searchParams.get('page')) || 1
        setCurrentPage(currentPage)
    }, [searchParams])

    return (
        <div>
            <CustomPagination currentPage={currentPage} onPageChange={handleChangePage} totalPages={totalPage} siblingCount={1} />
        </div>
    );
};

export default CarsPagination;
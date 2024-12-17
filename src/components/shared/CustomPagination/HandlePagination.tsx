'use client'
import React, { useState } from 'react';
import CustomPagination from './CustomPagination';

const HandlePagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const handleChangePage = (num: number) => {
        setCurrentPage(num)
    }
    return (
        <div>
            <CustomPagination currentPage={currentPage} onPageChange={handleChangePage} totalPages={500} siblingCount={1}/>
        </div>
    );
};

export default HandlePagination;
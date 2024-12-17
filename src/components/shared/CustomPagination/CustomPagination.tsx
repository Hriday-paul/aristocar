import React from "react";
import { GrPrevious } from "react-icons/gr";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    siblingCount?: number;
}

const CustomPagination = React.memo(({
    totalPages,
    currentPage,
    onPageChange,
    siblingCount = 1,
}: PaginationProps) => {
    const range = (start: number, end: number) => {
        return Array.from({ length: end - start + 1 }, (_, idx) => start + idx);
    };

    const paginationRange = (): (number | string)[] => {
        const totalNumbers = siblingCount * 2 + 5;
        const totalPageNumbers = Math.min(totalNumbers, totalPages);

        if (totalPages > totalNumbers) {
            const leftSiblingIndex = Math.max(currentPage - siblingCount, 2);
            const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages - 1);

            const shouldShowLeftEllipsis = leftSiblingIndex > 2;
            const shouldShowRightEllipsis = rightSiblingIndex < totalPages - 1;

            const firstPage = 1;
            const lastPage = totalPages;

            if (shouldShowLeftEllipsis && shouldShowRightEllipsis) {
                const middleRange = range(leftSiblingIndex, rightSiblingIndex);
                return [firstPage, "...", ...middleRange, "...", lastPage];
            }

            if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
                const middleRange = range(totalPages - 4 - siblingCount * 2, totalPages - 1);
                return [firstPage, "...", ...middleRange, lastPage];
            }

            if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
                const middleRange = range(2, 3 + siblingCount * 2);
                return [firstPage, ...middleRange, "...", lastPage];
            }
        }

        return range(1, totalPages);
    };

    const paginationItems = paginationRange();

    return (
        <div className="font-poppins flex flex-row items-center">
            <button
                className="p-2 hover:bg-[#E9E9E9] duration-150 cursor-pointer disabled:cursor-not-allowed"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                <GrPrevious />
            </button>
            {paginationItems.map((item, index) => (
                <button
                    key={index}
                    className={`pagination-btn ${item === currentPage ? "bg-primary px-3 py-1 text-white mx-2" : "px-3 py-1 hover:bg-[#E9E9E9] duration-150"
                        }`}
                    onClick={() => typeof item === "number" && onPageChange(item)}
                    disabled={item === "..."}
                >
                    {item}
                </button>
            ))}
            <button
                className="p-2 hover:bg-[#E9E9E9] duration-150 cursor-pointer disabled:cursor-not-allowed"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                <GrPrevious className="rotate-180" />
            </button>
        </div>
    );
});

CustomPagination.displayName = 'CustomPagination'
export default CustomPagination;
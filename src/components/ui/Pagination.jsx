'use client'
import ReactPaginate from "react-paginate"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"

export const Pagination = ({ currentPage, onPageChange, totalPages }) => {

    if (totalPages <= 1) {
        return (<></>)
    }
    return (
        <div>
            <ReactPaginate
                forcePage={currentPage - 1}
                breakLabel="..."
                nextLabel={<FaChevronRight />}
                nextLinkClassName={'flex text-primary-200 px-1'}
                onPageChange={(event) => onPageChange(event.selected + 1)}
                pageRangeDisplayed={1}
                pageCount={totalPages}
                previousLabel={<FaChevronLeft />}
                previousLinkClassName={'flex text-primary-200 px-1'}
                pageClassName={'bg-slate-100 rounded hover:bg-slate-200'}
                pageLinkClassName={'flex justify-center items-center w-7 h-7'}
                activeLinkClassName={'bg-primary-200 text-white rounded'}
                className={'flex items-center gap-1'}
            />
        </div>
    )
}

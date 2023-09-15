import React from 'react';
import {useSearchParams} from "react-router-dom";

import ReactPaginate from "react-paginate";

const Pagination = ({currentPage}) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handlePageChange = (e) => {
        const page = e.selected + 1;

        if( page > 1 ){
            setSearchParams({
                ...searchParams,
                page
            })
        }else{
            // searchParams.delete('page')
            setSearchParams({})
        }
    };


    return (
        <div className={'center'}>
            <ReactPaginate
                nextLabel={<i className="material-icons">chevron_right</i>}
                onPageChange={handlePageChange}
                forcePage={currentPage - 1}
                pageCount={500}
                previousLabel={<i className="material-icons">chevron_left</i>}
                containerClassName={'pagination'}
                pageClassName='waves-effect'
                activeClassName='active'
            />
        </div>
    );
};

export {Pagination};
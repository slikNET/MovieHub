import React, {useContext} from 'react';
import ReactPaginate from "react-paginate";

import {MoviesContext} from "../../pages";

const Pagination = () => {
    const {
        currentPage,
        setCurrentPage,
        searchParams,
        setSearchParams,
        setPageLoading
    } = useContext(MoviesContext);

    const handlePageChange = (e) => {
        const page = e.selected + 1;
        if( page > 1 ){
            setSearchParams({
                ...searchParams,
                page
            });
        }else{
            setSearchParams({});
        }

        setCurrentPage(page);
    };

    const handleClick = (e) => {
        const page = e?.nextSelectedPage ? e.nextSelectedPage+1: e.selected+1;
        if( page !== currentPage ){
            setPageLoading(true);
        }
    }

    return (
        <div className={'center'}>
            <ReactPaginate
                nextLabel={<i className="material-icons">chevron_right</i>}
                onClick={handleClick}
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
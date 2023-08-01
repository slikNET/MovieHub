import React, {createContext, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {MoviesList, PageLoader, Pagination} from "../../components";

const MoviesContext = createContext(null);

const MoviesPage = () => {
    const [pageLoading, setPageLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page')) || 1);

    return (
        <>
            <MoviesContext.Provider value={{currentPage, setCurrentPage, searchParams, setSearchParams, pageLoading, setPageLoading}}>
                {pageLoading && <PageLoader/> }

                {!pageLoading && <Pagination />}

                <MoviesList />
            </MoviesContext.Provider>
        </>
    );
};

export {
    MoviesPage,
    MoviesContext
};
import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {MoviesList, PageLoader, Pagination} from "../../components";
import {moviesActions} from "../../redux/slices/moviesSlice";


const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const dispatch = useDispatch();
    const {isLoading} = useSelector(state => state.movies)

    const currentPage = searchParams.get('page') || 1;

    useEffect(() => {
        dispatch(moviesActions.betByPage({page: currentPage}))
    }, [currentPage])

    return (
        <>
            {isLoading && <PageLoader/> }

            {!isLoading && <Pagination currentPage={currentPage}/>}

            <MoviesList />
        </>
    );
};

export {
    MoviesPage
};
import React from 'react';

import {MovieDetail, PageLoader} from "../../components";
import {useSelector} from "react-redux";

const MovieDetailPage = () => {
    const {isLoading} = useSelector(state => state.movies)

    return (
        <>
            {isLoading && <PageLoader/> }

            <MovieDetail />
        </>
    );
};

export {
    MovieDetailPage
};
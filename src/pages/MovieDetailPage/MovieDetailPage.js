import React, {createContext, useState} from 'react';
import {useParams} from "react-router-dom";

import {MovieDetail, PageLoader} from "../../components";

const MovieDetailContext = createContext(null);

const MovieDetailPage = () => {
    const [pageLoading, setPageLoading] = useState(true);
    const [movie, setMovie] = useState(null);
    const {id} = useParams();



    return (
        <>
            <MovieDetailContext.Provider value={{id, pageLoading, setPageLoading, setMovie}}>
                {pageLoading && <PageLoader/> }

                <MovieDetail movie={movie}/>
            </MovieDetailContext.Provider>
        </>
    );
};

export {
    MovieDetailPage,
    MovieDetailContext
};
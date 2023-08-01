import React, {useContext, useEffect, useState} from 'react';

import css from "./movies.module.css";
import {MovieCard} from "../../../components";
import {genreService, movieService} from "../../../services";
import {MoviesContext} from "../../../pages";
import {useLocation} from "react-router-dom";

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const {currentPage, setCurrentPage, setPageLoading, searchParams, setSearchParams} = useContext(MoviesContext);
    const {state} = useLocation();

    useEffect(() => {
        movieService.betByPage(currentPage).then(res => {
            setMovies(res.data.results)
            setPageLoading(false)
        }).catch((error)=>{
            alert(`Error: ${error.message}`);

            setCurrentPage(1);
            setSearchParams({
                ...searchParams,
                page: 1
            });
        })
    }, [currentPage])

    useEffect(() => {
        if( state?.page ){
            setCurrentPage(state.page);
        }
    },[state?.page])

    useEffect(() => {
        genreService.getAllFromMovies().then(res => {
            setGenres(res.data)
        })
    },[])

    return (
        <div className='row'>
            <div className={css.moviesRow}>
                { movies?.map(movie =>
                    <div key={movie.id} className={css.item}>
                        <div className='col s12'>
                            <MovieCard movie={movie} genres={genres} />
                        </div>
                    </div>)}
            </div>
        </div>
    );
};

export {MoviesList};
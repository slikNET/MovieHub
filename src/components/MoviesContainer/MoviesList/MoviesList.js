import React, {useState} from 'react';

import css from "./movies.module.css";
import {MovieCard} from "../../../components";
import {useSelector} from "react-redux";

const MoviesList = () => {
    const [genres, setGenres] = useState([]);

    const {
        moviesList: {results: movies},
        movieSingle
    } = useSelector(state => state.movies);

    console.log(movieSingle)
    

    return (
        <div className='row'>
            <div className={css.moviesRow}>
                {movies?.map(movie =>
                    <div key={movie.id} className={css.item}>
                        <div className='col s12'>
                            <MovieCard movie={movie} genres={genres}/>
                        </div>
                    </div>)}
            </div>
        </div>
    );
};

export {
    MoviesList
};
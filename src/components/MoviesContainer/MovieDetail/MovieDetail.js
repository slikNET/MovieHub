import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './movie.module.css';
import {imgPath} from "../../../constants";
import {ImgPlaceholder} from "./ImgPlaceholder";
import {GenreBadges} from "../GenreBadges/GenreBadges";
import {moviesActions} from "../../../redux/slices/moviesSlice";

const MovieDetail = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const dispatch = useDispatch();
    const {movieSingle:movie, isLoading} = useSelector(state => state.movies)

    useEffect(() => {
        dispatch(moviesActions.getById({id}))

        /*
            TODO: на подію unMount пробую ресетнути `movieSingle` з `store`, тому що коли зайти на single сторінку, данні в `movieSingle`
                    записуються, потім виходжу назад на список фільмів, і знову вибираю другий фільм для детального перегляду - короткочасно
                    було видно попередній фільм, потім данні перезаписувались з того фільма на якомий я перейшов.
                    І це логічно, бо `movieSingle` в мене вже записалась.
                    Питання в тому чи правильно я це роблю? Для цього я створив в dispatch окремий action і тут його викликаю.
                    І чому в MoviesList.js на 15 стр. `movieSingle` консолиться 3 рази, і перший з них - з данними?
         */
        return () => {
            dispatch(moviesActions.resetSingleMovie());
        };
    }, []);


    return (
        <>
            <div className={`card ${css.card}`}>
                <div className={`card-image ${css.image}`}>
                    {isLoading && <ImgPlaceholder className={css.placeholder} />}
                        <img style={{display: isLoading ? "none" : "block"}}
                             src={`${imgPath.original}${movie?.poster_path}`}
                             alt={movie?.title}
                        />
                    <h1 className={`card-title ${css.title}`}>{movie?.title}</h1>
                </div>
            </div>
            <div className="container">
                <div className={`card ${css.card}`}>
                    <div className="card-content">
                        <GenreBadges genres={movie?.genres}/>

                        <p>{movie?.overview}</p>
                    </div>
                    <div className="card-action">
                        <button
                            className='waves-effect waves-light btn'
                            onClick={() => navigate(-1)}
                        >
                            <i className="material-icons left">arrow_left</i>
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export {MovieDetail};
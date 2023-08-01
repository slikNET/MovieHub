import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import css from './movie.module.css';
import {imgPath, urls} from "../../../constants";
import {movieService} from "../../../services";
import {MovieDetailContext} from "../../../pages";
import {ImgPlaceholder} from "./ImgPlaceholder";
import {GenreBadges} from "../GenreBadges/GenreBadges";

const MovieDetail = ({movie}) => {
    const navigate = useNavigate();
    const {id, setMovie, setPageLoading} = useContext(MovieDetailContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        movieService.betById(id).then(res => {
            if( res?.status === 200 ){
                setMovie(res.data);
                setPageLoading(false);
            }
        }).catch((error)=>{
            alert(`Error: ${error.message}`);

            navigate(urls.movie.root);
        })
    }, [])

    return (
        <>
            <div className={`card ${css.card}`}>
                <div className={`card-image ${css.image}`}>
                    {loading && <ImgPlaceholder className={css.placeholder} />}
                        <img style={{display: loading ? "none" : "block"}}
                             src={`${imgPath.original}${movie?.poster_path}`}
                             alt={movie?.title}
                             onLoad={() => setLoading(false)}
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
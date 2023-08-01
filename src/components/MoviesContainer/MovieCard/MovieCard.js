import React from 'react';
import {Link} from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings";

import {PosterPreview} from "../../../components";
import {MovieInfo} from "../MovieInfo/MovieInfo";
import {urls} from "../../../constants";
import {GenreBadges} from "../GenreBadges/GenreBadges";

const MovieCard = ({movie, genres: {genres}}) => {
    const {id, title, poster_path, genre_ids, vote_average} = movie;

    const movieGenres = genres?.filter(genre => {
        return genre_ids.includes(genre.id);
    });

    return (
        <div className="card">
            <PosterPreview path={poster_path} alt={title} />

            <div className="card-content">
                <StarRatings rating={(vote_average/10)*5}
                             starRatedColor='#26a69a'
                             starDimension="17px"
                             starSpacing="2px"/>

                <span className="card-title activator grey-text text-darken-4">
                    {title}
                </span>

                <GenreBadges genres={movieGenres}/>

                <p>
                    <Link
                        className={'waves-effect waves-light btn'}
                        to={`${urls.movie.single}/${id}`}>
                            Details
                    </Link>
                </p>
            </div>

            <MovieInfo movie={movie}/>
        </div>
    );
};

export {MovieCard};
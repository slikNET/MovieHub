import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {genresActions} from "../../redux/slices/genresSlice";
import {NavLink} from "react-router-dom";

const GenresNav = () => {

    const dispatch = useDispatch();
    const {genres} = useSelector(state => state.genres)

    useEffect(() => {
        dispatch(genresActions.all())
    }, []);

    return (
        <>
            <ul className="collection with-header">
                <li className="collection-header"><h5>Genres</h5></li>
                {genres?.map(genre =>
                    <NavLink key={genre.id} to={`genre/${genre.id}`} className="collection-item">
                        {genre.name}
                    </NavLink>
                )}
            </ul>
        </>
    );
};

export {
    GenresNav
};
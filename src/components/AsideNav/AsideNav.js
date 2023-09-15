import React from 'react';
import {NavLink} from "react-router-dom";

import {urls} from "../../constants";
import {GenresNav} from "../GenresNav/GenresNav";

const AsideNav = () => {
    return (
        <>
            <div className="collection">
                <NavLink to={urls.movie.root} className="collection-item">
                    <i className="material-icons left">movie</i>
                    Movies
                </NavLink>
                <NavLink to={urls.user.root} className="collection-item">
                    <i className="material-icons left">account_circle</i>
                    User Account
                </NavLink>
            </div>

            <GenresNav />
        </>
    );
};

export {AsideNav};
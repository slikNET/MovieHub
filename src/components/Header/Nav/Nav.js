import React from 'react';
import {NavLink} from "react-router-dom";

import {urls} from "../../../constants";

const Nav = () => {
    return (
        <nav>
            <div className="nav-wrapper light-blue">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <NavLink to={urls.home} className="brand-logo"><i className="material-icons">theaters</i>MovieHub</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export {Nav};
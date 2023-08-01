import React from 'react';

const MovieInfo = ({movie}) => {
    const {title, overview} = movie;

    return (
        <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                    {title}
                    <i className="material-icons right">close</i>
                </span>
            <p>{overview}</p>
        </div>
    );
};

export {MovieInfo};
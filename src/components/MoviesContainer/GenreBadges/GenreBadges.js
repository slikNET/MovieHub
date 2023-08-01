import React from 'react';

import css from './badge.module.css';
const GenreBadges = ({genres}) => {
    return (
        <>
            {genres && <div className={css.badges}>
                {genres.map(genre =>
                    <span className={`${css.badge} new badge left blue`} key={genre.id} data-badge-caption="">{genre.name}</span>
                )}
            </div>}
        </>
    );
};

export {GenreBadges};
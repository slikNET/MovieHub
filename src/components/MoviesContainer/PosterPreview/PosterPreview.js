import React, {useState} from 'react';

import css from './poster.module.css';
import {imgPath} from "../../../constants";
import {ImgPlaceholder} from "./ImgPlaceholder";

const PosterPreview = ({path, alt}) => {
    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading && <ImgPlaceholder className={css.placeholder} />}
            <div
                style={{display: loading ? "none" : "block"}}
                className="card-image waves-effect waves-block waves-light"
            >
                <img className="activator"
                     src={`${imgPath.w300}${path}`}
                     alt={alt}
                     onLoad={() => setLoading(false)}
                />
            </div>
        </>
    );
};

export {PosterPreview};
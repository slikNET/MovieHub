import React from 'react';

const PageLoader = () => {
    return (
        <div className="progress" style={{margin:'28px 0'}}>
            <div className="indeterminate"></div>
        </div>
    );
};

export {PageLoader};
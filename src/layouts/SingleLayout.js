import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components";

const SingleLayout = () => {
    return (
        <>
            <Header/>

            <main>
                <Outlet />
            </main>
        </>
    );
};

export {SingleLayout};
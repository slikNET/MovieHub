import React from 'react';
import {Outlet} from "react-router-dom";

import {AsideNav, Header} from "../components";

const MainLayout = () => {
    return (
        <>
            <Header/>

            <main className="container">
                <div className="row">
                    <div className="col s12 m4 l3">
                        <AsideNav />
                    </div>

                    <div className="col s12 m8 l9">
                        <Outlet />
                    </div>
                </div>
            </main>
        </>
    );
};

export {MainLayout};
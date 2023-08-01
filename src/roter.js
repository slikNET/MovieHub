import {createBrowserRouter} from "react-router-dom";

import {urls} from "./constants";
import {MainLayout, SingleLayout} from "./layouts";
import {HomePage, MoviesPage, MovieDetailPage, UserPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '',
        children: [
            {
                element: <MainLayout/>,
                children: [
                    {
                        path: urls.home,
                        element: <HomePage/>
                    },
                    {
                        path: urls.movie.root,
                        element: <MoviesPage/>
                    },
                    {
                        path: urls.user.root,
                        element: <UserPage/>
                    }
                ]
            },
            {
                element: <SingleLayout/>,
                children: [
                    {
                        path: `${urls.movie.single}/:id`,
                        element: <MovieDetailPage/>
                    }
                ]
            }
        ]
    }
]);

export {router};
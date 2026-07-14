import {createBrowserRouter} from "react-router";
import MoviesPage from "../pages/MoviesPage.tsx";
import SearchPage from "../pages/SearchPage.tsx";
import MovieDetailsPage from "../pages/MovieDetailsPage.tsx";

export const router = createBrowserRouter([
    {path:'/', element: <MoviesPage/>},
    {path: '/search', element: <SearchPage/>},
    {path: '/movie/:id', element: <MovieDetailsPage/>}
])
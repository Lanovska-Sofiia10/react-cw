import { useAppDispatch, useAppSelector } from "../../../hooks/store.ts";
import { useEffect } from "react";
import { moviesActions } from "../../../hooks/slices/movieSlice.tsx";
import { genresListActions } from "../../../hooks/slices/genresListSlice.tsx";
import MoviesListCardComponent from "../movies-list-card-component/MoviesListCardComponent.tsx";
import './styleMovies.css';

const MoviesListComponent = () => {

    const dispatch = useAppDispatch();
    const movies = useAppSelector(state => state.movieSlice.movies);
    const page = useAppSelector(state => state.movieSlice.page);
    const genreId = useAppSelector(state => state.movieSlice.genreId);

    useEffect(() => {
        dispatch(moviesActions.loadMovie({ page, genreId }));
    }, [dispatch, page, genreId]);
    useEffect(() => {
        dispatch(genresListActions.loadGenresList());
    }, [dispatch]);

    return (
        <div className='card-movies'>
            {movies.map(movie => (<MoviesListCardComponent key={movie.id} movie={movie}/>))}
        </div>
    );
};

export default MoviesListComponent;
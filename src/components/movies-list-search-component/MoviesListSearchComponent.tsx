import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/store.ts";
import {moviesActions} from "../../hooks/slices/movieSlice.tsx";
import MoviesListCardComponent from "../movies-component/movies-list-card-component/MoviesListCardComponent.tsx";

type Props = {
    query: string;
}

const MoviesListSearchComponent = ({query}: Props) => {

    const dispatch = useAppDispatch();
    const movies = useAppSelector(state => state.movieSlice.movies);

    useEffect(() => {
        if (query.trim()) {
            dispatch(moviesActions.searchMovies(query));
        }
    }, [query, dispatch]);

    return (
        <div className="card-movies">
            {
                movies.length === 0 && query && (<p className="text-center">No results found</p>)
            }
            {
                movies.map(movie => (<MoviesListCardComponent key={movie.id} movie={movie}/>))
            }
        </div>
    );
};

export default MoviesListSearchComponent;
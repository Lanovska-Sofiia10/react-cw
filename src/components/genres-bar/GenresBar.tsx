import {useAppDispatch, useAppSelector} from "../../hooks/store.ts";
import {moviesActions} from "../../hooks/slices/movieSlice.tsx";

const GenresBar = () => {

    const dispatch = useAppDispatch();

    const genres = useAppSelector(state => state.genresListSlice.genres);

    const selectedGenre = useAppSelector(state => state.movieSlice.genreId);

    const handleClick = (id: number | null) => {
        dispatch(moviesActions.setGenre(id));
    };

    return (
        <div className="d-flex gap-2 flex-wrap justify-content-center my-3">
            <button className={`btn btn-sm ${selectedGenre === null ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleClick(null)}>All</button>
            {
                genres.map(genre => (
                    <button key={genre.id} className={`btn btn-sm ${selectedGenre === genre.id ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleClick(genre.id)}>{genre.name}</button>
                ))
            }
        </div>
    );
};

export default GenresBar;
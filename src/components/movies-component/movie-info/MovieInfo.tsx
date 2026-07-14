import type { IMovie } from "../../../models/IMovie.ts";
import type { FunctionComponent } from "react";
import { useAppSelector } from "../../../hooks/store.ts";
import GenreBadge from "../genre-badge/GenreBadge.tsx";

type MovieInfoProps = {
    movie: IMovie;
}

const MovieInfo: FunctionComponent<MovieInfoProps> = ({ movie }) => {

    const { genres } = useAppSelector(
        state => state.genresListSlice
    );

    const movieGenres = movie.genre_ids
        .map(id => genres.find(genre => genre.id === id)?.name)
        .filter((genre): genre is string => Boolean(genre));

    return (
        <div>
            <p>{movie.title}</p>
            <div>
                {
                    movieGenres.map(genre => (
                        <GenreBadge key={genre} genre={genre}/>
                    ))
                }
            </div>
            <p>{movie.overview}</p>
        </div>
    );
};

export default MovieInfo;
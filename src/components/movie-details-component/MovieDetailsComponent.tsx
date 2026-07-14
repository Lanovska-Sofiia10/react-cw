import {useParams} from "react-router";
import {useAppDispatch, useAppSelector} from "../../hooks/store.ts";
import {useEffect} from "react";
import {loadMovieById} from "../../hooks/slices/movieDetailsSlice.tsx";
import GenreBadge from "../movies-component/genre-badge/GenreBadge.tsx";

const MovieDetailsComponent = ()=> {

    const { id } = useParams();
    const dispatch = useAppDispatch();

    const movie = useAppSelector(state => state.MovieDetailsSlice.movie);

    useEffect(() => {
        dispatch(loadMovieById(Number(id)));
    }, [dispatch, id]);

    if (!movie) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="container my-5">

            <div className="row g-4">

                <div className="col-md-4">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="img-fluid rounded shadow"/>
                </div>

                <div className="col-md-8">

                    <h1 className="mb-3">{movie.title}</h1>

                    <table className="table table-striped">
                        <tbody>
                        <tr>
                            <th>ID</th>
                            <td>{movie.id}</td>
                        </tr>

                        <tr>
                            <th>Original title</th>
                            <td>{movie.original_title}</td>
                        </tr>

                        <tr>
                            <th>Original language</th>
                            <td>{movie.original_language.toUpperCase()}</td>
                        </tr>

                        <tr>
                            <th>Release date</th>
                            <td>{movie.release_date}</td>
                        </tr>

                        <tr>
                            <th>Rating</th>
                            <td>{movie.vote_average.toFixed(1)} ⭐</td>
                        </tr>

                        <tr>
                            <th>Votes</th>
                            <td>{movie.vote_count}</td>
                        </tr>

                        <tr>
                            <th>Popularity</th>
                            <td>{movie.popularity}</td>
                        </tr>

                        <tr>
                            <th>Adult</th>
                            <td>{movie.adult ? "Yes" : "No"}</td>
                        </tr>

                        <tr>
                            <th>Video</th>
                            <td>{movie.video ? "Yes" : "No"}</td>
                        </tr>

                        <tr>
                            <th>Genres</th>
                            <td>
                                {
                                    movie.genres.map(genre => (<GenreBadge key={genre.id} genre={genre.name}/>))
                                }
                            </td>
                        </tr>

                        <tr>
                            <th>Collection</th>
                            <td>{movie.belongs_to_collection?.name ?? "—"}</td>
                        </tr>

                        <tr>
                            <th>Budget</th>
                            <td>${movie.budget.toLocaleString()}</td>
                        </tr>

                        <tr>
                            <th>Revenue</th>
                            <td>${movie.revenue.toLocaleString()}</td>
                        </tr>

                        <tr>
                            <th>Runtime</th>
                            <td>{movie.runtime} min</td>
                        </tr>

                        <tr>
                            <th>Status</th>
                            <td>{movie.status}</td>
                        </tr>

                        <tr>
                            <th>Tagline</th>
                            <td>{movie.tagline || "—"}</td>
                        </tr>

                        <tr>
                            <th>IMDb</th>
                            <td>{movie.imdb_id || "—"}</td>
                        </tr>

                        <tr>
                            <th>Homepage</th>
                            <td>
                                {
                                    movie.homepage
                                        ? (
                                            <a
                                                href={movie.homepage}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Official website
                                            </a>
                                        )
                                        : "—"
                                }
                            </td>
                        </tr>

                        <tr>
                            <th>Origin country</th>
                            <td>{movie.origin_country.join(", ")}</td>
                        </tr>

                        <tr>
                            <th>Production companies</th>
                            <td>
                                {
                                    movie.production_companies
                                        .map(company => company.name)
                                        .join(", ")
                                }
                            </td>
                        </tr>

                        <tr>
                            <th>Production countries</th>
                            <td>
                                {
                                    movie.production_countries
                                        .map(country => country.name)
                                        .join(", ")
                                }
                            </td>
                        </tr>

                        <tr>
                            <th>Spoken languages</th>
                            <td>
                                {
                                    movie.spoken_languages
                                        .map(language => language.english_name)
                                        .join(", ")
                                }
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <h3 className="mt-4">Overview</h3>

                    <p className="text-muted">{movie.overview}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailsComponent;
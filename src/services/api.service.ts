import type {IMovie} from "../models/IMovie.ts";
import type {IGenresList} from "../models/IGenresList.ts";
import type {IMovieDetails} from "../models/IMovieDetails.ts";

const baseURL = 'https://api.themoviedb.org/3';
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTUwOTNkZjdiNmQyMzE5MjBlMWUzOGJlNzQ3ODM0NyIsIm5iZiI6MTc4MDk0MDczNi4xODUsInN1YiI6IjZhMjZmZmMwMzRlMDMyOThhOTY0YWQyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lR5nz54JoO0kiU1PowctP7eu-VBaNXAasYg5xkJqCQY';

const options = {
    headers: {
        Authorization: `Bearer ${token}`
    }
};

export const getMovies = async (page = 1, genreId: number | null = null): Promise<IMovie[]> => {
    let url = `${baseURL}/discover/movie?page=${page}`;
    if (genreId) {
        url += `&with_genres=${genreId}`;
    }
    const response = await fetch(url, options)
        .then(res => res.json());
    return response.results;
}

export const getGenresList = async ():Promise<IGenresList[]> =>{
    const responseResult = await fetch( `${baseURL}/genre/movie/list`, options)
        .then(response => response.json())

    return responseResult.genres;
}

export const searchMovies = async (query: string): Promise<IMovie[]> => {
    const response = await fetch(`${baseURL}/search/movie?query=${encodeURIComponent(query)}`, options).then(res => res.json());

    return response.results;
}

export const getMovieById = async (id: number): Promise<IMovieDetails> => {
    const response = await fetch(
        `${baseURL}/movie/${id}`,
        options
    ).then(res => res.json());
    
    return response;
}
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {IMovie} from "../../models/IMovie.ts";
import {getMovies, searchMovies} from "../../services/api.service.ts";

type MovieSliceType = {
    movies: IMovie[];
    page: number;
    genreId: number | null;
}

export const loadMovie = createAsyncThunk('loadMovie', async ({ page, genreId }: { page: number; genreId: number | null }, thunkAPI) => {
        const movies = await getMovies(page, genreId);
        return thunkAPI.fulfillWithValue({ movies, page });
    }
);

export const loadSearchMovies = createAsyncThunk('loadSearchMovies', async (query: string, thunkAPI) => {
    const movies = await searchMovies(query);
    return thunkAPI.fulfillWithValue(movies);
});

const initialMovieSliceState: MovieSliceType = {movies: [], page: 1,genreId: null,}

export const movieSlice = createSlice({
    name:'movieSlice',
    initialState: initialMovieSliceState,
    reducers: {
        nextPage(state) {
            state.page++;
        },
        prevPage(state) {
            if (state.page > 1) {
                state.page--;
            }
        },
        setGenre(state, action) {
            state.genreId = action.payload;
            state.page = 1;
        }
    },
    extraReducers: builder => builder.addCase(loadMovie.fulfilled, (state, action) => {
        state.movies = action.payload.movies;
        state.page = action.payload.page;
    }).addCase(loadSearchMovies.fulfilled,(state,action)=>{
        state.movies = action.payload;
    })
})

export const moviesActions={...movieSlice.actions, loadMovie, searchMovies: loadSearchMovies
}
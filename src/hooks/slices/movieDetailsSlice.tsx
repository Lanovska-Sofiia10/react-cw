import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getMovieById} from "../../services/api.service.ts";
import type {IMovieDetails} from "../../models/IMovieDetails.ts";

type MovieDetailsState = {
    movie: IMovieDetails | null;
}

export const loadMovieById = createAsyncThunk('loadMovieById', async (id:number, thunkAPI)=>{
        const movie = await getMovieById(id);
        return thunkAPI.fulfillWithValue(movie);
    }
)

const initialMovieDetailsSliceState:MovieDetailsState = {movie: null}

export const MovieDetailsSlice = createSlice({
    name:'MovieDetailsSlice',
    initialState: initialMovieDetailsSliceState,
    reducers:{},
    extraReducers: builder => builder.addCase(loadMovieById.fulfilled, (state, action)=>{
        state.movie=action.payload;
    })
})

import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IGenresList} from "../../models/IGenresList.ts";
import {getGenresList} from "../../services/api.service.ts";

type GenresListSlice = {
    genres: IGenresList[],
}

export const loadGenresList = createAsyncThunk('loadGenresList', async (_, thunkAPI)=>{
    const genres = await getGenresList();
    return thunkAPI.fulfillWithValue(genres)
})

const initialGenresListSliceState:GenresListSlice = {genres: []}

export const genresListSlice = createSlice({
    name:'genresListSlice',
    initialState: initialGenresListSliceState,
    reducers:{},
    extraReducers: builder => builder.addCase(loadGenresList.fulfilled, (state, action:PayloadAction<IGenresList[]>)=>{
        state.genres = action.payload;
    })
})

export const genresListActions={...genresListSlice.actions, loadGenresList};
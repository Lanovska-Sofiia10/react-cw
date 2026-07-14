import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {movieSlice} from "./slices/movieSlice.tsx";
import {genresListSlice} from "./slices/genresListSlice.tsx";
import {MovieDetailsSlice} from "./slices/movieDetailsSlice.tsx";

export const store = configureStore({
    reducer: {
        movieSlice: movieSlice.reducer,
        genresListSlice: genresListSlice.reducer,
        MovieDetailsSlice: MovieDetailsSlice.reducer
    }
})

export const useAppSelector =
    useSelector.withTypes<ReturnType<typeof store.getState>>();

export const useAppDispatch =
    useDispatch.withTypes<typeof store.dispatch>();
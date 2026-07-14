import {useAppDispatch, useAppSelector} from "../../../hooks/store.ts";
import {moviesActions} from "../../../hooks/slices/movieSlice.tsx";

const Pagination = () => {

    const dispatch = useAppDispatch();
    const page = useAppSelector(state => state.movieSlice.page);

    return (
        <div className="d-flex justify-content-center gap-3 my-4">
            <button className="btn btn-secondary" disabled={page === 1} onClick={() => dispatch(moviesActions.prevPage())}>Previous</button>
            <span className="fs-5">{page}</span>
            <button className="btn btn-secondary" onClick={() => dispatch(moviesActions.nextPage())}>Next</button>
        </div>
    );
};

export default Pagination;
import {useLocation} from "react-router";
import MoviesListSearchComponent from "../components/movies-list-search-component/MoviesListSearchComponent.tsx";
import Header from "../components/header/Header.tsx";

const SearchPage = () => {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const query = params.get("query") || "";

    return (
        <>
            <Header/>
            <h2 className="text-center my-3">Results for: {query}</h2>
            <MoviesListSearchComponent query={query} />
        </>
    );
};

export default SearchPage;
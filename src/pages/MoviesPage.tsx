import Header from "../components/header/Header.tsx";
import MoviesListComponent from "../components/movies-component/movies-list-component/MoviesListComponent.tsx";
import Pagination from "../components/movies-component/pagination/Pagination.tsx";
import GenresBar from "../components/genres-bar/GenresBar.tsx";


const MoviesPage = ()=> {

  return (
       <>
           <Header />
           <GenresBar />
           <MoviesListComponent/>
           <Pagination/>
       </>
  );
};

export default MoviesPage;
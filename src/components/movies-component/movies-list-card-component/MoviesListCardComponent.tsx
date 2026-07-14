import type {FunctionComponent} from "react";
import type {IMovie} from "../../../models/IMovie.ts";
import './styleMovie.css'
import PosterPreview from "../poster-preview/PosterPreview.tsx";
import StarsRating from "../stars-rating/StarsRating.tsx";
import MovieInfo from "../movie-info/MovieInfo.tsx";
import UserInfo from "../user-info/UserInfo.tsx";
import {useNavigate} from "react-router";


type MovieProps = {
    movie: IMovie;
}

const MoviesListCardComponent:FunctionComponent<MovieProps> = ({movie})=> {

    const navigate = useNavigate();

  return (
      <div className="card card-body-movie"  onClick={() => navigate(`/movie/${movie.id}`)}>
          <PosterPreview movie={movie}/>
          <div className='bloc-info'>
              <StarsRating rating={movie.vote_average}/>
              <MovieInfo movie={movie}/>
              <UserInfo/>
          </div>
      </div>
  );
};

export default MoviesListCardComponent;
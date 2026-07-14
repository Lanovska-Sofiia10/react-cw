import type {IMovie} from "../../../models/IMovie.ts";
import type {FunctionComponent} from "react";


type MovieProps = {
    movie: IMovie;
}
const PosterPreview:FunctionComponent<MovieProps> = ({movie})=> {

  return (
       <div>
           <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.title}/>
       </div>
  );
};

export default PosterPreview;
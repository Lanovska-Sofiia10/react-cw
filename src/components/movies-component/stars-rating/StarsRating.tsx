import type {FunctionComponent} from "react";

type RatingProps = {
    rating: number;
}

const StarsRating:FunctionComponent<RatingProps> = ({rating})=> {
    const stars = Math.round(rating / 2);
  return (
       <>
           {'⭐'.repeat(stars)}
       </>
  );
};

export default StarsRating;
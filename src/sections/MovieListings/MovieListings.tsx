import "./MovieListings.css"

import Cards from "../../components/MovieCard/cards"
import { useEffect, useState } from "react";
import axios from "axios";

import { type movieCard } from "../../types/types";
import { type propsOnlyText } from "../../types/types";

const MovieListings = (props: propsOnlyText) => {

  const [movies, setMoiveis] = useState<any[] | null>(null);
  const headingWords: string = props.title.replaceAll("_", " ").toUpperCase();

  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${props.title}`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzNmNzg2NTg4YWM5MDY4YmI0YmU0MDMwYjQwMDM1NSIsIm5iZiI6MTc2NzAwOTI0My42NTYsInN1YiI6IjY5NTI2YmRiNTMxNjZkOTQ4ZWU0MTRkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wyN8v7_geKLEsXycXo_UBEWlsR-KKT_6dmpfoA8T8o8'
    }
  };
  useEffect(() => {
    axios
      .request(options)
      .then(res => setMoiveis(res.data.results))
      .catch(err => console.error(err));
  }, [])
console.log("is the place where it is run")
  return (
    <>
      <div className="main-container-listings" id="movie-container">
        <h1 className="heading-lisitng">{headingWords}</h1>

        <div className="movielist-container">

          {movies?.map((movie: movieCard, index: number) => (
            <div className="movielist-item" key={index}>
              <Cards  imdb_id={movie.imdb_id} id={movie.id} title={movie.title} release_date={movie.release_date} backdrop_path={movie.backdrop_path} original_language={movie.original_language} poster_path={movie.poster_path}></Cards>



            </div>

          ))}

        </div>
      </div>
    </>
  )
}

export default MovieListings
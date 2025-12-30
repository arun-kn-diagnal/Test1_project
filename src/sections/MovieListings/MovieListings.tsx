import "./MovieListings.css"

import Cards from "../../components/MovieCard/cards"
import {  useEffect, useState } from "react";
import axios from "axios";

import { type movieCard } from "../../types/types";

const MovieListings = () => {

  const [movies, setMoiveis] = useState<any[] | null>(null);
  
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/day',
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

  return (
    <>
      <ol className="movielist-container">
        {/* <li><Cards /></li>
        <li><Cards /></li>
        <li><Cards /></li>
        <li><Cards /></li>
        <li><Cards /></li>
        <li><Cards /></li>
        <li><Cards /></li>
        <li><Cards /></li>
        <li><Cards /></li>
        <li><Cards /></li>
        <li><Cards /></li> */}

        {movies?.map((movie: movieCard, index: number) => (
          <li>
            
            <Cards title={movie.title} vote_average={movie.vote_average} original_language={movie.original_language} poster_path={movie.poster_path}></Cards>
            
            <div className="circle"><p>{index+1}</p></div>
            
            </li>
)
        )}

      </ol>
    </>
  )
}

export default MovieListings
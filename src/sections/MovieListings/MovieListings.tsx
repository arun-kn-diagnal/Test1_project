import "./MovieListings.css"

import Cards from "../../components/MovieCard/cards"
const MovieListings = () => {
  return (
    <>
      <ol className="movielist-container">
        <li><Cards /></li>
        <li><Cards /></li>
        <li><Cards /></li>
        <li><Cards /></li>
        <li><Cards /></li>
        <li><Cards /></li>
        <li><Cards /></li>
        <li><Cards /></li>
        <li><Cards /></li>
        <li><Cards /></li>
        <li><Cards /></li>
      </ol>
    </>
  )
}

export default MovieListings
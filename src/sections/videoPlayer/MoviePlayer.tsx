import { useParams } from "react-router-dom"
import { lazy } from "react"
import Videojs from "../../components/video-js"
import SimilarMovieList from "../MovieListings/SimilarMovieList"
const MovieListings = lazy(() => import('../MovieListings/MovieListings'))


import "./MoviePlayer.css"
const MoviePlayer = () => {
    const { id } = useParams();
    return (
        <div className="video-section-container">
            <div className="holdin-place">
                <Videojs></Videojs>
            </div>
            <div className="move-place">

                <SimilarMovieList id={Number(id)} />
                <MovieListings title={"top_rated"} />
                <MovieListings title={"now_playing"} />
                <MovieListings title={"upcoming"} />
                <MovieListings title={"popular"} />


            </div>

        </div>
    )
}

export default MoviePlayer
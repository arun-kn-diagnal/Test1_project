import { useState, useEffect } from "react"
import axios from "axios";
import { useParams } from "react-router-dom";
// import { type movieDetails } from "../../types/types";
import "./movieDetail.css"
// import type { RateProps } from 'antd';
import SimilarMovieList from '../MovieListings/SimilarMovieList'

const cards = () => {
    const { id } = useParams();
    const [movie, setMoiveis] = useState<any>();

    // const desc: RateProps['tooltips'] = [
    //     'terrible',
    //     { placement: 'top', title: 'bad', trigger: 'hover' },
    //     'normal',
    //     'good',
    //     'wonderful',
    // ];

    const [value, setValue] = useState<number>(5);
    const [movieTime, setTime] = useState<string>("");
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${id}`,
        params: { language: 'en-US' },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzNmNzg2NTg4YWM5MDY4YmI0YmU0MDMwYjQwMDM1NSIsIm5iZiI6MTc2NzAwOTI0My42NTYsInN1YiI6IjY5NTI2YmRiNTMxNjZkOTQ4ZWU0MTRkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wyN8v7_geKLEsXycXo_UBEWlsR-KKT_6dmpfoA8T8o8'
        }
    };
    const imageBannerLink: string = `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`;
    // const imageLink: string = `https://image.tmdb.org/t/p/original/${movie?.poster_path}`;
    useEffect(() => {
        axios
            .request(options)
            .then(res => {
                setMoiveis(res.data);
                setValue(res.data.vote_average);
                setTime(timeFormator(res.data.runtime));
                setValue(res.data.belongs_to_collection.id);

                console.log(value)
            }
            )
            .catch(err => console.error(err));
    }, [id])

    const timeFormator = (time: number): string => {
        let hour = time / 60;
        let min = time % 60;
        let timeString = `${Math.round(hour)}` + " h " + `${min}` + " min"
        return timeString;
    }


    return (
        <div className='movie-detail-container' >

            <div className="top-main-box" style={{ width: "50", height: "fit-content", backgroundImage: `url(${imageBannerLink})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }}><h1 className="movie-title">{movie?.original_title}</h1>
                <h2 className="movie-subtitle">{movie?.tagline}</h2>

                <div className="movie-stats">
                    <h4 className="imbd-rate">{movie?.vote_average}</h4>
                    <h4 className="time" >{movieTime}</h4>

                    <h4 className="year">{movie?.release_date}</h4>
                </div>
                <div className="genres">

                    {movie?.genres.map((name: string, index: number) => (
                        <p id={name}>{movie?.genres[index].name}</p>

                    ))}
                </div>
            </div>
            <div className="shade-movie-details">
                <h4 className="title-movie-details">
                    Overview
                </h4>
                <div className="desc-box">
                    <p>{movie?.overview}</p>
                </div>
                <h4 className="title-movie-details">
                    Production
                </h4>
                <div className="company">

                    {movie?.production_companies.map((name: string, index: number) => (
                        <div key={name} className="company-details">
                            <h6>{movie?.production_companies[index].name}</h6>
                        </div>

                    ))}
                </div>
            </div>
            <SimilarMovieList id={Number(id)} />
        </div>

    )
}

export default cards
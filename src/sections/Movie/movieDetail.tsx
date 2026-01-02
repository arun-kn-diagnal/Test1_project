import { useState, useEffect } from "react"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
// import { type movieDetails } from "../../types/types";
import "./movieDetail.css"
// import type { RateProps } from 'antd';
import SimilarMovieList from '../MovieListings/SimilarMovieList'
import { Flex, Rate } from 'antd';
import type { RateProps } from 'antd';
import { lazy } from "react";

const Testimony = lazy(() => import('../../components/Testimony/Testimony'))

const Photo = lazy(() => import('../../components/Photos/Photo'))

const cards = () => {
    const { id } = useParams();
    const [movie, setMoiveis] = useState<any>();

    const navigator = useNavigate();

    const watchNow = (event: React.FormEvent) => {
        event.preventDefault();
        navigator(`/watch/${movie?.id}`);
    };

    const desc: RateProps['tooltips'] = [
        'terrible',
        { placement: 'top', title: 'bad', trigger: 'hover' },
        'normal',
        'good',
        'wonderful',
    ];
    const [value, setValue] = useState<number>(0);
    const [myValue, setMyValue] = useState<number>(0);
    const [coll, setColl] = useState<number>(0);

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

                setTime(timeFormator(res.data.runtime));
                if (res.data.belongs_to_collection.id) {
                    setColl(res.data.belongs_to_collection.id);
                }
                setValue(res.data.vote_average);

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
                <div className="rate-main-box">
                    <div className="rate-sub-Box">
                        <h1>
                            {value / 2}
                        </h1>
                    </div>
                    <div className="rate-sub-Box">
                        <Flex gap="middle" vertical>
                            <Rate tooltips={desc} onChange={setMyValue} allowHalf defaultValue={parseFloat((value / 2).toFixed(0))} />
                        </Flex>
                        <h6>rated by {movie?.vote_count}</h6>
                    </div>
                    <div className="movie-details-button">
                        <button className="watchNow" onClick={watchNow}>trailer</button>
                        <button className="watchNow" onClick={watchNow}>Watch Now</button>
                    </div>
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


                <div>

                </div>
                <SimilarMovieList id={Number(id)} />
                <h4 className="title-movie-details">
                    Reviews
                </h4>
                <Testimony id={Number(id)} ></Testimony>

                <h4 className="title-movie-details">
                    Hot clicks
                </h4>
                <Photo id={String(id)} original_language={`${movie?.original_language}`}></Photo>

            </div>


        </div>

    )
}

export default cards
import { useState, useEffect } from "react"
import axios from "axios";
import { useParams } from "react-router-dom";
// import { type movieDetails } from "../../types/types";
import "./movieDetail.css"
import { Flex, Rate } from 'antd';
import type { RateProps } from 'antd';

const cards = () => {
    const { id } = useParams();
    const [movie, setMoiveis] = useState<any>();
    const imageLinkStart: string = `https://image.tmdb.org/t/p/original/`;

    const desc: RateProps['tooltips'] = [
        'terrible',
        { placement: 'top', title: 'bad', trigger: 'hover' },
        'normal',
        'good',
        'wonderful',
    ];

    const [value, setValue] = useState<number>(5);
    const [myValue, setMyValue] = useState<number>(0);

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
    const imageLink: string = `https://image.tmdb.org/t/p/original/${movie?.poster_path}`;


    useEffect(() => {
        axios
            .request(options)
            .then(res => {
                setMoiveis(res.data);
                setValue(res.data.vote_average);
            }
            )
            .catch(err => console.error(err));


    }, [])



    return (
        <div className='movie-detail-container'>
            <div className="movie-banner">
                <img src={imageBannerLink} alt="" />
            </div>
            <div className="movie-detail-contents">
                <img src={imageLink} alt="" className="poster" />
                <div className="movie-details-head-box">
                    <div className="movie-details-head-data">
                        <h2 className="movieName">
                            {movie?.original_title}
                        </h2>
                        <h4>
                            {movie?.tagline}
                        </h4>
                        <div className="online-movie-data">{movie?.release_date}<span></span>{movie?.runtime / 60}</div>

                    </div>


                </div>




            </div>
            <div className="rate-main-box">
                <div className="rate-sub-Box">
                    <h1>
                        {value / 2}
                    </h1>
                    <h2>/5</h2>
                </div>
                <div className="rate-sub-Box">
                    <Flex gap="middle" vertical>
                        <Rate tooltips={desc} onChange={setMyValue} allowHalf defaultValue={myValue} />
                    </Flex>
                    <h6>rated by {movie?.vote_count}</h6>
                </div>

            </div>

            <div>

                <div className="desc-main-box">
                    <h3>overview</h3>
                    <p>{movie?.overview}</p>
                </div>
                <div className="genres-main-box">
                    <div className="movie-genres-box">
                        {movie?.genres.map((name: string, index: number) => (
                            <div className="movie-genres-item">
                                <p>{movie?.genres[index].name}</p>

                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div>
                <div className="movie-company-box">
                    {movie?.production_companies.map((name: string, index: number) => (
                        <div className="movie-company-item">
                            {movie?.production_companies[index].name}
                            <img src={imageLinkStart + movie?.production_companies[index].logo_path} alt="" width={50} />
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default cards
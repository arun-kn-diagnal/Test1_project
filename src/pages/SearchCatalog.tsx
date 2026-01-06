
import { lazy, useEffect, useState } from 'react';
const Cards = lazy(() => import("../components/MovieCard/cards"))

import axios from "axios";
import { type movieCard } from '../types/types';
import "./SearchCatalog.css"

import { Input } from 'antd';
import type { GetProps } from 'antd';


function Landing() {
    type SearchProps = GetProps<typeof Input.Search>

    const { Search } = Input


    const [movies, setMoiveis] = useState<any[] | null>(null);

    const [data, setData] = useState<string>("zoo");


    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: { query: `${data}`, include_adult: 'true', language: 'en-US', page: `1` },
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
    }, [data])

    const onSearch: SearchProps['onSearch'] = (value, _e) => {
        console.log(value);
        setData(value)

    }
    return (
        <>
            <div className="searchBox-main-container">
                <div className="searchBox">
                    <Search placeholder='movie name' allowClear onSearch={onSearch} />
                    

                </div>
                <div className="searchList-container">
                    {movies?.map((movie: movieCard, index: number) => (
                        <div className="searchList-item" key={index}>
                            {movie.poster_path &&
                                <Cards imdb_id={movie.imdb_id} id={movie.id} title={movie.title} release_date={movie.release_date} original_language={movie.original_language} poster_path={movie.poster_path}></Cards>
                            }

                        </div>

                    ))}
                </div>
                
            </div>

        </>
    )
}

export default Landing

import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import {  useEffect, useState } from 'react';
const videoPlayer = () => {
    const { id } = useParams();
    const [key,setKey]=useState<string>("");
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${id}/videos`,
        params: { language: 'en-US' },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzNmNzg2NTg4YWM5MDY4YmI0YmU0MDMwYjQwMDM1NSIsIm5iZiI6MTc2NzAwOTI0My42NTYsInN1YiI6IjY5NTI2YmRiNTMxNjZkOTQ4ZWU0MTRkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wyN8v7_geKLEsXycXo_UBEWlsR-KKT_6dmpfoA8T8o8'
        }
    };

    useEffect(()=>{
        axios
        .request(options)
        .then(res => setKey(res.data.results[0].key))
        .catch(err => console.error(err));

    },[id])
    return (
        <><ReactPlayer width='100vw' height='100vh' src={`https://www.youtube.com/watch?v=${key}`} /></>
    )
}

export default videoPlayer
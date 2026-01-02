import { useEffect, useState } from 'react'
import type { propsIdandLan } from '../../types/types'
import "./Photo.css"
import axios from 'axios'

const Photo = (props: propsIdandLan) => {

    const [photoD, setPhotoData] = useState<any>();

    useEffect(() => {
        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${props.id}/images`,
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzNmNzg2NTg4YWM5MDY4YmI0YmU0MDMwYjQwMDM1NSIsIm5iZiI6MTc2NzAwOTI0My42NTYsInN1YiI6IjY5NTI2YmRiNTMxNjZkOTQ4ZWU0MTRkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wyN8v7_geKLEsXycXo_UBEWlsR-KKT_6dmpfoA8T8o8'
            }
        };


        axios
            .request(options)
            .then(res => (setPhotoData(res.data.backdrops)))
            .catch(err => console.error(err));




    }, [props.id])



    return (
        <>
            <div className="photo-container">
                {photoD?.map((file_path: string, index: number) => (

                    <div className="box" key={file_path}>

                        <img src={`https://image.tmdb.org/t/p/original/${photoD[index].file_path}`} alt="" height="fit-content" width="fit-content" />
                    </div>

                )

                )}
            </div>
        </>
    )
}
export default Photo
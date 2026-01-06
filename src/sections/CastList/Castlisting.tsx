
import Cards from "../../components/PeopleCard/Card"
import { useEffect, useState } from "react";
import axios from "axios";
import "./Castlisting.css"

import { type castcard ,type propsOnlyid} from "../../types/types";

const MovieListings = (props:propsOnlyid) => {

    const [CastList, setCastData] = useState<any[] | null>(null);

    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${String(props.id)}/credits`,
        params: { language: 'en-US' },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzNmNzg2NTg4YWM5MDY4YmI0YmU0MDMwYjQwMDM1NSIsIm5iZiI6MTc2NzAwOTI0My42NTYsInN1YiI6IjY5NTI2YmRiNTMxNjZkOTQ4ZWU0MTRkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wyN8v7_geKLEsXycXo_UBEWlsR-KKT_6dmpfoA8T8o8'
        }
    };
    useEffect(() => {
        axios
            .request(options)
            .then(res => setCastData(res.data.cast))

            .catch(err => console.error(err));
    }, [])

    return (
        <>
            <div className="main-container-listings" id="cast-container">
                <div className="castlist-container">

                    {CastList?.map((movie: castcard, index: number) => (
                        <> {movie.profile_path && <div className="castlist-item" key={index}>
                            <Cards original_name={movie.original_name} profile_path={movie.profile_path} character={movie.character}></Cards>
                        </div>}</>

                    ))}

                </div>
            </div>
        </>
    )
}

export default MovieListings
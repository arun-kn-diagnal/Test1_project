import "./cards.css"
import { useState } from "react"
import { type movieCard } from "../../types/types";
import { useNavigate } from "react-router-dom";

const cards = (props: movieCard) => {

    const [isShown, setIsShow] = useState(false);

    const navigate = useNavigate();



    const handleMovie = (event: React.FormEvent) => {
        event.preventDefault();
        navigate(`/movies/${props.id}` ,{replace:true});
        
    };

    const handleMouseEnter = () => {
        setIsShow(true);
    }

    const handleMouseOut = () => {
        setIsShow(false);
    }
    return (
        <div className='card-container' onClick={handleMovie} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut}>
            <img src={`https://image.tmdb.org/t/p/original/${props.poster_path}`} alt="" width="250" height="300" />
            {isShown &&
                <div className="card-movie-details">
                    <h3 className="card-movie-title">
                        {props.title}
                    </h3>
                    <div className="card-movie-other">
                        <p className="language">{props.release_date}</p>
                        <p className="language">
                            {props.original_language}
                        </p>
                    </div>

                </div>
            }
        </div>
    )
}

export default cards
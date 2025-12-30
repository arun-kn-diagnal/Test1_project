import "./cards.css"
import { useState } from "react"
import { type movieCard } from "../../types/types";

const cards = (props: movieCard) => {

    const imageLink: string=`https://image.tmdb.org/t/p/original/${props.poster_path}`;
    
    const [isShown, setIsShow] = useState(false);

    const handleMouseEnter = () => {
        setIsShow(true);
    }

    const handleMouseOut = () => {
        setIsShow(false);
    }
    return (
        <div className='card-container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut}>
            <img src={imageLink} alt="" width="250" height="300" />
            {isShown &&
                <div className="card-movie-details">
                    <h3 className="card-movie-title">
                        {props.title}
                    </h3>
                    <div className="card-movie-other">
                        <p>{props.vote_average}</p>
                        <h4 className="journers">
                            {props.original_language}
                        </h4>
                    </div>

                </div>
            }
        </div>
    )
}

export default cards
import { useState } from "react"
import { type castcard } from "../../types/types";
import './Castcard.css'

const cards = (props: castcard) => {

    const [isShown, setIsShow] = useState(false);




    const handleMouseEnter = () => {
        setIsShow(true);
    }

    const handleMouseOut = () => {
        setIsShow(false);
    }
    return (
        <div className='cast-cast-container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut}>
            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${props.profile_path}`} alt="" width="220" height="330" />
            {isShown &&
                <div className="card-cast-details">
                    <h5 className="card-cast-title">
                        {props.original_name}
                    </h5>
                    <div className="card-cast-other">
                        <h6> as {props.character}</h6>
                        
                    </div>

                </div>
                
            }
        </div>
    )
}

export default cards
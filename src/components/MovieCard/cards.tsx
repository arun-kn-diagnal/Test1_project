import image from "../../assets/sampleimage.jpg"
import "./cards.css"
import { useState } from "react"
const cards = () => {

    const [isShown,setIsShow]=useState(false);

    const handleMouseEnter = ()=>{
        setIsShow(true);
    }

    const handleMouseOut = ()=>{
        setIsShow(false);
    }
  return (
    <div className='card-container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut}>
        <img src={image} alt="" width="250" height="300"/>
        {isShown&&
        <div className="card-movie-details">
            <h3 className="card-movie-title">
                Superman
            </h3>
            <div className="card-movie-other">
                <p>4.5</p>
                <h4 className="journers">
                    Comic
                </h4>
            </div>

        </div>
        }
    </div>
  )
}

export default cards
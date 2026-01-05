import "./Header.css"
import { useNavigate } from "react-router-dom";

const header = () => {
  const navigate = useNavigate();

  return (
    <div className="headerContainer">
      <p onClick={() => { navigate("/movies") }} className="logoHeading"><span className="Highligthed">M</span>ove.<span className="Highligthed">n</span>et</p>
      <button id="login">Signin</button>

    </div>
  )
}

export default header
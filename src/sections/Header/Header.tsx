import "./Header.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const header = () => {
  const navigate = useNavigate();
  const [Guest, setGuest] = useState<boolean>(true);

  const LogIn = () => {
    setGuest(false)
  }

  return (
    <div className="headerContainer">
      <p onClick={() => { navigate("/movies") }} className="logoHeading"><span className="Highligthed">M</span>ove.<span className="Highligthed">n</span>et</p>
      {Guest &&
        <button id="login" onClick={LogIn}>Signin</button>
      }

    </div>
  )
}

export default header
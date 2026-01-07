import "./Header.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SearchIcon } from "lucide-react";
const header = () => {
  const navigate = useNavigate();
  const [Guest, setGuest] = useState<boolean>(true);

  const LogIn = () => {
    navigate('/signin')
    setGuest(false)
  }
  const Search = ()=>{
    navigate('/Search')
  }


  return (
    <div className="headerContainer">
      <p onClick={() => { navigate("/movies") }} className="logoHeading"><span className="Highligthed">M</span>ove.<span className="Highligthed">n</span>et</p>
      {Guest &&
        <button id="login" onClick={LogIn}>Signin</button>
      }
      { Guest|| <SearchIcon onClick={Search}/>}

    </div>
  )
}

export default header
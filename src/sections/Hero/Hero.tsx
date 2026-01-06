import { useNavigate } from "react-router-dom";
import "./Hero.css"




export default function Hero() {


  const navigate = useNavigate();

  

  return (
    <div>
      {/* Hero Section */}

      <div className="hero-container">
        
        <div className="hero-background">
          
          <div className="hero-overlay">
            <div className="hero-content">
              <h1 className="hero-title">where the theater <br />
                experience is at your fingertips.</h1>
            </div>
            <div className="heto-actions">
              <input required type="email" placeholder="campion@move.net" className="hero-input" id="email" />
              <button onClick={()=>{navigate("/signup"),{email:{}}}} className="hero-btn-sigup">Sign UP</button>
            </div>

          </div>
        </div>
        
      </div>

    </div>
  );
}
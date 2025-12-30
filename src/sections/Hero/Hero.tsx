import "./Hero.css"
import Header from "../Header/Header";


export default function Hero() {
  return (
    <div>
      {/* Hero Section */}

      <div className="hero-container">
        <Header />
        <div className="hero-background">
          
          <div className="hero-overlay">
            <div className="hero-content">
              <h1 className="hero-title">where the theater <br />
                experience is at your fingertips.</h1>
            </div>
            <div className="heto-actions">
              <input required type="email" placeholder="campion@move.net" className="hero-input" />
              <button type="submit" className="hero-btn-sigup">Sign UP</button>
            </div>

          </div>
        </div>
        <div className="hero-breaker">
          <h2>Top Movies</h2>
          
        </div>
      </div>

    </div>
  );
}
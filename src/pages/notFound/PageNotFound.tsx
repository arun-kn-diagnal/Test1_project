import "./PageNotFound.css"
import { Link } from "react-router-dom"
export const PageNotFound = () => {

  return (
    <div className="notfound-main">
      <div className="notfound-content">
        <h3 className="oops">Oops</h3>
        <h2>Page not found</h2>

        <p>go back to <Link to="/">Landing</Link></p>
        

      </div>

    </div>
  )
}

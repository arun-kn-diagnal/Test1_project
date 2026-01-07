import "./Footer.css"

import { FacebookIcon,InstagramIcon,LinkedinIcon } from "lucide-react";
const Footer = () => {
  const curDate = new Date();
  return (
    <div className="FooterContainer">
       <div className="topline-footer">
        <h4 className="copywrite">@{curDate.getFullYear().toString()} <span className="highlighted">Move.net</span></h4>

        <div className="socials-footer">
          <button className="icons-footer">
<FacebookIcon ></FacebookIcon>
          </button>
          <button className="icons-footer">
          <InstagramIcon></InstagramIcon>
          </button>
          <button className="icons-footer">
          <LinkedinIcon></LinkedinIcon>
          </button>
        </div>
       </div>

    </div>
  )
}

export default Footer
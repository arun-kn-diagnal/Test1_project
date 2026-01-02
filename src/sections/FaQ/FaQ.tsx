import { FaqData } from "../../data/FaqData"
import FaqBox from "../../components/Faqboc"
import './FaQ.css'

const FaQ = () => {
  return (
    <div className="Faq-main">
      <div className="box1 faq-box">
      <h1>Need to know more</h1>
      </div>
      <div className="box2 faq-box">
      
      <p>still having doubts , talk to our customer care executives to know more and get a plan fit for you <a href="tel:+918075648949">+91-8075648494</a></p>
      <p>or just write to  <a href="mailto:somemail@some.com" >somemail@some.com</a></p>
      </div>
      </div>
    
  )
}

export default FaQ

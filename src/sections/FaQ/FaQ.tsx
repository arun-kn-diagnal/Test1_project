import { FaqData } from "../../data/FaqData"
import FaqBox from "../../components/Faqboc"


const FaQ = () => {
  return (
    <div className="Faq-main">
      <h1>Faq</h1>
      <FaqBox faqs={FaqData}></FaqBox>
      <h1>Still got Queries</h1>
      <p>still doubts get in touch with out customer care executive <a href="tel:+918075648949">+91-8075648494</a></p>
      <p>or just write to  <a href="mailto:somemail@some.com">somemail@some.com</a></p>
      </div>
    
  )
}

export default FaQ

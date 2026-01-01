import "./WhyUs.css"
import { WhyUsData } from "../../data/WhyUsData"
import {type WhyUsType} from "../../types/types"
const WhyUs = () => {

  return (
    <div className="whyus-container">
       <h1 className="whyus-heading">whyus section</h1>

       <div className="whyus-main">
        {WhyUsData.map((dataItem:WhyUsType,index:number)=>
        (
          <div key = {`${index}`} className={`whyus-box`}>
            <h1 className="whyus-box-heading">{dataItem.title}     <>{dataItem.icon}</></h1>
            <p className="whyus-box-desc">{dataItem.desc}</p>
            
          </div>

          
          
        ))}
        </div>
       

    </div>
  )
}

export default WhyUs
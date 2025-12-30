export interface question{
  question :String;
  answer:String;
}


export interface FaqitemProps{
    faq: question;
    selected:Number|null;
    setSelected:(index:number |null)=>void;
    index:number;
}



export interface WhyUs{
  title:String;
  desc:String;
  icon:React.RefAttributes<SVGSVGElement>;
}

export  type movieCard = {
    title: String;
    vote_average: number;
    original_language: string;
    poster_path:string;
  }


  
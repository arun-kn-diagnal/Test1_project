export interface question {
  question: String;
  answer: String;
}


export interface FaqitemProps {
  faq: question;
  selected: Number | null;
  setSelected: (index: number | null) => void;
  index: number;
}



export interface WhyUsType {
  title: String;
  desc: String;
  icon: React.RefAttributes<SVGSVGElement>;
}

export type movieCard = {
  imdb_id: number;
  id: number;
  title: String;
  release_date: String;
  original_language: string;
  poster_path: string;
}



export type propsOnlyText = {
  title: string;
}

export type propsOnlyid = {
  id: Number;
}

export type propsIdandLan = {
  id: string;
  original_language: string;
}
export type photoData = {
  aspect_ratio: number,
  file_path: string,
  height: number,
  iso_3166_1: string,
  iso_639_1: string,
  vote_average: number,
  vote_count: number,
  width: number
}
export type genre = {
  id: number;
  name: string;
}
export type movieDetails = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null;
  budget: number;

  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;

}


export type castcard = {
  original_name:string;
  profile_path:string;
  character:string;
}
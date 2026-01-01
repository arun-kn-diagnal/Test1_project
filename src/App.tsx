
import Hero from './sections/Hero/Hero'
import Footer from './sections/Footer/Footer';
import FaQ from './sections/FaQ/FaQ';
import Whyus from './sections/WhyUs/WhyUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopRated from './sections/MovieListings/TopRated'
import MovieListings from './sections/MovieListings/MovieListings';
import { PageNotFound } from './sections/notFound/PageNotFound';
import './App.css'
import MoviesDetails from './sections/Movie/movieDetail'
import Headers from './sections/Header/Header'

import CarouselSection from "./sections/Carousel/CarouselSection"

function App() {
  // const videoUrl = "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";

  return (
    <>
    <Headers/>
      <BrowserRouter>
        <Routes>


          <Route path="/" element={
            <>
              <Hero />
              <TopRated title={"trending"} />
              <Whyus />
            </>}>

          </Route>

          <Route path="/movies" element={
            <>
            <CarouselSection ></CarouselSection>
              <TopRated title={"trending"} />
              <MovieListings title={"top_rated"} />
              <MovieListings title={"now_playing"} />
              <MovieListings title={"upcoming"} />
              <MovieListings title={"popular"} />




            </>
          }></Route>
          <Route path="/movies/:id" element={<MoviesDetails />} />

          <Route path='/faq' element={
            <FaQ />
          } />

          <Route path="*" element={
            <PageNotFound />
          } />
        </Routes>





      </BrowserRouter>



      <Footer />

    </>
  )
}

export default App

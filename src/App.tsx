import { lazy } from 'react';

const Hero = lazy(() => import('./sections/Hero/Hero'))
const Footer = lazy(() => import('./sections/Footer/Footer'))
const FaQ = lazy(() => import('./sections/FaQ/FaQ'))
// const Whyus = lazy(() => import('./sections/WhyUs/WhyUs'))
const TopRated = lazy(() => import('./sections/MovieListings/TopRated'))

const MovieListings = lazy(() => import('./sections/MovieListings/MovieListings'))
const MoviesDetails = lazy(() => import('./sections/Movie/movieDetail'))
const Headers = lazy(() => import('./sections/Header/Header'))
const CarouselSection = lazy(() => import('./sections/Carousel/CarouselSection'))
const VideoPlayer = lazy(() => import('./sections/videoPlayer/videoPlayer'))
const SignUp = lazy(() => import('./sections/SIgn/SignUp'))

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageNotFound } from './sections/notFound/PageNotFound';
import './App.css'

import { Affix } from 'antd';
function App() {
  const top:number= 0;
  // const videoUrl = "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";

  return (
    <>
      <Affix offsetTop={top}>
        <Headers />
      </Affix>
      <BrowserRouter>
        <Routes>


          <Route path="/" element={
            <>
              <Hero />

              <TopRated title={"trending"} />
              <FaQ></FaQ>

            </>}>

          </Route>

          <Route path="/movies" element={
            <>
              <div className="backframe">

                <CarouselSection ></CarouselSection>
              </div>

              <div className="set-frame">

                <TopRated title={"trending"} />
                <MovieListings title={"top_rated"} />
                <MovieListings title={"now_playing"} />
                <MovieListings title={"upcoming"} />
                <MovieListings title={"popular"} />

              </div>



            </>
          }></Route>
          <Route path="/movies/:id" element={<MoviesDetails />} />

          <Route path='/faq' element={
            <FaQ />
          } />

          <Route path="*" element={
            <PageNotFound />
          } />
          <Route path="watch/:id" element={
            < VideoPlayer />
          } />

          <Route path="/signup" element={
            <SignUp></SignUp>
          }/>
        </Routes>







      </BrowserRouter>


      <Footer />


    </>
  )
}

export default App

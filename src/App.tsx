
import Hero from './sections/Hero/Hero'
import Footer from './sections/Footer/Footer';
import FaQ from './sections/FaQ/FaQ';
import Whyus from './sections/WhyUs/WhyUs';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MovieListings from './sections/MovieListings/MovieListings'
import { PageNotFound } from './sections/notFound/PageNotFound';
import './App.css'



function App() {
  const videoUrl = "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <MovieListings />
              <Whyus />
            </>}>

          </Route>

          <Route path='/faq' element={
            <FaQ />
          } />

          <Route path="*" element={
            <PageNotFound/>
          } />
        </Routes>





      </BrowserRouter>



      <Footer />

    </>
  )
}

export default App

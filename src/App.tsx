import { lazy } from 'react';
const Footer = lazy(() => import('./sections/Footer/Footer'))
import Landing from './pages/Landing';
import Catalog from './pages/Catalog'

import Search from './pages/SearchCatalog';
// const Whyus = lazy(() => import('./sections/WhyUs/WhyUs'))

const MoviesDetails = lazy(() => import('./sections/Movie/movieDetail'))
const Headers = lazy(() => import('./sections/Header/Header'))
const VideoPlayer = lazy(() => import('./sections/videoPlayer/VideoPlayer'))
const MoviePlayer = lazy(()=>import('./sections/videoPlayer/MoviePlayer'))

const SignUp = lazy(() => import('./sections/SIgn/SignUp'))
const Signin =lazy(() => import('./sections/SIgn/Signin'))

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageNotFound } from './sections/notFound/PageNotFound';
import './App.css'

import { Affix } from 'antd';
function App() {
  const top: number = 0;

  
  // const videoUrl = "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";

  return (
    <>

      <BrowserRouter>
        <Affix offsetTop={top}>
          <Headers />
        </Affix>
        <Routes>


          <Route path="/" element={
            <Landing />}>

          </Route>

          <Route path="/movies" element={
            <>
              <Catalog />
            </>
          }></Route>
          <Route path="/movies/:id" element={<MoviesDetails />} />

        
          <Route path="*" element={
            <PageNotFound />
          } />
          <Route path="watch/:id" element={
            < VideoPlayer />
          } />

          <Route path="/signup" element={
            <SignUp></SignUp>
          } />
          <Route path='signin' element={
            <Signin></Signin>
          }/>

          <Route path="/video/:id" element={
            
             <MoviePlayer />
             
          }
          />

          <Route path='/Search' element={<Search/>}/>
        </Routes>


      </BrowserRouter>


      <Footer />


    </>
  )
}

export default App


import { lazy, useState } from 'react';
const TopRated = lazy(() => import('../sections/MovieListings/TopRated'))

const MovieListings = lazy(() => import('../sections/MovieListings/MovieListings'))
const CarouselSection = lazy(() => import('../sections/Carousel/CarouselSection'))

function Landing() {
    const [banner,setBanner]= useState("none");

    setInterval(()=>
    {   if (sessionStorage.getItem("banner")!=""){
        setBanner(`https://media.themoviedb.org/t/p/original/${sessionStorage.getItem("banner")}`)
    
    }else{
        setBanner('none')
    }})
    return (
        <>
            <div className="backframe">
                {(banner=="none")&&
                <CarouselSection ></CarouselSection>
                }
                <img src={banner} alt="" className='special' />
                 
            </div>

            <div className="set-frame">

                <TopRated title={"trending"} />
                <MovieListings title={"top_rated"} />
                <MovieListings title={"now_playing"} />
                <MovieListings title={"upcoming"} />
                <MovieListings title={"popular"} />

            </div>

        </>
    )
}

export default Landing

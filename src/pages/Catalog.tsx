
import { lazy } from 'react';
const TopRated = lazy(() => import('../sections/MovieListings/TopRated'))
const MovieListings = lazy(() => import('../sections/MovieListings/MovieListings'))
const CarouselSection = lazy(() => import('../sections/Carousel/CarouselSection'))

function Landing() {

    return (
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
    )
}

export default Landing

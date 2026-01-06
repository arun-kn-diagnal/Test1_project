
import { lazy } from 'react';
const TopRated = lazy(() => import('../sections/MovieListings/TopRated'))
const FaQ = lazy(() => import('../sections/FaQ/FaQ'))
const Hero = lazy(() => import('../sections/Hero/Hero'))

function Landing(){
   
        return (
            <>
                <Hero />
                <TopRated title={"trending"} />
                <FaQ />
            </>
        )
    }

export default Landing

import { useEffect, useState } from 'react'
import type { propsOnlyid } from '../../types/types'
import axios from 'axios'
import './Testimony.css'
const Photo = (props: propsOnlyid) => {

    const [reviews, setreviews] = useState<any[]>();
    const [status, setStatus] = useState<boolean>(false);
    const [selected, setSelected] = useState<number | null>();

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/83533/reviews',
            params: { language: 'en-US', page: '1' },
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzNmNzg2NTg4YWM5MDY4YmI0YmU0MDMwYjQwMDM1NSIsIm5iZiI6MTc2NzAwOTI0My42NTYsInN1YiI6IjY5NTI2YmRiNTMxNjZkOTQ4ZWU0MTRkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wyN8v7_geKLEsXycXo_UBEWlsR-KKT_6dmpfoA8T8o8'
            }
        };


        axios
            .request(options)
            .then(res => (setreviews(res.data.results)))
            .catch(err => console.error(err));




    }, [props.id])



    return (
        <>
            <div className="Testimony-container">
                {reviews?.map((content: string, index: number) => (
                    <div className="Testimony">
                        {status && (index === selected) ?
                            <div className='Testimony-box'>
                                <div className='Testimony-text-content-box'>
                                    <p className='content-author'>review by {reviews[index].author} <button className='content-close ' onClick={() => {
                                        setStatus(!status)
                                        setSelected(null)
                                    }}>X</button></p>

                                    <div className='Testimony-text-content'>
                                        <p className='content-review'> {reviews[index].content}</p>

                                    </div>

                                </div>

                            </div>

                            :
                            <div className=''>
                                <div className='Testimony-text-content-before'>
                                    <p className='content-author'>review by {reviews[index].author} 
                                        
                                    <button className='content-open ' onClick={() => {
                                        setStatus(!status)
                                        setSelected(index)
                                    }}>view</button></p>
                                </div>
                            </div>
        
                        }



                                </div>
                                )

                )}
                            </div >
        </>
                )
}
                export default Photo
import videojs from "video.js";
import { useEffect, useRef } from "react";
import "video.js/dist/video-js.css"
import "./video-js.css"
import { useParams } from "react-router-dom";

export const VideoJS = () => {
    const videoRef = useRef(null);

    const {backdrop_path} = useParams();
    const imageBannerLink: string = `https://image.tmdb.org/t/p/original/${backdrop_path}`;


    useEffect(() => {


        const videoElement = document.createElement("video-js");
        videoRef.current.appendChild(videoElement);

        videojs(videoElement, {
            autoplay: true,
            controls: true,
            videoWidth: "100vh",
            fluid: true,
            sources: [{
                src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
                type: 'video/mp4'
            }],
            poster: {imageBannerLink}

        }
        );




    }, []);

    return (
        <div className="main"  >
            <div className="video" ref={videoRef}  ></div>
        </div>
    )
}

export default VideoJS;

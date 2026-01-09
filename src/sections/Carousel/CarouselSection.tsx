import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: 'fit-content',
  width:'100vw',
  color: '#fff',
  marginTop:-40,
  textAlign: 'center',
  zIndex:-10
};
const ImagesBanner:string[] = [
    "https://image.tmdb.org/t/p/w533_and_h300_face/pUNfHmVqfwRdILhCkU8TdysVOXo.jpg",
    "https://image.tmdb.org/t/p/w533_and_h300_face/oIJjO1CvEdTMFNkWfHaV0RB584G.jpg",
    "https://image.tmdb.org/t/p/w533_and_h300_face/iN41Ccw4DctL8npfmYg1j5Tr1eb.jpg",
    "https://image.tmdb.org/t/p/w533_and_h300_face/1RgPyOhN4DRs225BGTlHJqCudII.jpg"
]
const App: React.FC = () => (
  <div className='carousel-Container'>

<Carousel autoplay={{ dotDuration: true }} autoplaySpeed={3000}>
    
    {ImagesBanner.map((imageLink:string)=>(
        <div>
            <img src={imageLink} alt=""  style={contentStyle}/>
        </div>
    ))}
  </Carousel>
</div>
);

export default App;
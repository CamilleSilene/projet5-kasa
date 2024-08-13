import './slideshow.scss';
import { useState } from 'react';

const SlideShow = (props) => {
    const [currentIndex, setCurrentIndex] = useState (0)
    return (
   
    <div className='SlideShow'>
    <div className="slidesWrapper">
    
        <img key={currentIndex} src={props.slides[currentIndex]} alt="photos"/>
      
      </div>
      </div>
    
  )
    
    }

    export default SlideShow
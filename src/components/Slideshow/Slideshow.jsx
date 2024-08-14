import './slideshow.scss';
import { useState } from 'react';

const SlideShow = (props) => {
  //useState retourne un tableau avec les 2 éléments currentIndex et setCurrentIndex
  //setCurrentIndex permet de modifier la valeur de currentIndex
    const [currentIndex, setCurrentIndex] = useState (0)

    //fonction next : si le currentindex + 1 est supérieur ou égal à l'index -1 (dernier élément)
    //alors currentindex = 0 (1er élément) sinon +1
    const nextIndex = () => {
      setCurrentIndex(currentIndex + 1 > props.slides.length -1 ? 0 : currentIndex + 1);
    }
  //fonction prev : si le currentindex - 1 est inférieur à l'index 0 (1er élément)
  //alors currentindex passe au dernier index (dernier élément)
    const prevIndex = () => {
      setCurrentIndex(currentIndex - 1 < 0 ? props.slides.length -1 : currentIndex -1);
    }
    return (
   
    <div className='SlideShow'>
   { (props.slides.length > 1) && <div className='prevClick fa-solid fa-chevron-left' onClick={prevIndex} role='button'></div> }
    <div className="slidesWrapper">
        <img key={currentIndex} src={props.slides[currentIndex]} alt="photos"/>
        <div className='slideshow-pagination'>{currentIndex + 1}/{props.slides.length}</div>
      </div>
      { (props.slides.length > 1) && <div className='nextClick fa-solid fa-chevron-right' onClick={nextIndex} role='button'></div> }
      </div>
    
  )


    
    }

    export default SlideShow
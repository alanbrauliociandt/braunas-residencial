import { useState } from 'react';
import { Title } from "../../components/Title/Title";
import slider1 from '../../assets/slider-images/1.jpg';
import slider2 from '../../assets/slider-images/2.jpg';
import slider3 from '../../assets/slider-images/3.jpg';
import slider4 from '../../assets/slider-images/4.jpg';
import slider5 from '../../assets/slider-images/5.jpg';
import slider6 from '../../assets/slider-images/6.jpg';
import './SliderImages.scss';

export function SliderImages() {
  const images = [slider1, slider2, slider3, slider4, slider5, slider6];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };
  

  return (
    <section className="slider-images-general-container">
      <div className="container">
        <Title text="Imagens" />
        <div className="container-slider">
          <div className="prev-slider" onClick={prevSlide}></div>
          <img src={images[currentSlide]} alt={`Slider ${currentSlide + 1}`} />
          <div className="next-slider" onClick={nextSlide}></div>
        </div>
      </div>
    </section>
  );
}
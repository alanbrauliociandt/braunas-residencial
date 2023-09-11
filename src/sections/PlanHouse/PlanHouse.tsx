import { useState } from 'react';
import { Title } from "../../components/Title/Title";
import slider1 from '../../assets/plantas/1.jpg';
import slider2 from '../../assets/plantas/2.jpg';
import slider3 from '../../assets/plantas/3.jpg';
import slider4 from '../../assets/plantas/4.jpg';
import './PlanHouse.scss';

export function PlanHouse() {
  const images = [slider1, slider2, slider3, slider4];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };
  

  return (
    <section className="slider-plans-general-container">
      <div className="container">
        <Title text="Plantas" />
        <div className="container-slider">
          <div className="prev-slider" onClick={prevSlide}></div>
          <img src={images[currentSlide]} alt={`Slider ${currentSlide + 1}`} />
          <div className="next-slider" onClick={nextSlide}></div>
        </div>
      </div>
    </section>
  );
}
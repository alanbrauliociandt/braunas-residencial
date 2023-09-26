import { useEffect, useState } from "react";
import AOS from "aos";
import { Title } from "../../components/Title/Title";
import slider1 from "../../assets/slider-images/1.jpg";
import slider2 from "../../assets/slider-images/2.jpg";
import slider3 from "../../assets/slider-images/3.jpg";
import slider4 from "../../assets/slider-images/4.jpg";
import slider5 from "../../assets/slider-images/5.jpg";
import slider6 from "../../assets/slider-images/6.jpg";
import "./SliderImages.scss";

export function SliderImages() {
  const imageObjects = [
    { image: slider1, legend: "Pet Place" },
    { image: slider2, legend: "Pscina" },
    { image: slider3, legend: "Playground" },
    { image: slider4, legend: "Quadra" },
    {
      image: slider6,
      legend: "Salão"
    },
    { image: slider5, legend: "Quarto (Imagem ilustrativa com sugestão de decoração. Os móveis, objetos, revestimentos e demais acabamentos não fazem parte do Contrato.)" },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % imageObjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (currentSlide - 1 + imageObjects.length) % imageObjects.length
    );
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section id="photos" className="slider-images-general-container">
      <div className="container">
        <Title text="Imagens" />
        <div className="container-slider" data-aos="fade-up">
          <div className="prev-slider" onClick={prevSlide}></div>
          <img
            src={imageObjects[currentSlide].image}
            alt={`Slider ${currentSlide + 1}`}
          />
          {imageObjects[currentSlide].legend && (
            <p className="legend-image">{imageObjects[currentSlide].legend}</p>
          )}
          <div className="next-slider" onClick={nextSlide}></div>
        </div>
      </div>
      <div className="container">
        <div className="content-legend-slider">
          <p>IMAGEM ILUSTRATIVA</p>
        </div>
      </div>
    </section>
  );
}

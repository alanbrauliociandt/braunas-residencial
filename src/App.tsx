import './App.css';
import { Header } from './sections/Header/Header';
import { Banner } from './sections/Banner/Banner';
import { About } from './sections/About/About';
import { Differentials } from './sections/Differentials/Differentials';
import { SliderImages } from './sections/SliderImages/SliderImages';
import { PlanHouse } from './sections/PlanHouse/PlanHouse';
import { Location } from './sections/Location/Location';
import { Datasheet } from './sections/Datasheet/Datasheet';
import { Infos } from './sections/Infos/Infos';
import { Contact } from './sections/Contact/Contact';
import { Footer } from './sections/Footer/Footer';
import React, { useState, useEffect } from 'react';
interface ComponentVisibility {
  Header: boolean;
  Banner: boolean;
  About: boolean;
  Differentials: boolean;
  SliderImages: boolean;
  PlanHouse: boolean;
  Location: boolean;
  Datasheet: boolean;
  Infos: boolean;
  Contact: boolean;
  Footer: boolean;
}

function App() {
  const [componentVisibility, setComponentVisibility] = useState<ComponentVisibility>(
    {
      Header: false,
      Banner: false,
      About: false,
      Differentials: false,
      SliderImages: false,
      PlanHouse: false,
      Location: false,
      Datasheet: false,
      Infos: false,
      Contact: false,
      Footer: false,
    }
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const componentName = entry.target.id;
        setComponentVisibility((prevVisibility) => ({
          ...prevVisibility,
          [componentName]: entry.isIntersecting,
        }));
      });
    };

    const observers: IntersectionObserver[] = Object.keys(componentVisibility).map(
      (componentName) => {
        const targetElement = document.getElementById(componentName);
        if (targetElement) {
          const observer = new IntersectionObserver(callback, options);
          observer.observe(targetElement);
          return observer;
        }
        return null;
      }
    ).filter((observer) => observer !== null) as IntersectionObserver[];

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [componentVisibility]);

  return (
    <div className="App">
      <Header/>
      <Banner/>
      <About/>
      <Differentials/>
      <SliderImages />
      <PlanHouse />
      <Location />
      <Datasheet/>
      <Infos />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
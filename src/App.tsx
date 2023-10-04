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
import { EvolutionWork } from './sections/EvolutionWork/EvolutionWork';

function App() {
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
      <EvolutionWork/>
      <Infos />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
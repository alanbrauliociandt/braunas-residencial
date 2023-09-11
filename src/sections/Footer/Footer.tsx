import mcmvImg from "../../assets/MCMV.png";
import caixaImg from '../../assets/CAIXA.png';
import incorporadoraImg from '../../assets/INCORPORADORA.png';
import jhmImg from '../../assets/JHM.png';
import vertraImg from '../../assets/VERTRA.png';

import "./Footer.scss";

export function Footer() {
  return (
    <section className="footer-content">
      <div className="container">
        <div className="info-footer">
          <img src={mcmvImg} alt="Minha casa minha vida" height="60px"/>
          <img src={caixaImg} alt="Caixa" height="30px"/>
          <img src={incorporadoraImg} alt="Incorporadora" height="30px"/>
          <img src={jhmImg} alt="JHM" height="60px"/>
          <img src={vertraImg} alt="Vertra" height="60px"/>
        </div>
      </div>
    </section>
  );
}

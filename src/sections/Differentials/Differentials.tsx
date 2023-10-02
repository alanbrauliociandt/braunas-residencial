import AOS from "aos";
import { Title } from "../../components/Title/Title";
import localizationIcon from "../../assets/localizacao.png";
import recreationAreaIcon from "../../assets/area-lazer.png";
import gatedCommunityIcon from "../../assets/condominio-fechado.png";
import financingIcon from "../../assets/financiamento-caixa.png";
import petsAreaIcon from "../../assets/espaco-exclusivo-pets.png";
import roomWithSuiteIcon from "../../assets/opcoes-suite.png";

import "./DIfferentials.scss";
import { useEffect } from "react";

export function Differentials() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section id="differential">
      <div className="container">
        <Title text="Diferenciais"/>
        <div className="row">
          <div className="box-differential" data-aos="fade-up">
            <img src={localizationIcon} alt="Braunas Localização" height="80px"/>
            <h2>Excelente<br/>Localização </h2>
          </div>
          <div className="box-differential" data-aos="fade-up">
            <img src={recreationAreaIcon} alt="Braunas Área de lazer" height="80px" />
            <h2>Área de lazer</h2>
          </div>
          <div className="box-differential"  data-aos="fade-up" >
            <img src={gatedCommunityIcon} alt="Braunas Condomínio" height="80px"/>
            <h2>Condomínio <br/>fechado</h2>
          </div>
        </div>
        <div className="row">
          <div className="box-differential"  data-aos="fade-up">
            <img src={financingIcon} alt="Braunas Financiamento Caixa" height="80px" />
            <h2>Financiamento<br/> Caixa</h2>
          </div>
          <div className="box-differential" data-aos="fade-up">
            <img src={petsAreaIcon} alt="Braunas Espaço exclusivo pets" height="80px"/>
            <h2>Espaço exclusivo<br/> para Pets</h2>
          </div>
          <div className="box-differential"  data-aos="fade-up" >
            <img src={roomWithSuiteIcon} alt="Braunas Quartos e suítes" height="80px" />
            <h2>
              2 e 3 quartos,
              <br />
              opções com suíte
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

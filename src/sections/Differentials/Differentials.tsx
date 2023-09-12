import { Title } from "../../components/Title/Title";
import localizationIcon from "../../assets/localizacao.png";
import recreationAreaIcon from "../../assets/area-lazer.png";
import gatedCommunityIcon from "../../assets/condominio-fechado.png";
import financingIcon from "../../assets/financiamento-caixa.png";
import petsAreaIcon from "../../assets/espaco-exclusivo-pets.png";
import roomWithSuiteIcon from "../../assets/opcoes-suite.png";

import "./DIfferentials.scss";
import { useRef } from "react";
import useIsElementVisible from "../../hooks/useIsElementVisible/useIsElementVisible";

export function Differentials() {
  const differentialsRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsElementVisible(differentialsRef);

  return (
    <section
      id="differential"
      className={`${isVisible ? "animation-side" : ""}`}
      ref={differentialsRef}
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div className="container">
        <Title text="Diferenciais" />
        <div className="row">
          <div className="box-differential">
            <img src={localizationIcon} alt="Braunas Localização" />
            <h2>Localização Excelente</h2>
          </div>
          <div className="box-differential">
            <img src={recreationAreaIcon} alt="Braunas Área de lazer" />
            <h2>Área de lazer completa</h2>
          </div>
          <div className="box-differential">
            <img src={gatedCommunityIcon} alt="Braunas Condomínio" />
            <h2>Condomínio fechado</h2>
          </div>
        </div>
        <div className="row">
          <div className="box-differential">
            <img src={financingIcon} alt="Braunas Financiamento Caixa" />
            <h2>Financiamento Caixa</h2>
          </div>
          <div className="box-differential">
            <img src={petsAreaIcon} alt="Braunas Espaço exclusivo pets" />
            <h2>Espaço exclusivo para Pets</h2>
          </div>
          <div className="box-differential">
            <img src={roomWithSuiteIcon} alt="Braunas Quartos e suítes" />
            <h2>
              2 e 3 quartos,
              <br />
              opções com suítes
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

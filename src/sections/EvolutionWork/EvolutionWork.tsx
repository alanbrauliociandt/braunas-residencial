import { Title } from "../../components/Title/Title";
import "./EvolutionWork.scss";
import AOS from "aos";
import { useEffect } from "react";
import fundacaoImg from "../../assets/evolution-work/fundacao.png";
import alvenariaImg from "../../assets/evolution-work/alvenaria.png";
import acabamentoImg from "../../assets/evolution-work/acabamento.png";
import areaComumImg from "../../assets/evolution-work/area-comum.png";
import estruturaImg from "../../assets/evolution-work/estrutura.png";
import percentualConcluidoImg from '../../assets/evolution-work/percentual-concluido.png';

export function EvolutionWork() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="evolutionWork" className="evolution-general-content">
      <div className="container" data-aos="fade-up">
        <Title text="Evolução da Obra" />
        <div className="content-evolution">
          <div className="content-work">
            <div className={`work percentage-${0}`}>
              <img src={fundacaoImg} alt="Braúnas Park" />
            </div>
            <span>Fundação</span>
            <p>0%</p>
          </div>
          <div className="content-work">
            <div className={`work percentage-${0}`}>
              <img src={estruturaImg} alt="Braúnas Park" />
            </div>
            <span>Estrutura</span>
            <p>0%</p>
          </div>
          <div className="content-work">
            <div className={`work percentage-${20}`}>
              <img src={alvenariaImg} alt="Braúnas Park" />
            </div>
            <span>Alvenaria</span>
            <p>20%</p>
          </div>
          <div className="content-work">
            <div className={`work percentage-${0}`}>
              <img src={acabamentoImg} alt="Braúnas Park" />
            </div>
            <span>Acabamento</span>
            <p>0%</p>
          </div>
          <div className="content-work">
            <div className={`work percentage-${0}`}>
              <img src={areaComumImg} alt="Braúnas Park" />
            </div>
            <span>Área comum</span>
            <p>0%</p>
          </div>
        </div>
        <div className="second-content-evolution">
          <div className="second-content-work">
            <div className={`second-work percentage-${0}`}>
              <img src={percentualConcluidoImg} alt="Braúnas Park" />
            </div>
            <span>Percentual Concluído</span>
            <p>0%</p>
          </div>
        </div>
      </div>
    </section>
  );
}

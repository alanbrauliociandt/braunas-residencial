import AOS from "aos";
import { Title } from "../../components/Title/Title";
import localizationIcon from "../../assets/localizacao.png";
import recreationAreaIcon from "../../assets/area-lazer.png";
import gatedCommunityIcon from "../../assets/condominio-fechado.png";
import financingIcon from "../../assets/financiamento-caixa.png";
import petsAreaIcon from "../../assets/espaco-exclusivo-pets.png";
import roomWithSuiteIcon from "../../assets/opcoes-suite.png";
import caixaImg from "../../assets/CAIXA.png";

import "./Differentials.scss";
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
        <Title text="Diferenciais" />
        <div className="row">
          <div className="box-differential" data-aos="fade-up">
            <img
              src={localizationIcon}
              alt="Braunas Localização"
              height="50px"
            />
            <h2>
              Excelente
              <br />
              Localização{" "}
            </h2>
            <p>
              A apenas 2 minutos da Lagoa da Pampulha, com opções de linhas de
              ônibus, ampla rede de comércio com padaria, supermercado, farmácia
              e instituições de ensino.
            </p>
          </div>
          <div className="box-differential" data-aos="fade-up">
            <img
              src={recreationAreaIcon}
              alt="Braunas Área de lazer"
              height="50px"
            />
            <h2>Área de lazer</h2>
            <p>
              Uma área de lazer que proporciona aos moradores várias opções de
              diversão, oferecendo segurança para as crianças e tranquilidade
              para os pais. Espaços que possibilitam momentos felizes para você,
              seus amigos e familiares!
            </p>
          </div>
          <div className="box-differential" data-aos="fade-up">
            <img
              src={gatedCommunityIcon}
              alt="Braunas Condomínio"
              height="50px"
            />
            <h2>
              Condomínio <br />
              fechado
            </h2>
            <p>
              Com o objetivo de termos um condomínio sustentável e maior
              economia, o Braúnas Park conta com sensor de presença e energia
              fotovoltaica nas áreas comuns do prédio. Guarita com código de
              acesso e porteiro 24 horas, e um locker para encomendas. Com toda
              segurança e conforto!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="box-differential" data-aos="fade-up">
            <img
              src={financingIcon}
              alt="Braunas Financiamento Caixa"
              height="50px"
            />
            <h2>
              Financiamento
              <br />{" "}
              <img
                src={caixaImg}
                alt="Financiamento Residencial Braúnas"
                width="50px"
              />
            </h2>
            <p>
              Com o financiamento Caixa você terá as menores taxas de juros para
              o seu financiamento, podendo utilizar seu FGTS para abater das
              suas parcelas e ainda ter um subsídio de até R$ 47.000,00 e tudo
              isso com a garantia de entrega Caixa Econômica Federal.
            </p>
          </div>
          <div className="box-differential" data-aos="fade-up">
            <img
              src={petsAreaIcon}
              alt="Braunas Espaço exclusivo pets"
              height="50px"
            />
            <h2>
              Espaço exclusivo
              <br /> para Pets
            </h2>
            <p>
              Criado para oferecer conforto, segurança e entretenimento ao seu
              pet, além de ser o lugar perfeito para ele se exercitar e gastar
              as energias.
            </p>
          </div>
          <div className="box-differential" data-aos="fade-up">
            <img
              src={roomWithSuiteIcon}
              alt="Braunas Quartos e suítes"
              height="50px"
            />
            <h2>
              2 e 3 quartos,
              <br />
              opções com suíte
            </h2>
            <p>
              2 e 3 quartos e coberturas com opções de suíte: <br/>
              Em uma torre única, temos exclusivos apartamentos de 03 quartos com suíte na
              região. Opções de cobertura com uma vista incrível. Apartamentos
              com acabamento diferenciado, com piso laminado nas salas e quartos
              e cerâmica nos banheiros e cozinha. <br/>
              Opções de apartamentos com 2 vagas de garagem e vaga coberta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

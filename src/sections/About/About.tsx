import AOS from "aos";
import { Title } from "../../components/Title/Title";
import "./About.scss";
import imageSobre from "../../assets/image-sobre.png";
import { useEffect } from "react";

export function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section id="about" className={`about-content`} data-aos="fade-up">
      <div className="container">
        <Title text="Sobre" />
        <div className="general-container-about">
          <div className="image-about">
            <img
              src={imageSobre}
              alt="Sobre o Braúnas Residencial Park"
              className="photo-about"
            />
          </div>
          <div className="text-general-about">
            <p className="residencial-title">Residencial BRAÚNAS PARK</p>

            <p className="text-about">
              Seu espaço de conforto e comodidade a 1Km da Lagoa da Pampulha!
            </p>
            <br />

            <p className="text-about">
              {" "}
              Totalmente pensado em tudo o que você e sua família merecem! Onde
              o conforto encontra a conveniência e a tranquilidade se une à
              modernidade, em um ambiente que combina a serenidade da natureza
              com a comodidade urbana.
            </p>
            <br />

            <p className="text-about">
              Torre única, com apês de 02 e 03 quartos (opções com suíte), em um
              Condomínio com atmosfera exclusiva e intimista e lazer que
              contempla uma piscina convidativa, academia, espaço gourmet,
              quadra gramada, salão de festas, playground, pet place, tudo isso
              em um ambiente (opções com suíte e cobertura) repleto de
              Natureza!!!{" "}
            </p>
            <br />

            <p className="text-about">
              Mais do que um lugar para morar, o Residencial Braúnas Park lhe
              proporciona um estilo de vida distinto, onde poderá compartilhar
              momentos especiais com quem você ama.{" "}
            </p>
            <br />

            <p className="text-about">
              Tudo isso com a garantia <strong>CAIXA ECONOMICA FEDERAL </strong>
              e do <strong>Programa Minha Casa Minha Vida</strong> com as
              melhores condições de financiamento!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

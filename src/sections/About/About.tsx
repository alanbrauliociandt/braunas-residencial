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
            <img src={imageSobre} alt="Sobre o Braúnas Residencial Park" height="600"/>
          </div>
          <div className="text-general-about">
            <p className="text-about residencial-title">
              Residencial BRAÚNAS PARK
            </p>

            <p className="text-about">
              Seu espaço de conforto e comodidade à 1Km da Lagoa da Pampulha!
            </p>
            <br />

            <p className="text-about">
              {" "}
              Totalmente pensado em tudo que você e sua família merecem; onde o
              conforto<br/> encontra a conveniência; a tranquilidade se une à
              modernidade; em um ambiente<br/> que combina a serenidade da Natureza
              com a comodidade urbana.{" "}
            </p>
            <br />

            <p className="text-about">
              Torre única, com apês de 02 e 03 quartos (opções com suíte), em um
              Condomínio<br/>com atmosfera exclusiva e intimista e lazer que
              contempla uma piscina convidativa,<br/>academia, espaço
              gourmet, quadra society, salão de festas, playground, pet place,<br/>
              tudo isso em um espaço repleto de Natureza!!!{" "}
            </p>
            <br />

            <p className="text-about">
              Mais do que um lugar para morar: o Residencial Braunas Park lhe
              proporciona<br/> um estilo de vida distinto, onde poderá compartilhar
              momentos especiais com<br/> quem você ama.{" "}
            </p>
            <br />

            <p className="text-about">
              Tudo isso com a garantia <strong>CAIXA ECONOMICA FEDERAL</strong>
              e do Programa Minha Casa<br/> Minha Vida com as melhores condições de
              financiamento!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

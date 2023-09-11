import { Title } from "../../components/Title/Title";
import "./About.scss";

export function About() {
  return (
    <section id="about" className="about-content">
      <div className="container">
        <Title text="Sobre" />
        <p className="text-about">Residencial BRAÚNAS PARK</p>
        <p className="text-about">
          Seu espaço de conforto e comodidade A 1 KM da Lagoa da Pampulha
        </p>
        <p className="text-about">
          O Residencial Braunas Park, é pensado em tudo que você e sua família
          merece. Onde o conforto encontra a conveniência; a tranquilidade se
          une à modernidade; em um ambiente que combina a serenidade da natureza
          com as comodidades urbanas.
        </p>
        <p className="text-about">
          Torre única, com apartamentos de 02 e 03 quartos (opções com suíte),
          em um condomínio com atmosfera exclusiva e intimista. Lazer que
          contempla uma piscina convidativa, academia equipada, espaço gourmet
          ideal para receber amigos e familiares, quadra,salão de festas,
          playground para as crianças, pet place, em um espaço repleto de
          natureza!!!
        </p>

        <p className="text-about">
          Mais do que um lugar para morar, o Residencial Braunas Park lhe
          proporciona um estilo de vida distinto, onde você poderá compartilhar
          momentos especiais com vizinhos amigáveis e desfrutando da proximidade
          com a natureza.
        </p>
        <p className="text-about">
          Tudo isso com a garantia CAIXA ECONÔMICA FEDERAL, dentro do programa
          Minha Casa Minha Vida com as melhores condições de finan- ciamento!
        </p>
      </div>
    </section>
  );
}

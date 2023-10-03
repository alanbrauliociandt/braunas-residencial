import { Title } from "../../components/Title/Title";
import "./Datasheet.scss";
import AOS from 'aos';
import { useEffect } from "react";

export function Datasheet() {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);
  return (
    <section id="datasheet" className="datasheet-content">
      <div className="container"  data-aos="fade-up">
        <Title text="Ficha técnica" />
        <div className="datasheet">
          <p>
            <strong>Produto:</strong> Apartamentos em Contagem/MG
          </p>
          <p>
            <strong>Endereço:</strong> Rua Mena da gangorra, 240 (Região da
            Pampulha - Contagem/MG)
          </p>
          <p>
            <strong>Área Total do Terreno:</strong> 4.519,44 m²
          </p>
          <p>
            <strong>Área de lazer:</strong> Salão de Festas, Playground, Espaço
            Gourmet, Piscina, Quadra, Academia, Pet place, Pomar
          </p>
          <p>
            <strong>Número de unidades:</strong> 92
          </p>
          <p>
            <strong>Torre única</strong>
          </p>
          <p>
            <strong>Número de pavimentos:</strong> 13
          </p>
          <p>
            <strong>104 Vagas de garagem</strong>
          </p>
          <p>
            <strong>Tipologia das unidades:</strong>
          </p>
          <div className="sub-menu">
            <p>1 Quarto Área total: 37,04m²</p>
            <p>2 Quartos Área total: 45,72m² a 49m²</p>
            <p>2 Quartos com suíte Área total 49,51m² a 51m²</p>
            <p>3 Quartos com suíte Área total: 73,27 m²</p>
            <p>*Área real privativa acessória com valores aproximados</p>
          </div>
          <p>
            <strong>Proximidade:</strong> Próximo ao Zoológico, Marco Zero,
            Igrejinha, Mineirão, Mineirinho, Parque Guanabara, Museu da
            Pampulha, PIC Pampulha, Iate Clube, UFMG, Supermercado BH e a 18
            minutos do Shopping Contagem. Vias de acesso: Av. Braúnas, Av.
            Otacílio Negrão de Lima, Av. Prof. Clóvis Salgado, Av. Heráclito
            Mourão de Miranda, Av. Pres. Tancredo Neves, Av. Portugal, Anel
            Rodoviário, Av. Pres. Carlos Luz e Av. Antônio Carlos.
          </p>
        </div>
      </div>
    </section>
  );
}

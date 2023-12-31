import { Title } from "../../components/Title/Title";
import locationIcon from '../../assets/local.png';
import foneIcon from '../../assets/fone.png';
import emailIcon from '../../assets/mail.png';
import socialWpp from '../../assets/info-wpp.png';
import socialInsta from '../../assets/info-insta.png';
import socialMail from '../../assets/info-mail.png';
import AOS from 'aos';
import { useEffect } from "react";


import './Infos.scss';

export function Infos(){

    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);
    return (
        <section className="infos-content">
            <div className="container"  data-aos="fade-up">
                <Title text="Informações" color="#fff"/>
                <div className="info-address">
                    <img src={locationIcon} alt="Localização Braunas" width="50px"/>
                    <p>Rua Mena da Gangorra n 240, Braúnas</p>
                </div>
                <div className="info-address">
                    <img src={foneIcon} alt="Telefone Residencial Braunas" width="60px"/>
                    <p><a href="tel:+5531971613655">(31) 97161 - 3655</a></p>
                </div>
                <div className="info-address">
                    <img src={emailIcon} alt="Email Residencial Braunas" width="70px" height="55px"/>
                    <p> <a href="mailto:contato@residencialbraunaspark.com.br" rel="noreferrer">contato@residencialbraunaspark.com.br</a></p>
                </div>
                <div className="social-icons">
                    <a href="https://api.whatsapp.com/send?phone=5531971613655" target="_blank" rel="noreferrer"><img src={socialWpp} alt="Whatsapp Braunas" width="50px"/></a>
                    <a href="#" rel="noreferrer"><img src={socialInsta} alt="Insta Braunas" width="50px"/></a>
                    <a href="mailto:contato@residencialbraunaspark.com.br" rel="noreferrer"><img src={socialMail} alt="Email Braunas" width="50px"/></a>
                </div>
            </div>
        </section>
    )
}
import "./Header.scss";
import whatsappIcon from "../../assets/info-wpp.png";
import instagramIcon from "../../assets/info-insta.png";
import emailIcon from "../../assets/info-mail.png";
import logo from "../../assets/logo.png";
import { useEffect } from "react";
export function Header() {
  function handleClickMenuMobile() {
    const mobileMenu = document.querySelector(".menu");
    mobileMenu?.classList.toggle("mobile-menu-open");
  }

  useEffect(() => {
    function scrollToSection(sectionId: any) {
      const section = document.querySelector(sectionId);
      if (section) {
        let scrollOffset = 0;

        scrollOffset = section.offsetTop - 100;

        window.scrollTo({
          top: scrollOffset,
          behavior: "smooth",
        });
      }
    }

    const links = document.querySelectorAll(".menu-item");
    links.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const sectionId = link.getAttribute("href");
        scrollToSection(sectionId);
      });
    });

    const footerLinks = document.querySelectorAll("footer a");
    footerLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const sectionId = link.getAttribute("href");
        scrollToSection(sectionId);
      });
    });
  }, []);

  return (
    <header id="header" className={`general-container-header`}>
      <div className="info-top-header">
          <div className="social-icons">
            <img src={whatsappIcon} alt="Whatsapp" width="30px" />
            <img src={instagramIcon} alt="Instagram" width="30px" />
            <img src={emailIcon} alt="Email" width="30px" />
          </div>
          <p>(31) 9XXXX-XXXX</p>
      </div>
      <div className="header container">
        <img src={logo} alt="Logo Braúnas Park" className="logo" />
        <nav className="menu">
          <ul>
            <li>
              <a href="#about" className="menu-item">
                Sobre
              </a>
            </li>
            <li>
              <a href="#differential" className="menu-item">
                Diferenciais
              </a>
            </li>
            <li>
              <a href="#photos" className="menu-item">
                Fotos
              </a>
            </li>
            <li>
              <a href="#planhouse" className="menu-item">
                Plantas
              </a>
            </li>
            <li>
              <a href="#location" className="menu-item">
                Localização
              </a>
            </li>
            <li>
              <a href="#datasheet" className="menu-item">
                Ficha Técnica
              </a>
            </li>
            <li>
              <a href="#contact" className="menu-item">
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <div className="mobile-menu-icon" onClick={handleClickMenuMobile}>
          &#9776;
        </div>
      </div>
    </header>
  );
}

import "./Header.scss";
import whatsappIcon from "../../assets/info-wpp.png";
import instagramIcon from "../../assets/info-insta.png";
import emailIcon from "../../assets/info-mail.png";
import logo from "../../assets/logo.png";
export function Header() {

  function handleClickMenuMobile() {
    const mobileMenu = document.querySelector(".menu");
    mobileMenu?.classList.toggle("mobile-menu-open");
  }

  return (
    <header
      id="header"
      className={`general-container-header`}
    >
      <div className="info-top-header">
        <div className="social-icons">
          <img src={whatsappIcon} alt="Whatsapp" width="30px" />
          <img src={instagramIcon} alt="Instagram" width="30px" />
          <img src={emailIcon} alt="Email" width="30px" />
        </div>
        <p>(31) 9XXXX-XXXX</p>
      </div>
      <div className="header">
        <img src={logo} alt="Logo Braúnas Park" className="logo" />
        <nav className="menu">
          <ul>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Diferenciais</a>
            </li>
            <li>
              <a href="#">Fotos</a>
            </li>
            <li>
              <a href="#">Plantas</a>
            </li>
            <li>
              <a href="#">Localização</a>
            </li>
            <li>
              <a href="#">Ficha Técnica</a>
            </li>
            <li>
              <a href="#">Contato</a>
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

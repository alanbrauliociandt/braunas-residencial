import { useState } from "react";
import { Title } from "../../components/Title/Title";
import "./Contact.scss";

export function Contact() {
  const [infoContact, setInfoContact] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleChangeForm(value: string, input: string) {
    setInfoContact((oldInfoContact) => ({
      ...oldInfoContact,
      [input]: value,
    }));
  }

  return (
    <section className="content-contact">
      <div className="container">
        <Title text="Entre em contato" />
        <p className="subtitle-contact">
          Venha descobrir pessoalmente tudo o que o Residencial Braunas tem a
          oferecer. Agende uma visita e explore a possibilidade de viver em um
          ambiente que harmoniza conforto e natureza.
        </p>
        <form>
          <div className="input-container">
            <input
              type="text"
              id="name"
              value={infoContact.name}
              onChange={(event) => handleChangeForm(event.target.value, "name")}
              placeholder="Nome"
            />
            <input
              type="email"
              id="email"
              value={infoContact.email}
              onChange={(event) =>
                handleChangeForm(event.target.value, "email")
              }
              placeholder="Email"
            />
            <input
              type="text"
              id="phone"
              value={infoContact.phone}
              onChange={(event) =>
                handleChangeForm(event.target.value, "phone")
              }
              placeholder="Telefone"
            />

            <input type="button" value="Enviar" />
          </div>
        </form>
      </div>
    </section>
  );
}

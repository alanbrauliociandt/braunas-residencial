import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Title } from "../../components/Title/Title";
import "./Location.scss";
import AOS from 'aos';
import { useEffect } from "react";

export function Location() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDIqQovOUnoeE79i5FUn-LhYE-yJcA8G4o",
  });

  const position = {
    lat: -19.929490155876227,
    lng: -43.94135100413374,
  }

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);
  return (
    <section id="location" className="location-content">
      <div className="container"  data-aos="fade-up">
        <Title text="Localização" />
        <p className="subtitle-location">
          Em uma localização estratégica a menos de 1 KM da famosa Lagoa da
          Pampulha, proporcionando fácil acesso aos seus encantos (Museu de Arte
          da Pampulha, Igreja São Francisco, etc) e com uma conexão diária com a
          Natureza.
        </p>
        {isLoaded ? (
          <div style={{ height: "500px", marginTop: '20px' }}>
            <GoogleMap
              mapContainerStyle={{
                width: "100%",
                height: "100%",
              }}
              center={position}
              zoom={19}
            >
              <Marker position={position}/>
              <></>
            </GoogleMap>
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
  //     <GoogleMap
  //       mapContainerStyle={{
  //           width: '100%',
  //           height: '100%'
  //       }}
  //       center={{
  //           lat: -19.857474180491245,
  //           lng: -44.016939850757424,
  //       }}
  //     >
  //     </GoogleMap>
  // );
}

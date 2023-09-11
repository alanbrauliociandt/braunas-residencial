import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Title } from "../../components/Title/Title";
import "./Location.scss";

export function Location() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCGrFIq6LAZGDoZzywV9V0mIwKVrnDcEOg",
  });
  return (
    <section className="location-content">
      <div className="container">
        <Title text="Localização" />
        <p className="subtitle-location">
          Em uma localização estratégica a menos de 1 KM da famosa Lagoa da
          Pampulha, proporcionando fácil acesso aos seus encantos (Museu de Arte
          da Pampulha, Igreja São Francisco, etc) e com uma conexão diária com a
          Natureza.
        </p>
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={{
              width: "100%",
              height: "100%",
            }}
            center={{
              lat: -19.922814755266646,
              lng: -43.93986191915611,
            }}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
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

  //   return isLoaded ? (
  //     <div style={{ height: '500px'}}>
  //     <GoogleMap
  //       mapContainerStyle={{
  //         width: "100%",
  //         height: "100%",
  //       }}
  //       center={{
  //         lat: -19.922814755266646,
  //         lng: -43.93986191915611,
  //       }}
  //     >
  //       {/* Child components, such as markers, info windows, etc. */}
  //       <></>
  //     </GoogleMap>
  //     </div>
  //   ) : (
  //     <></>
  //   );
}

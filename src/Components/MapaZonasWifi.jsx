import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import ZonaCard from "./ZonaCard";
import styled from "styled-components";
import { motion } from "motion/react";

// Ícono personalizados
const userIcon = new L.Icon({
  iconUrl: "icons/usericon.svg",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const iconActivo = L.icon({
  iconUrl: "/icons/wifiicon.svg",  // o .png
  shadowUrl: "icons/wifishadow.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const iconInactivo = L.icon({
  iconUrl: "/icons/wifidisabled.svg",
  shadowUrl: "icons/wifishadow.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});
const iconCentro = L.icon({
  iconUrl: "/icons/centro.svg",
  shadowUrl: "icons/shadowcentro.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});


// Datos de los puntos WiFi
const zonasWifi = [
  { nombre: "Parque de los Ángeles", coords: [3.8929356916390847, -76.30507734159134], enabled: true, image: "images/angeles.webp" },
  { nombre: "Parque de la Merced", coords: [3.8966599616833983, -76.30674613387694], enabled: true, image: "images/merced.webp"  },
  { nombre: "Parque de Paloblanco", coords: [3.912194210111981, -76.30736897985805], enabled: true, image: "images/palo_blanco.webp"  },
  { nombre: "Parque Fuenmayor", coords: [3.907393962268074, -76.29319545524012], enabled: false, image: "images/fuenmayor.webp" },
  { nombre: "Parque Santa Bárbara", coords: [3.903855251060354, -76.29525600278023], enabled: true, image: "images/santa_barbara.webp"  },
  { nombre: "Parque de la Revolución", coords: [3.900058404805033, -76.29029339566847], enabled: true, image: "images/revolucion.webp"  },
  { nombre: "Parque Alto Bonito", coords: [3.8995856169563123, -76.28627800136128], enabled: true, image: "images/alto_bonito.webp"  },
  { nombre: "Parque Maria Luisa", coords: [3.91258405635995, -76.29595931546105], enabled: false, image: "images/maria_luisa.webp"  }
];
const centrosTransformacion = [
  {nombre: "CTD Colegio ITA", coords: [3.9117234951243054, -76.2918113379526], enabled: true, image: "images/ita.webp"},
  {nombre: "CTD Colegio Academido", coords: [3.8918508993832703, -76.29820865911823], enabled: true, image: "images/academico.webp"},
  {nombre: "CTD Biblioteca Carlos H. Morales", coords: [3.9083289860340766, -76.29871818416554], enabled: true, image: "images/biblioteca.webp"},
];

const WifiMainDiv = styled(motion.div)`
  width: 100%;
  min-height: calc(100vh - 60px);
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
`
const StyledMapContainer = styled(MapContainer)`
  border-radius: 20px;
  box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
  margin-top: 50px;
  
`

function UserLocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMap();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = [pos.coords.latitude, pos.coords.longitude];
        setPosition(coords);
        map.setView(coords, 14);
      },
      (err) => {
        console.error("Ubicación no disponible:", err);
        alert("No se pudo obtener tu ubicación.");
      }
    );
  }, [map]);

  

  return position ? (
    <Marker position={position} icon={userIcon}>
      <Popup>¡Estás aquí!</Popup>
    </Marker>
  ) : null;
}

export default function MapaZonasWifi({setHeaderVisible}) {

  useEffect(() => {
    setHeaderVisible(true)
  },[setHeaderVisible])

  return (
    <WifiMainDiv
            initial={{translateY: 160, opacity: 0}}
            animate={{translateY: 0, opacity: 1, transition: {duration: 1.5} }}
            exit={{scale: 0, opacity: 0, transition: {duration: 0.7}}}>
        <StyledMapContainer
        center={[3.9019, -76.2975]}
        zoom={14}
        style={{ height: "80vh", width: "80%",}}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.secretariaticbuga.online/">Secretaría TIC</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Marcadores de las zonas WiFi */}
        {zonasWifi.map((zona, idx) => (
          <Marker key={idx} position={zona.coords} icon={zona.enabled ? iconActivo : iconInactivo}>
            <Popup><ZonaCard zona={zona}/></Popup>
          </Marker>
        ))}
        {/* Marcadores de los Centros de Transformacion */}
        {centrosTransformacion.map((centro, idx) => (
          <Marker key={idx} position={centro.coords} icon={iconCentro}>
            <Popup><ZonaCard zona={centro}/></Popup>
          </Marker>
        ))}

        {/* Ubicación del usuario */}
        <UserLocationMarker/>
      </StyledMapContainer>
    </WifiMainDiv>
    
  );
}


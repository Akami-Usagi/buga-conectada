import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import OficinaCard from "./../Components/OficinaCard"
import styled from "styled-components";
import { motion } from "motion/react";

// Ícono personalizados
const userIcon = new L.Icon({
  iconUrl: "icons/usericon.svg",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});


const iconCentro = L.icon({
  iconUrl: "/icons/centro.svg",
  shadowUrl: "icons/shadowcentro.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});


// Datos de las oficinas
const oficinasAlcaldia = [
  {nombre: "Secretaría de Hacienda - Camara de Comercio de Buga", coords: [3.9117234951243054, -76.2918113379526], direccion: "calle 123", image: "images/oficinas/camara-comercio.webp"},
  {nombre: "CTD Colegio Academido", coords: [3.8918508993832703, -76.29820865911823], direccion: "calle 123", image: "images/academico.webp"},
  {nombre: "CTD Biblioteca Carlos H. Morales", coords: [3.9083289860340766, -76.29871818416554], direccion: "calle 123", image: "images/biblioteca.webp"},
  {nombre: "CTD Rural La Habana", coords: [3.8800234364295836, -76.19304531799423], direccion: "calle 123", image: "images/habana.webp"},
];

const WifiMainDiv = styled(motion.div)`
  width: 100%;
  min-height: calc(100dvh - 60px);
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
`
const StyledMapContainer = styled(MapContainer)`
  border-radius: 20px;
  box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
  width: 80%;
  height: 75dvh;
  position: relative;
  bottom: 20px;
  @media(max-width: 830px){
    width: 95%;
  }
`
const WifiText = styled.h1`
  color: white;
  text-align: center;
  width: 90%;
  text-shadow: 2px 2px 4px #000;
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

export default function UbicacionesAlcaldia({setHeaderVisible}) {

  useEffect(() => {
    setHeaderVisible(true)
  },[setHeaderVisible])

  return (
    <WifiMainDiv
            initial={{translateY: 160, opacity: 0}}
            animate={{translateY: 0, opacity: 1}}
            transition={{delay: 1, duration: 1.5}}
            exit={{scale: 0, opacity: 0, transition: {duration: 1.5}}}>
        <WifiText>Ubicacion de las diferentes oficinas de la Alcaldía Municipal</WifiText>      
        <StyledMapContainer
        center={[3.9019, -76.2975]}
        zoom={14}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.secretariaticbuga.online/">Secretaría TIC</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        
        
        {/* Marcadores de las oficinas */}
        {oficinasAlcaldia.map((oficina, idx) => (
          <Marker key={idx} position={oficina.coords} icon={iconCentro}>
            <Popup><OficinaCard zona={oficina}/></Popup>
          </Marker>
        ))}

        {/* Ubicación del usuario */}
        <UserLocationMarker/>
      </StyledMapContainer>
    </WifiMainDiv>
    
  );
}


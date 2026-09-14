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
  iconUrl: "/icons/oficina.svg",
  shadowUrl: "icons/shadowcentro.png",
  iconSize: [40, 40],
  iconAnchor: [15, 30],
  popupAnchor: [5, -32],
});


// Datos de las oficinas
const oficinasAlcaldia = [
  {nombre: `Secretaría de Hacienda: atencion al contribuyente: impuesto predial, industria y comercio, rentas menores - Camara de Comercio de Buga`, coords: [3.8990204785345353, -76.30186285188644], direccion: "Carrera 14 # 5-53", image: "images/oficinas/camara-comercio.webp"},
  {nombre: `Ventanilla Única de Atencion al Ciudadano: PQRD - Camara de Comercio de Buga`, coords: [3.8986449645800216, -76.30200638839638], direccion: "Carrera 14 # 5-53", image: "images/oficinas/camara-comercio.webp"},
  {nombre: "Secretaría de Salud: SAC, Aseguramiento y Poblaciones Vulnerables - Hospital Divino Niño", coords: [3.91512392442493, -76.29612064685685], direccion: "Carrera 15 # 26-50", image: "images/oficinas/divino_nino.webp"},
  {nombre: "Secretaría de las Tecnologias de la Informacion y Telecomunicaciones: TIC - Oficina ERT: Empresa de Recursos Tecnológicos", coords: [3.897437892930023, -76.30035861591568], direccion: "Carrera 12 # 4-40", image: "images/oficinas/ert.webp"},
  {nombre: "Secretaría de Desarrollo Institucional - Secretaría de Bienestar Social y Participacion", coords: [3.8951666145215693, -76.28925627543416], direccion: "Carrera 4CE # 6A-09", image: "images/oficinas/altos.webp"},
  {nombre: "Secretaría de Gobierno - IMDER Buga", coords: [3.89111968669629, -76.30152774076709], direccion: "Carrera 12 # 4Sur-95", image: "images/oficinas/imder.webp"},
  {nombre: "Secretaría de Agricultura - IMDER Buga", coords: [3.890630600537979, -76.30124609977803], direccion: "Carrera 12 # 4Sur-95", image: "images/oficinas/imder.webp"},
  {nombre: "Oficina de Control Interno Disciplinario - Secretaría de la Mujer", coords: [3.8966328296168506, -76.29884989203788], direccion: "Calle 4 con Carrera 10", image: "images/oficinas/mujer.webp"},
  {nombre: "Oficina de Cooperacion Internacional - Teatro Municipal", coords: [3.897979983090574, -76.29849946483289], direccion: "Calle 6 con Carrera 10", image: "images/oficinas/teatro.webp"},
  {nombre: "Secretaría de Planeación - Colegio Academido", coords: [3.8918508993832703, -76.29820865911823], direccion: "Calle 0Sur con Carrera 9", image: "images/oficinas/academico.webp"},
  {nombre: "Secretaríad e Obras Públicas - Biblioteca Carlos H. Morales", coords: [3.9083289860340766, -76.29871818416554], direccion: "Calle 16 # 14-50", image: "images/oficinas/biblioteca.webp"},
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
        map.setView([3.903242949949297, -76.29772025374014], 14.5);
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


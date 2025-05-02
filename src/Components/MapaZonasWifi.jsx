import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import ZonaCard from "./ZonaCard";

// Solución para íconos rotos en Leaflet en React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

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
];
const centrosTransformacion = [
  {nombre: "CTD Colegio ITA", coords: [3.9117234951243054, -76.2918113379526]},
  {nombre: "CTD Colegio Academido", coords: [3.8918508993832703, -76.29820865911823]},
  {nombre: "CTD Biblioteca Carlos H. Morales", coords: [3.9083289860340766, -76.29871818416554]},
];

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

export default function MapaZonasWifi() {
 

  return (
    <MapContainer
      center={[3.9019, -76.2975]}
      zoom={14}
      style={{ height: "100vh", width: "100%" }}
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
    </MapContainer>
  );
}


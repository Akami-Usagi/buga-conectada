import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Solución para íconos rotos en Leaflet en React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

// Ícono personalizado para el usuario
const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/61/61168.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

// Datos de los puntos WiFi
const zonasWifi = [
  { nombre: "Parque de los Ángeles", coords: [3.900751, -76.295122] },
  { nombre: "Parque de la Merced (No funcional)", coords: [3.899210, -76.298841] },
  { nombre: "Parque de Paloblanco", coords: [3.902879, -76.309345] },
  { nombre: "Parque Fuenmayor (No funcional)", coords: [3.902120, -76.294915] },
  { nombre: "Parque Santa Bárbara", coords: [3.901150, -76.296730] },
  { nombre: "Parque de la Revolución", coords: [3.901990, -76.301640] },
  { nombre: "Parque Alto Bonito (No funcional)", coords: [3.905800, -76.311540] },
];

function UserLocationMarker({ setUserPosition }) {
  const [position, setPosition] = useState(null);
  const map = useMap();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = [pos.coords.latitude, pos.coords.longitude];
        setPosition(coords);
        setUserPosition(coords);
        map.setView(coords, 15);
      },
      (err) => {
        console.error("Ubicación no disponible:", err);
        alert("No se pudo obtener tu ubicación.");
      }
    );
  }, [map, setUserPosition]);

  return position ? (
    <Marker position={position} icon={userIcon}>
      <Popup>¡Estás aquí!</Popup>
    </Marker>
  ) : null;
}

export default function MapaZonasWifi() {
  const [userPosition, setUserPosition] = useState(null);

  return (
    <MapContainer
      center={[3.9019, -76.2975]}
      zoom={14}
      style={{ height: "50vh", width: "50%" }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Marcadores de las zonas WiFi */}
      {zonasWifi.map((zona, idx) => (
        <Marker key={idx} position={zona.coords}>
          <Popup>{zona.nombre}</Popup>
        </Marker>
      ))}

      {/* Ubicación del usuario */}
      <UserLocationMarker setUserPosition={setUserPosition} />
    </MapContainer>
  );
}


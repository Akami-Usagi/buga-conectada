import React from "react";
import Main from "./Pages/Main";
import MapaZonasWifi from "./Components/MapaZonasWifi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="zonas_wifi" element={<MapaZonasWifi/>}/>
      </Routes>
    </Router>
      
  );
}

export default App;

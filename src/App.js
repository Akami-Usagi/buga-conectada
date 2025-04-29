import React from "react";
import Main from "./Pages/Main";
import MapaZonasWifi from "./Components/MapaZonasWifi";
import Shader from "./Components/Shader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/zonas_wifi" element={<MapaZonasWifi/>}/>
        <Route path="/shader" element={<Shader/>}/>
      </Routes>
    </Router>
      
  );
}

export default App;

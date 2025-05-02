import React from "react";
import { useState } from "react";
import Main from "./Pages/Main";
import MapaZonasWifi from "./Components/MapaZonasWifi";
import Shader from "./Components/Shader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";


function App() {

  const [headerVisible, setHeaderVisible] = useState(false)

  return (
    <Router>
      <Shader/>
      {headerVisible ? <Header/> : null}
      <Routes>
        <Route path="/" element={<Main setHeaderVisible={setHeaderVisible}/>} />
        <Route path="/zonas_wifi" element={<MapaZonasWifi/>}/>
        <Route path="/shader" element={<Shader/>}/>
      </Routes>
    </Router>
      
  );
}

export default App;

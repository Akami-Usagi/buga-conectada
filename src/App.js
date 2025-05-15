import React from "react";
import { useState } from "react";
import SplashScreen from "./Pages/SplashScreen";
import Main from "./Pages/Main";
import MapaZonasWifi from "./Components/MapaZonasWifi";
import ParquesConectados from "./Pages/ParquesConectados";
import Shader from "./Components/Shader";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import { AnimatePresence } from "motion/react";




function App() {

  const [headerVisible, setHeaderVisible] = useState(false)
  const location = useLocation();

  return (
    <>
      <Shader/>
      {headerVisible ? <Header/> : null}
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/splash" element={<SplashScreen/>}/>
          <Route path="/" element={<Main setHeaderVisible={setHeaderVisible}/>} />
          <Route path="/zonas_wifi" element={<MapaZonasWifi setHeaderVisible={setHeaderVisible}/> }/>
          <Route path="/parques_conectados" element={<ParquesConectados setHeaderVisible={setHeaderVisible}/>}/>
        </Routes>
      </AnimatePresence>
    </>
      
  );
}

export default App;

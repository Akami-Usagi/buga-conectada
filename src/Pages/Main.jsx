import React from "react";
import Shader from "../Components/Shader";
import styled from "styled-components";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const Logo = styled(motion.img)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 350px;
`
const MainDiv = styled.div`
    width: 100%;
    height: auto;
`

export default function Main ({setHeaderVisible}){


    const [mainIntro, setMainIntro] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setMainIntro(false); // Aquí cambias a otro componente
          setHeaderVisible(true);
        }, 4000); // Espera 3 segundos
    
        return () => clearTimeout(timer);
      }, [mainIntro, setHeaderVisible]);


    const SplashScreen = () => {
        return(
            <Logo
            initial={{ scale: 0, opacity: 0}}
            animate={{ scale: 1, opacity: 1}}
            transition={{duration: 1.5}}
            exit={{translateY: -100, opacity: 0 }}
            
            src="images/buga_conectada_logo.svg" alt="Buga Conectada" />
        )
    };

    const MainContent = () => {
        return(
            <div>
                <h1>hola mundo</h1>
            </div>
        )
    };

    return(
        <div>
            <Shader/>
            <AnimatePresence mode="wait">
                {mainIntro ? <SplashScreen key={"splash"}/> : <MainContent key={"content"}/>}
            </AnimatePresence>
        </div>
    )
}
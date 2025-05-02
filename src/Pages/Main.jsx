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
    max-width: 100vw;
    min-height: calc(100vh - 60px);
    position: relative;
    overflow: hidden;
    display: grid;
    place-items: center;
`
const MainImage = styled(motion.img)`
    height: calc(100vh - 60px);
    position: absolute;
    right: 0;
`
const MainText = styled(motion.h1)`
    position: relative;
    right: 150px;
    font-size: 50px;
    color: white;
    text-shadow: 0 0 10px black;
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
            <MainDiv>
                <MainImage 
                initial={{ translateX: 600, opacity: 0}}
                animate={{ translateX: 0, opacity: 1}}
                transition={{duration: 1.5}}
                src="images/image_1.png"/>
                <MainText 
                initial={{ translateY: 200, opacity: 0}}
                animate={{ translateY: 0, opacity: 1}}
                transition={{delay: 0.5, duration: 1.5}}>
                    Ubica, conéctate, navega: <br/>
                    Encuentra tu zona WiFi más cercana
                </MainText>

            </MainDiv>
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
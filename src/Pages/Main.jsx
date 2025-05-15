import React from "react";
import styled from "styled-components";
import { motion } from "motion/react";
import { useEffect } from "react";

const MainDiv = styled(motion.div)`
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
    @media(max-width: 500px){
        right: -220px;
    }
`
const MainText = styled(motion.h1)`
    position: relative;
    width: 800px;
    padding: 30px;
    font-size: 50px;
    color: white;
    text-shadow: 0 0 10px black;
    @media (max-width: 830px){
        width: 90%;
        top: 150px;
        font-size: 35px;

    }
`

export default function Main ({setHeaderVisible}){


    

    useEffect(() => {
        setHeaderVisible(true)
      }, [setHeaderVisible]);



    return(
        <MainDiv
        exit={{translateY: -300, opacity: 0 }}
        transition={{duration: 1}}>
            <MainImage 
            initial={{ translateX: 600, opacity: 0}}
            animate={{ translateX: 0, opacity: 1}}
            transition={{duration: 1.5}}
            src="images/image_1.png"/>
            <MainText 
            initial={{ translateY: 200, opacity: 0}}
            animate={{ translateY: 0, opacity: 1}}
            transition={{delay: 0.5, duration: 1.5}}>
                Ubica, conéctate, navega:
                Encuentra tu zona WiFi más cercana
            </MainText>
        </MainDiv>
    )
}
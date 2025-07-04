import { useEffect } from "react";
import styled from "styled-components";
import { motion } from "motion/react";
import { Link } from "react-router-dom";


const MotionDiv = styled(motion.div)`
    
    
`
const MainImage = styled(motion.img)`
    height: calc(100dvh - 60px);
    
`
const ParkDiv = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
`
const GlassDiv = styled.div`
    width: 570px;
    height: 320px;
    backdrop-filter: blur(100px);
    border-radius: 20px;
    box-shadow: 0 0 3px rgba(255,255,255,0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    color: white;
    text-shadow: 2px 2px 2px rgba(0,0,0,0.2);
    position: relative;
    right: 200px;
`
const MapButton = styled.button`
    background-color: white;
    padding: 10px 20px;
    border-radius: 20px;
    text-decoration: none;
    color: #3A3A73;
    font-weight: bold;
`

export default function ParquesConectados ({setHeaderVisible}){

    useEffect(() => {
        setHeaderVisible(true)
      },[setHeaderVisible])

    return(
        <MotionDiv
                initial={{translateY: 160, opacity: 0}}
                animate={{translateY: 0, opacity: 1, transition: {delay: 1, duration: 1.5} }}
                exit={{translateY: 300, opacity: 0, transition: {duration: 0.7}}}>
            <ParkDiv>
                <GlassDiv>
                    <h1>
                        Parque Palo Blanco
                    </h1>
                    <h3>
                        Visita este parque en la parte alta de nuestra ciudad
                    </h3>
                    <Link to={"/zonas_wifi"}><MapButton>Ir al Mapa</MapButton></Link>
                </GlassDiv>
                <MainImage src="/images/parques/altobonito.png"/>
            </ParkDiv>
            <ParkDiv>
                <GlassDiv>
                    <h1>
                        Parque Palo Blanco
                    </h1>
                    <h3>
                        Visita este parque en la parte alta de nuestra ciudad
                    </h3>
                    <Link to={"/zonas_wifi"}><MapButton>Ir al Mapa</MapButton></Link>
                </GlassDiv>
                <MainImage src="/images/parques/altobonito.png"/>
            </ParkDiv>  
            <ParkDiv>
                <GlassDiv>
                    <h1>
                        Parque Palo Blanco
                    </h1>
                    <h3>
                        Visita este parque en la parte alta de nuestra ciudad
                    </h3>
                    <Link to={"/zonas_wifi"}><MapButton>Ir al Mapa</MapButton></Link>
                </GlassDiv>
                <MainImage src="/images/parques/altobonito.png"/>
            </ParkDiv>         
            
        </MotionDiv>
    )
}
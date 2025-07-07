import { useEffect } from "react";
import styled from "styled-components";
import { motion } from "motion/react";
import { Link } from "react-router-dom";


const MotionDiv = styled(motion.div)`
    
    
`

const ParkDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: calc(100dvh - 60px);
    align-items: center;
    background: url("/images/parques/altobonito.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
const ParkDiv2 = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100dvh;
    align-items: center;
    background: url("/images/parques/altobonito.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
const GlassDiv = styled.div`
    width: 570px;
    height: 320px;
    backdrop-filter: blur(5px);
    border-radius: 20px;
    box-shadow: 0 0 5px rgba(255,255,255,0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    color: white;
    text-shadow: 2px 2px 2px rgba(0,0,0,0.2);
    position: relative;
    left: 10%;
    @media (max-width: 850px){
        width: 80%;
        left: initial;
        top: 20%;
    }
    
`
const MapButton = styled.button`
    background-color: white;
    border: none;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.3);
    padding: 12px 50px;
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
            </ParkDiv>
                 
            <ParkDiv2>
                <GlassDiv>
                    <h1>
                        Parque Palo Blanco
                    </h1>
                    <h3>
                        Visita este parque en la parte alta de nuestra ciudad
                    </h3>
                    <Link to={"/zonas_wifi"}><MapButton>Ir al Mapa</MapButton></Link>
                </GlassDiv>
            </ParkDiv2>
            
        </MotionDiv>
    )
}
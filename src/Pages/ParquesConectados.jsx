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
    background: url("/images/parques/altobonito.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
const ParkDiv2 = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: calc(100dvh - 60px);
    align-items: center;
    background: url("/images/parques/revolucion.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
const ParkDiv3 = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: calc(100dvh - 60px);
    align-items: center;
    background: url("/images/parques/santa_barbara.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
const ParkDiv4 = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: calc(100dvh - 60px);
    align-items: center;
    background: url("/images/parques/fuenmayor.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
const ParkDiv5 = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: calc(100dvh - 60px);
    align-items: center;
    background: url("/images/parques/maria_luisa.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
const ParkDiv6 = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: calc(100dvh - 60px);
    align-items: center;
    background: url("/images/parques/palo_blanco.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
const ParkDiv7 = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: calc(100dvh - 60px);
    align-items: center;
    background: url("/images/parques/merced.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
const ParkDiv8 = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: calc(100dvh - 60px);
    align-items: center;
    background: url("/images/parques/angeles.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
const GlassDiv = styled.div`
    width: 570px;
    height: 320px;
    backdrop-filter: blur(2px);
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
                        Ubicado en el norte de Buga, rodeado de zonas residenciales y vegetación. Espacio tranquilo con buena vista hacia los barrios altos.
                    </h3>
                    <Link to={"/zonas_wifi"}><MapButton>Ir al Mapa</MapButton></Link>
                </GlassDiv>
            </ParkDiv>
                 
            <ParkDiv2>
                <GlassDiv>
                    <h1>
                        Parque La Revolucion
                    </h1>
                    <h3>
                        Conectado a los barrios Santa Bárbara y La Magdalena, es un punto amplio con senderos y sombra natural.
                    </h3>
                    <Link to={"/zonas_wifi"}><MapButton>Ir al Mapa</MapButton></Link>
                </GlassDiv>
            </ParkDiv2>

            <ParkDiv3>
                <GlassDiv>
                    <h1>
                        Parque Santa Barbara
                    </h1>
                    <h3>
                        Histórico parque del barrio del mismo nombre, famoso por su obelisco central y esculturas de leones.
                    </h3>
                    <Link to={"/zonas_wifi"}><MapButton>Ir al Mapa</MapButton></Link>
                </GlassDiv>
            </ParkDiv3>

            <ParkDiv4>
                <GlassDiv>
                    <h1>
                        Parque Fuenmayor
                    </h1>
                    <h3>
                        Plazoleta abierta con árboles y senderos. Está en un cruce clave de vías residenciales del suroccidente.
                    </h3>
                    <Link to={"/zonas_wifi"}><MapButton>Ir al Mapa</MapButton></Link>
                </GlassDiv>
            </ParkDiv4>

            <ParkDiv5>
                <GlassDiv>
                    <h1>
                        Parque Maria Luisa
                    </h1>
                    <h3>
                        Pequeño parque arbolado rodeado de viviendas. Es punto de encuentro en el barrio del mismo nombre.
                    </h3>
                    <Link to={"/zonas_wifi"}><MapButton>Ir al Mapa</MapButton></Link>
                </GlassDiv>
            </ParkDiv5>

            <ParkDiv6>
                <GlassDiv>
                    <h1>
                        Parque Palo Blanco
                    </h1>
                    <h3>
                        Espacio acogedor en un barrio tradicional. Ideal para caminatas cortas y descanso bajo los árboles.
                    </h3>
                    <Link to={"/zonas_wifi"}><MapButton>Ir al Mapa</MapButton></Link>
                </GlassDiv>
            </ParkDiv6>

            <ParkDiv7>
                <GlassDiv>
                    <h1>
                        Parque La Merced
                    </h1>
                    <h3>
                        A orillas del río Guadalajara, mezcla zonas verdes y senderos, cercano a centros educativos y de salud.
                    </h3>
                    <Link to={"/zonas_wifi"}><MapButton>Ir al Mapa</MapButton></Link>
                </GlassDiv>
            </ParkDiv7>

            <ParkDiv8>
                <GlassDiv>
                    <h1>
                        Parque Los Angeles
                    </h1>
                    <h3>
                        Espacio residencial y tranquilo al oriente de Buga. Muy frecuentado por vecinos del sector.
                    </h3>
                    <Link to={"/zonas_wifi"}><MapButton>Ir al Mapa</MapButton></Link>
                </GlassDiv>
            </ParkDiv8>
            
        </MotionDiv>
    )
}
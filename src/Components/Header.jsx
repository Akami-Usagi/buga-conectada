import react from "react";
import styled from "styled-components";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const HeaderDiv = styled(motion.div)`
    width: 100%;
    height: 60px;
    background-color: #3A3A73;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const HeaderIcon = styled.img`
    height: 50px;
`
const ButtonsDiv = styled.div`
    display: flex;
    gap: 20px;
`
const LinkButton = styled(Link)`
    background-color: white;
    padding: 10px 20px;
    border-radius: 20px;
    text-decoration: none;
    color: #3A3A73;
    font-weight: bold;
`

export default function Header(){
    return(
        <HeaderDiv
            initial={{translateY: -60}}
            animate={{translateY: 0}}
            transition={{delay: 1, duration: 1}}>

                <HeaderIcon src="images/buga_conectada_logo.svg" alt="Buga Conectada"/>
                <ButtonsDiv>
                    <LinkButton >Parques Conectados</LinkButton>
                    <LinkButton >Centros de Transformacion</LinkButton>
                    <LinkButton >Mapa de Conectividad</LinkButton>
                </ButtonsDiv>

        </HeaderDiv>
    )
};
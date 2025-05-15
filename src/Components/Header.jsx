import React from "react";
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
    flex-wrap: wrap;
    gap: 20px;
    @media(max-width: 500px){
        display: none;
    }
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

                <Link to={"/inicio"}><HeaderIcon src="images/buga_conectada_logo.svg" alt="Buga Conectada"/></Link>
                <ButtonsDiv>
                    <LinkButton to={"/parques_conectados"}>Parques Conectados</LinkButton>
                    <LinkButton >Centros de Transformacion</LinkButton>
                    <LinkButton to={"/zonas_wifi"}>Mapa de Conectividad</LinkButton>
                </ButtonsDiv>

        </HeaderDiv>
    )
};
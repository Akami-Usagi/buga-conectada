import React from "react";
import styled from "styled-components";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";

const HeaderDiv = styled(motion.div)`
    position: sticky;
    top: 0;
    z-index: 999;
    width: 100%;
    min-height: 60px;
    max-height: fit-content;
    background-color: #3A3A73;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media(max-width: 900px){
        justify-content: space-between;
    }
`
const HeaderIcon = styled.img`
    height: 50px;
    @media(max-width: 900px){
        position: relative;
        left: 30px;
    }
`
const ButtonsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    @media(max-width: 900px){
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
const MenuImage = styled.img`
        width: 40px;
        display: none;
        transition: ease-in-out 200ms;
        @media (max-width: 900px){
            display: block;
            position: relative;
            right: 30px;
        }
    `

export default function Header(){

    const [menuOpen, setMenuOpen] = useState(false);

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
                {menuOpen ? <MenuImage src="/icons/menu_open.svg" onClick={()=> setMenuOpen(!menuOpen)}/> : <MenuImage src="/icons/menu_closed.svg" onClick={()=> setMenuOpen(!menuOpen)}/>}
                {menuOpen && <HeaderMenu setMenuOpen={setMenuOpen}/>}

        </HeaderDiv>
    )
};
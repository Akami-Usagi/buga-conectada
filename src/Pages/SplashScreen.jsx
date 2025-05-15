import react from "react";
import styled from "styled-components";
import { motion } from "motion/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logo = styled(motion.img)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 350px;
    @media(max-width: 500px){
        width: 300px;
        
    }
`
export default function SplashScreen (){

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
          navigate("/");
        }, 1500);
    
        return () => clearTimeout(timer);
    },[navigate]);

    return (
        <Logo
            key={"logo"}
            initial={{ scale: 0, opacity: 0}}
            animate={{ scale: 1, opacity: 1}}
            transition={{duration: 1}}
            exit={{translateY: -100, opacity: 0 }}
            
            src="images/buga_conectada_logo.svg" alt="Buga Conectada" />
    )
}
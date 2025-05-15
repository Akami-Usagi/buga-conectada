import { useEffect } from "react";
import styled from "styled-components";
import { motion } from "motion/react";


const MotionDiv = styled(motion.div)`
    
`

export default function ParquesConectados ({setHeaderVisible}){

    useEffect(() => {
        setHeaderVisible(true)
      },[setHeaderVisible])

    return(
        <MotionDiv
                initial={{translateY: 160, opacity: 0}}
                animate={{translateY: 0, opacity: 1, transition: {delay: 1, duration: 1.5} }}
                exit={{scale: 0, opacity: 0, transition: {duration: 0.7}}}>
            hola parques
        </MotionDiv>
    )
}
import React from 'react';
import styled from 'styled-components';

// Styled-components para el contenedor de la tarjeta
const CardContainer = styled.div`
    width: 270px;
    height: 200px;
    background-color: #f8f8f8;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const CardTitle = styled.h3`
    font-weight: bold;
    margin-bottom: 8px;
    text-align: center;
`;
const CardContent = styled.h2`
    color: #fff;
    position: absolute;
    font-weight: bold;
    text-align: center;
    text-shadow: 4px 4px 4px rgba(0,0,0,1);
`;
const ImageContainer = styled.div`
    width: 100%;
    height: 150px;
    display: grid;
    place-items: center;
    overflow: hidden;
    border-radius: 8px;
`
const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
`;

const ZonaCard = ({zona}) => {
    return (
        <CardContainer>
            <ImageContainer>
                <CardImage src={zona.image} alt={zona.nombre}/>
                <CardContent>{zona.enabled ? "Conexión Activa" : "Sin Conexión"}</CardContent>
            </ImageContainer>
            <CardTitle>{zona.nombre}</CardTitle>
            
        </CardContainer>
    );
};

export default ZonaCard;
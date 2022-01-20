import React from "react";
import { Container } from "./styles";

export function CardHome ({image, title}) {
    return(
        <Container>
            <img src={image} alt='imagem' />
            <p>
                {title}
            </p>
        </Container>
    )
}
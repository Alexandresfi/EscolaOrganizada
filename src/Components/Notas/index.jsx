import React from "react";

import { Link } from "react-router-dom";
import { List, Container } from "./styles"
import Education_1 from "../../assects/Education_1.png"
import Education_2 from "../../assects/Education_2.png"
import Education_3 from "../../assects/Education_3.png"

export function CardNotas() {
    const infoCards = [
        { 
            link: '/education-1',
            title: 'Ensino Fundamental 1',
            image: Education_1 
        },
        { 
            link: '/education-2',
            title: 'Ensino Fundamental 2',
            image: Education_2
        },
        { 
            link: '/education-3',
            title: 'Ensino Médio',
            image: Education_3
        }
    ]
    return(
        <nav>
            <List>
                {infoCards?.map((infoCard, index)=>(
                    <li key={index}>
                        <Link to={infoCard.link}>
                            <Container>
                            <img src={infoCard.image} alt='imagem' />
                            <p>
                                {infoCard.title}
                            </p>
                            </Container>
                        </Link>
                    </li>
                ))}
            </List>
        </nav>
    )
}
import React from "react";
import { List } from "./styles";
import { Link } from "react-router-dom";
import { ClassCards } from "../../ClassCards";

export function Education_3 () {
    const infoClassCards = [
        { 
            link: '/frist-serie',
            title: '1ª Série',
            classes: ['a', 'b', 'c']
        },
        { 
            link: '/second-serie',
            title: '2ª Série',
            classes: ['a', 'b']
        },
        { 
            link: '/thirs-serie',
            title: '3ª Série',
            classes: ['a', 'b']
        },
    ]
    return(
        <nav>
            <List>
                {infoClassCards?.map((infoCard, index)=>(
                    <li key={index}>
                        <Link to={infoCard.link}>
                            <ClassCards year={infoCard.title} schoolClass={infoCard.classes} />
                        </Link>
                    </li>
                ))}
            </List>
        </nav>
    )
}
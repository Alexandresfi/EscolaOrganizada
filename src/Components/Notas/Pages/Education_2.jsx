import React from "react";
import { List } from "./styles";
import { Link } from "react-router-dom";
import { ClassCards } from "../../ClassCards";


export function Education_2 () {
    const infoClassCards = [
        {   
            link: '/fivity-year',
            title: '5º Ano',
            classes: ['a', 'b', 'c', 'd']
        },
        { 
            link: '/sixth-year',
            title: '6º Ano',
            classes: ['a', 'b', 'c', 'd']
        },
        { 
            link: '/seventh-year',
            title: '7º Ano',
            classes: ['a', 'b', 'c', 'd']
        },
        { 
            link: '/eighth-year',
            title: '8º Ano',
            classes: ['a', 'b', 'c', 'd']
        },
        { 
            link: '/nineth-year',
            title: '9º Ano',
            classes: ['a', 'b', 'c', 'd']
        }
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
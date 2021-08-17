import React  from "react";
import { AreaHeader } from "./styled";

export default function Header(){
    return(
        <AreaHeader>
            <nav>
                <ul>
                    <li>
                        Desenvolvedor: Alexandre Nascimento
                    </li>

                    <li> <a href="https://www.linkedin.com/in/alexandre-nascimento-66692920a/">
                        <img src='/fundos/linkedin.png' alt="linkedin"/></a> </li>

                    <li> <a href="https://github.com/Alexandresfi">
                        <img src="/fundos/github.png" alt="github"/> </a> </li>
                </ul>
            </nav>
            <h2> Escola Organizada Sistema de Ensino</h2>
        </AreaHeader>
    )
}
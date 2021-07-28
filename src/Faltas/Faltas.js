import React from "react";
import { Link } from "react-router-dom";
import Alunos from "./Alunos";
import { AreaDeTabelas } from "./styled";
import Header from "../Header/Header"




export default function Faltas (props){
    

    return(
        <>
        <Header/>
        <AreaDeTabelas>
            <p>Olá, por favor, marque apenas as pessoas que faltaram as suas aulas, basta clicar no retangulo no espaço
                das faltas.</p>

            <table>
                <tr>
                    <td>Número</td>
                    <td>Estudantes</td>
                    <td>Faltas</td>
                </tr>
                <Alunos/>
                
            </table>
            <button>Salvar</button>
            <button><Link to="frequencia">Salvar e Voltar</Link> </button>
        </AreaDeTabelas>
        </>
    )
}
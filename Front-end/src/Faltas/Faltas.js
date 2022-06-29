import React from "react";
import { Link } from "react-router-dom";
import Alunos from "./Alunos";
import { AreaDeTabelas } from "./styled";

export default function Faltas (props){
    

    return(
        <AreaDeTabelas>
            <p>Olá, por favor, marque apenas as pessoas que faltaram as suas aulas, basta clicar no retangulo no espaço
                das faltas.</p>

            <table>
                <tbody>
                 <tr>
                    <td>Número</td>
                    <td>Estudantes</td>
                    <td>Faltas</td>
                    </tr>
                <Alunos/>
                </tbody>
            </table>
            <button>Salvar</button>
            <button><Link to="frequencia">Salvar e Voltar</Link> </button>
        </AreaDeTabelas>
    )
}
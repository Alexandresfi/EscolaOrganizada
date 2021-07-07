import React from "react";
import { Link } from "react-router-dom";

export default function Faltas (){
    return(
        <div>
            <h1>Escola Organizada sistema de ensino</h1>
            <p>Olá, por favor, marque apenas as pessoas que faltaram as suas aulas, basta clicar no retangulo no espaço
                das faltas.</p>

            <table>
                <tr>
                    <td>Número</td>
                    <td>Estudantes</td>
                    <td>Faltas</td>
                </tr>
            </table>
            <button>Salvar</button>
            <button><Link to="frequencia">Salvar e Voltar</Link> </button>
        </div>
    )
}
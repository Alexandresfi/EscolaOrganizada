import React from "react"
import { Link } from "react-router-dom"
import { AreaDeTabelas } from "../Faltas/styled"
import RelatorioAluno from "./RelatorioAluno"
import Header from "../Header/Header"


export default function Relatorio (){
    return(
        <section>
        <Header/>
        <AreaDeTabelas>
            <p>Relátorio de notas</p>
            <table>
                <tbody>
                    <tr>
                        <td>Número</td>
                        <td>Estudantes</td>
                        <td>Nota 1º TRI</td>
                        <td>Nota 2º TRI</td>
                        <td>Nota 3º TRI</td>
                        <td>Média</td>
                        <td>Final</td>
                        <td>Média Final</td>
                    </tr>
                    <RelatorioAluno/>
                </tbody>
            </table>
            <button>Gerar Planilha</button>
            <button><Link to="/menu">Voltar</Link></button>
        </AreaDeTabelas>

        </section>
    )
}
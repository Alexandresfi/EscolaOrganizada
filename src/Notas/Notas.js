import React from "react"
import { Link } from "react-router-dom"
import Header from "../Header/Header"
import { AreaDeTabelas } from "../Faltas/styled"
import NotasAluno from "./NotasAluno"

export default function Notas (){
    return(
        <>
        <Header/>
        <AreaDeTabelas>
            <p>Selecione o trimestre</p>

            <select name="trimestre">
                <option value="Selecione">Selecione</option>
                <option value="1°">1° trimestre</option>
                <option value="2°">2° trimestre</option>
                <option value="3°">3° trimestre</option>
            </select>

            <div>

                <table>
                    <tbody>
                        <tr>
                            <td>Número</td>
                            <td>Estudantes</td>
                            <td>Nota 1</td>
                            <td>Nota 2</td>
                            <td>Nota 3</td>
                            <td>Média</td>
                        </tr>
                        <NotasAluno/>
                    </tbody>
                </table>
                <button>Salvar</button>
                <button> <Link to="/menu"> Salvar e Voltar</Link></button>
            </div>
        </AreaDeTabelas>
        </>
    )
}
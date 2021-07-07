import React from "react"
import { Link } from "react-router-dom"

export default function Notas (){
    return(
        <section>
             <h1>Escola Organizada sistema de ensino </h1>
            <p>Selecione o trimestre</p>

            <select name="trimestre">
                <option value="Selecione">Selecione</option>
                <option value="1°">1° trimestre</option>
                <option value="2°">2° trimestre</option>
                <option value="3°">3° trimestre</option>
            </select>

            <div class="notas" id="notas1">

                <table class="alunos" id="notasT">
                    <tr>
                        <td>Número</td>
                        <td>Estudantes</td>
                        <td>Nota 1</td>
                        <td>Nota 2</td>
                        <td>Nota 3</td>
                        <td>Média</td>
                    </tr>

                </table>
                <button>Salvar</button>
                <button> <Link to="/menu"> Salvar e Voltar</Link></button>
            </div>
        </section>
    )
}
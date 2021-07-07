import React from "react"
import { Link } from "react-router-dom"

export default function Relatorio (prosp){
    return(
        <section>
        <div>
             <h1>Escola Organizada sistema de ensino</h1>
            <p>Relátorio de notas</p>
            <table>

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


            </table>
            <button>Gerar Planilha</button>
            <button><Link to="/menu">Voltar</Link></button>
        </div>

        </section>
    )
}
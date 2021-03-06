import React, { useContext } from "react";
import { AlunoContext } from "../AlunoContext/alunoContext";



export default function RelatorioAluno(){
    
    const [alunos] = useContext(AlunoContext)

    return(
        <>    
            {alunos.map(aluno=>{
                return(
                    <tr>
                    <td> {alunos.indexOf(aluno)+1} </td>
                    <td>{aluno}</td>
                    <td> <input type="number" name ="nota 1° Tri" placeholder="nota 1° Tri" className="notasR"/> </td>
                    <td> <input type="number" name ="nota 2° Tri" placeholder="nota 2° Tri" className="notasR"/> </td>
                    <td> <input type="number" name ="nota 3° Tri" placeholder="nota 3° Tri" className="notasR"/> </td>
                    <td> <input type="number" name ="media" placeholder="média" className="notasR"/> </td>
                    <td> <input type="number" name ="final" placeholder="Final" className="notasR"/> </td>
                    <td> <input type="number" name ="media final" placeholder="média final" className="notasR"/> </td>
                    </tr>
                )
                })}          
        </>
    )
}

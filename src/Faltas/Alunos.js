import React, { useContext } from "react";
import { AlunoContext } from "../AlunoContext/alunoContext";


export default function Alunos(){

    const [alunos] = useContext(AlunoContext)

    return(
        <>
            {alunos.map((aluno, index)=>{
                return(
                    <tr key={index}>
                    <td> {alunos.indexOf(aluno)+1} </td>
                    <td>{aluno}</td>
                    <td> <input type="checkbox"  name="faltas"/> </td>
                    </tr>
                )
                })}          
        </>
    )
}
import React from "react";
import { Teste} from "../Cadastrar/Cadastrar";


export default function Alunos(){

    return(
        <>
            {Teste.map((aluno, index)=>{
                return(
                    <tr key={index}>
                    <td> {Teste.indexOf(aluno)+1} </td>
                    <td>{aluno}</td>
                    <td> <input type="checkbox"  name="faltas"/> </td>
                    </tr>
                )
                })}          
        </>
    )
}

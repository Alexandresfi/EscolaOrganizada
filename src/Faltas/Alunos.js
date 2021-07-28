import React from "react";
import { Teste} from "../Cadastrar/Cadastrar";


export default function Alunos(props){

    return(
        <>
            {Teste.map(aluno=>{
                return(
                    <tr>
                    <td> {Teste.indexOf(aluno)+1} </td>
                    <td>{aluno}</td>
                    <td> <input type="checkbox"  name="faltas"/> </td>
                    </tr>
                )
                })}          
        </>
    )
}
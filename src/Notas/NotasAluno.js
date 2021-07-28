import React from "react";
import { Teste } from "../Cadastrar/Cadastrar";


export default function NotasAluno(props){

    return(
        <>
                    
            {Teste.map(aluno=>{
                return(
                    <tr>
                    <td> {Teste.indexOf(aluno)+1} </td>
                    <td>{aluno}</td>
                    <td> <input type="number" name ="nota 1" placeholder="nota 1" className="notas"/> </td>
                    <td> <input type="number" name ="nota 2" placeholder="nota 2" className="notas"/> </td>
                    <td> <input type="number" name ="nota 3" placeholder="nota 3" className="notas"/> </td>
                    <td> <input type="number" name ="media" placeholder="média" className="notas"/> </td>
                    </tr>
                )
                })}
                    
        </>
    )
}
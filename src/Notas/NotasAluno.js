import React, { useContext} from "react";
import { AlunoContext } from "../AlunoContext/alunoContext";


export default function NotasAluno(props){
    
    const [alunos] = useContext(AlunoContext);
    

    return(
        <>
            
            {alunos.map((aluno,index)=>{
                return(
                    <tr key={index}>
                    <td> {alunos.indexOf(aluno)+1} </td>
                    <td>{aluno}</td>
                    <td> <input type="number" min="0" max= "10" name ="nota 1" placeholder="nota 1" className="notas"/> </td>
                    <td> <input type="number" min="0" max= "10" name ="nota 2" placeholder="nota 2" className="notas"/> </td>
                    <td> <input type="number" min="0" max= "10" name ="nota 3" placeholder="nota 3" className="notas"/> </td>
                    <td> <input type="number" min="0" max= "10" name ="media" placeholder="média" className="notas"/> </td>
                    </tr>
                )
                })}
                    
        </>
    )
}
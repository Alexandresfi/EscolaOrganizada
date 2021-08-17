import React, {useState, createContext} from "react";

export const AlunoContext = createContext();

export function AlunoProvider(props) {
    const [alunos,setAlunos] = useState([]);
    

    return(
        <AlunoContext.Provider value={[alunos,setAlunos]}>
            {props.children}
        </AlunoContext.Provider>
    )
}


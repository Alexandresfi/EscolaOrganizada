import React from "react";
import { Link } from "react-router-dom";
import { AreaCadastro, AreaFrquencia, AreaNotas, AreaRelatorio,Secao} from "../links/styled";
import Ca from "../links/Ca";
import Frequencia from "../links/Freq";
import No from "../links/No";
import Rela from "../links/Rela"


function Menu (){
    return(

        <Secao>

            <AreaCadastro>
                <Link to="cadastrar">
                    <Ca/>
                </Link>
            </AreaCadastro>
            
            <AreaFrquencia>
                <Link to ="frequencia">
                    <Frequencia name="Cadastrar/Editar Conteúdo/Frequêcia"/>
             </Link>
            </AreaFrquencia>
            
            <AreaNotas>
                <Link to ="notas">
                    <No name="Cadastrar/Editar Notas"/>
                </Link>
            </AreaNotas>

            <AreaRelatorio>
                <Link to="relatorio">
                    <Rela/>
                </Link>
            </AreaRelatorio>
            
            

            <button><Link to="/"> Sair</Link></button>
        </Secao>

    )
}

export default Menu;
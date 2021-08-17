import React from "react";
import { Link } from "react-router-dom";
import { AreaCadastro, AreaFrquencia, AreaNotas, AreaRelatorio,Butao,Secao} from "../links/styled";
import Ca from "../links/Ca";
import Frequencia from "../links/Freq";
import No from "../links/No";
import Rela from "../links/Rela"
import Header from "../Header/Header";


function Menu (){
    return(

        <>
        <Header/>
        <Secao>
            <Link to="cadastrar">
                <AreaCadastro>
                    <Ca/>
                </AreaCadastro>
            </Link>
            
            <Link to ="frequencia">
                 <AreaFrquencia>
                    <Frequencia name="Cadastrar/Editar Conteúdo/Frequêcia"/>
                </AreaFrquencia>
            </Link>
            
            <Link to ="notas">
                <AreaNotas>
                    <No name="Cadastrar/Editar Notas"/>
                </AreaNotas>
            </Link>

            
            <Link to="relatorio">
                <AreaRelatorio>
                    <Rela/>
                </AreaRelatorio>
            </Link>
            
        </Secao>
        <Butao><Link to="/"> Sair</Link></Butao>
        </>
    )
}

export default Menu;
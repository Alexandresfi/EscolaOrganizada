import React from "react";
import { Link } from "react-router-dom";
import { AreaCadastro, AreaFrquencia, AreaNotas, AreaRelatorio, Secao } from "../links/styled";
import Ca from "../links/Ca";
import Frequencia from "../links/Freq";
import No from "../links/No";
import Rela from "../links/Rela"

function Menu() {
    return (
        <Secao>
            <Link to="cadastrar">
                <AreaCadastro>
                    <Ca />
                </AreaCadastro>
            </Link>

            <Link to="frequencia">
                <AreaFrquencia>
                    <Frequencia name="Cadastrar/Editar Conteúdo/Frequêcia" />
                </AreaFrquencia>
            </Link>

            <Link to="notas">
                <AreaNotas>
                    <No name="Cadastrar/Editar Notas" />
                </AreaNotas>
            </Link>


            <Link to="relatorio">
                <AreaRelatorio>
                    <Rela />
                </AreaRelatorio>
            </Link>

        </Secao>
    )
}

export default Menu;
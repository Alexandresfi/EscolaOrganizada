import React from "react";
import { FormControlLabel, Switch } from "@material-ui/core";
import { Container, H1 } from "./styles";
import { Registration } from "./Registration";

export function Teacher() {

    const [typeAction, setTypeAction] = React.useState({
        create: true,
        update: false,
    })

    return (
        <Container>
            {typeAction.create && <H1>Cadastro de Professores</H1>}
            {typeAction.update && <H1>Remover turma de professor ou o professor</H1>}
            <div>
                <FormControlLabel
                    control={<Switch />}
                    label='Cadastrar professor'
                    checked={typeAction.create}
                    onClick={()=> setTypeAction({
                        create: true,
                        update: false,
                    })}
                />

                <FormControlLabel
                    control={<Switch />}
                    label='Remover'
                    checked={typeAction.update}
                    onClick={()=> setTypeAction({
                        create: false,
                        update: true,
                    })}
                />
            </div>
            {typeAction.create && <Registration/> }
            
        </Container>
    )
}
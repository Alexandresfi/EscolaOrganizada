import React, { useState } from 'react'

import { FormControlLabel, Switch } from '@material-ui/core'

import { RegistrationParents } from '../../Registration'
import { Container, H1 } from '../../styles'
import { DeleteParents } from './DeleteParents'

export function Parent() {
  const [typeAction, setTypeAction] = useState({
    create: true,
    update: false
  })

  return (
    <Container>
      {typeAction.create && <H1>Cadastrar Responsáveis</H1>}
      {typeAction.update && <H1>Deletar Responsáveis</H1>}
      <div>
        <FormControlLabel
          control={<Switch />}
          label="Cadastrar"
          checked={typeAction.create}
          onClick={() =>
            setTypeAction({
              create: true,
              update: false
            })
          }
        />

        <FormControlLabel
          control={<Switch />}
          label="Deletar"
          checked={typeAction.update}
          onClick={() =>
            setTypeAction({
              create: false,
              update: true
            })
          }
        />
      </div>
      {typeAction.create && <RegistrationParents />}
      {typeAction.update && <DeleteParents />}
    </Container>
  )
}

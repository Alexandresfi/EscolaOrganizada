import React, { useState } from 'react'

import { FormControlLabel, Switch } from '@material-ui/core'

import { DeleteTeacher } from './DeleteTeacher'
import { Registration } from '../../Registration'
import { Container, H1 } from '../../styles'

export function Teacher() {
  const [typeAction, setTypeAction] = useState({
    create: true,
    update: false
  })

  return (
    <Container>
      {typeAction.create && <H1>Cadastrar Professores</H1>}
      {typeAction.update && <H1>Deletar Professores</H1>}
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
      {typeAction.create && <Registration />}
      {typeAction.update && <DeleteTeacher />}
    </Container>
  )
}

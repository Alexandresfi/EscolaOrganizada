import React, { useState } from 'react'

import { FormControlLabel, Switch } from '@material-ui/core'

import { Container, H1 } from '../../styles'
import { UpdateClass } from './UpdateClass'
import { UpdateData } from './UpdateData'

export function ContainerUpdateTeacher() {
  const [typeAction, setTypeAction] = useState({
    create: true,
    update: false
  })

  return (
    <Container>
      {typeAction.create && <H1>Informações Pessoais</H1>}
      {typeAction.update && <H1>Turmas</H1>}
      <div>
        <FormControlLabel
          control={<Switch />}
          label="Dados Pessoais"
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
          label="Turmas"
          checked={typeAction.update}
          onClick={() =>
            setTypeAction({
              create: false,
              update: true
            })
          }
        />
      </div>
      {typeAction.create && <UpdateData />}
      {typeAction.update && <UpdateClass />}
    </Container>
  )
}

import React, { useState } from 'react'

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core'
import EditIcon from '@mui/icons-material/Edit'
import { IconButton } from '@mui/material'

export function TablesNotas() {
  const [show, setShow] = useState(false)

  const [listStudantes] = useState([
    {
      id: 1,
      name: 'Alexandre Nascimento',
      grades: [10, 10, 9]
    },
    {
      id: 2,
      name: 'Isa Viviane',
      grades: [10, 9.5, 10]
    },
    {
      id: 3,
      name: 'Sara Silvana',
      grades: [7, 0, 0]
    },
    {
      id: 4,
      name: 'Damiana Cordeiro',
      grades: [9, 8, 7]
    }
  ])

  const media = array => {
    return array.reduce(function (acc, grades) {
      return acc + grades
    }, 0)
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="teacher in class">
          <TableHead>
            <TableRow>
              <TableCell align="center">Estudantes</TableCell>

              <TableCell align="center">1ª Nota</TableCell>

              <TableCell align="center">2ª Nota</TableCell>

              <TableCell align="center">3ª Nota</TableCell>

              <TableCell align="center">Média</TableCell>

              <TableCell align="center">Atualizar</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {listStudantes?.map(studant => (
              <TableRow key={studant.id}>
                <TableCell align="center">{studant.name}</TableCell>

                <TableCell align="center">{studant.grades[0]}</TableCell>

                <TableCell align="center">{studant.grades[1]}</TableCell>

                <TableCell align="center">{studant.grades[2]}</TableCell>

                <TableCell align="center">
                  {(media(studant.grades) / 3).toLocaleString()}
                </TableCell>

                <TableCell align="center">
                  <IconButton aria-label="edit" onClick={() => setShow(true)}>
                    <EditIcon color="primary" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={show}
        // onClose={handleClose}
        ria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          style={{ background: '#2b2d42', color: 'white', textAlign: 'right' }}
        >
          <p>Atualizar</p>
          <p>Notas</p>
        </DialogTitle>

        <DialogContent style={{ background: '#666666' }}>
          <Button onClick={() => setShow(false)}>Cancelar</Button>

          <Button onClick={() => setShow(false)}>Salvar</Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

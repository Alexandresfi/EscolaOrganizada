import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Fab,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'

import { apiEscola } from '../../../../services/api'

export function UpdateData() {
  const [show, setShow] = useState(false)
  //   const [teacherInfo, setTeacherInfo] = useState({
  //     id: null,
  //     fullname: '',
  //     school_class: [],
  //     school_subjects: [{ ano: '', turma: '' }]
  //   })

  const [teachersData, setTeachersData] = useState([{}])

  const loadTeacherData = () => {
    const existTeacher = localStorage.getItem('escolaOrganizada:teacherData')

    if (existTeacher) {
      setTeachersData(JSON.parse(existTeacher))
      return true
    } else {
      return false
    }
  }

  const getTeachersData = async () => {
    try {
      if (!loadTeacherData()) {
        const { status, data } = await toast.promise(
          apiEscola.get('teachers'),
          {
            pending: '🔎 Buscando informações'
          }
        )

        if (status === 200) {
          toast.success('Informações carregadas com sucesso 🔎')
          setTeachersData(data)
          await localStorage.setItem(
            'escolaOrganizada:teacherData',
            JSON.stringify(data)
          )
        } else {
          throw new Error()
        }
      }
    } catch (error) {
      toast.error('Falha no sistema! Tente novamente. 🤷‍♂️')
    }
  }

  useEffect(() => {
    getTeachersData()
  }, [])

  const handleClose = () => {
    setShow(false)
    // console.log(dataSeries)
  }

  // const createSerie = () => {}

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="teacher in class">
          <TableHead>
            <TableRow>
              <TableCell>Professor(a)</TableCell>

              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {teachersData?.map(teacher => (
              <TableRow key={teacher.id}>
                <TableCell>{teacher.fullname}</TableCell>

                <TableCell>
                  <Tooltip title="editar">
                    <Fab
                      size="small"
                      color="secondary"
                      aria-label="edit"
                      onClick={() => {
                        setShow(true)
                      }}
                    >
                      <EditIcon fontSize="small" />
                    </Fab>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={show}
        onClose={handleClose}
        ria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          style={{ background: '#2b2d42', color: 'white', textAlign: 'right' }}
        >
          <p>Professor(a)</p>
          <p>Editar Informações</p>
        </DialogTitle>

        <DialogContent style={{ background: '#666666' }}>
          <Button onClick={handleClose}>Cancelar</Button>

          <Button onClick={handleClose}>Salvar</Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

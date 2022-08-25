import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import {
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
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

import { apiEscola } from '../../../../services/api'

export function DeleteTeacher() {
  const [reload, setReload] = useState(false)
  const [teacherData, setTeacherData] = useState([{}])

  const loadTeacherData = () => {
    const existTeacher = localStorage.getItem('escolaOrganizada:teacherData')

    if (existTeacher) {
      setTeacherData(JSON.parse(existTeacher))
      return true
    } else {
      return false
    }
  }

  const getTeacherData = async () => {
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
          setTeacherData(data)
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
    getTeacherData()
  }, [reload])

  const deleteTeacher = async id => {
    try {
      const { status } = await toast.promise(
        apiEscola.delete(`teacher/${id}`),
        {
          pending: 'Deletando usuário'
        }
      )

      if (status) {
        toast.success('Usuário deletedo!')
        await localStorage.removeItem('escolaOrganizada:teacherData')
        setReload(t => !t)
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error('Falha no sistema! Tente novamente. 🤷‍♂️')
    }
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="teacher in class">
          <TableHead>
            <TableRow>
              <TableCell align="center">Professor(a)</TableCell>

              <TableCell align="center">Disciplinas</TableCell>

              <TableCell align="center">Anos e turmas</TableCell>

              <TableCell align="center">Remover</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {teacherData?.map(teacher => (
              <TableRow key={teacher.id}>
                <TableCell align="center">{teacher.fullname}</TableCell>

                <TableCell align="center">
                  {teacher.school_class?.map((subject, index) => (
                    <ul key={index}>
                      <li>{subject}</li>
                    </ul>
                  ))}
                </TableCell>

                <TableCell align="center">
                  {teacher.school_subjects?.map((serie, index) => (
                    <ul key={index}>
                      <li>{serie}</li>
                    </ul>
                  ))}
                </TableCell>

                <TableCell align="center">
                  <Tooltip title="deletar">
                    <Fab
                      size="small"
                      color="secondary"
                      aria-label="deletar"
                      onClick={() => {
                        deleteTeacher(teacher.id)
                      }}
                    >
                      <DeleteForeverIcon fontSize="small" />
                    </Fab>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

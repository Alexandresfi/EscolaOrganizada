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

import { UseParent } from '../../../../hooks/ParentsContext'
import { UseStudent } from '../../../../hooks/StudentsContext'
import { apiEscola } from '../../../../services/api'

export function DeleteParents() {
  const [reload, setReload] = useState(false)
  const { parentsData, setParentsData } = UseParent()
  const { studentsData, setStudentsData } = UseStudent()

  const getStudentsData = async () => {
    try {
      const { data } = await apiEscola.get('students')

      setStudentsData(data)
    } catch (error) {
      toast.error('Falha no sistema! Tente novamente. 🤷‍♂️')
    }
  }

  const getParentsData = async () => {
    try {
      const { status, data } = await toast.promise(apiEscola.get('users'), {
        pending: '🔎 Buscando informações'
      })

      if (status === 200) {
        toast.success('Informações carregadas com sucesso 🔎')
        getStudentsData()
        setParentsData(data)
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error('Falha no sistema! Tente novamente. 🤷‍♂️')
    }
  }

  const filtedStudents = parent => {
    const filterStudents = studentsData?.filter(
      student => student.responsible_id === parent
    )
    return filterStudents
  }

  useEffect(() => {
    getParentsData()
  }, [reload])

  const deleteParents = async (id, idStudent) => {
    const filterStudents = studentsData?.filter(
      student => student.responsible_id === idStudent
    )

    try {
      await apiEscola.delete(`student/${filterStudents[0]?.id}`)

      const { status } = await toast.promise(apiEscola.delete(`user/${id}`), {
        pending: 'Deletando usuário'
      })

      // await apiEscola.delete(`address/${parentsData.cpf_1}`) falta fazer este quando o banco de dados for limpado
      // lembrar da ordem de exclusão, primrio o estudante, depois o usuário e só depois o endereço.

      if (status) {
        toast.success('Usuário deletedo!')

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
              <TableCell align="center">Responsável 1</TableCell>

              <TableCell align="center">Responsável 2</TableCell>

              <TableCell align="center">Dependente(s)</TableCell>

              <TableCell align="center">Remover</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {parentsData?.map((parent, index) => (
              <TableRow key={index}>
                <TableCell align="center">{parent.responsible_1}</TableCell>

                <TableCell align="center">{parent.responsible_2}</TableCell>

                <TableCell align="center">
                  {filtedStudents(parent.email)?.map(student => (
                    <ul key={student.id}>
                      <li>{student.name}</li>
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
                        deleteParents(parent.id, parent.email)
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

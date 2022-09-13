import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import { UseStudent } from '../../../../../hooks/StudentsContext'
import { apiEscola } from '../../../../../services/api'
import { Row } from './Row'

export function TablePerClass() {
  const { studentsData, setStudentsData } = UseStudent()
  const [listStudents, setListStudents] = useState([])

  const getStudentsData = async () => {
    try {
      const { status, data } = await toast.promise(apiEscola.get('students'), {
        pending: '🔎 Buscando informações'
      })

      if (status === 200) {
        toast.success('Informações carregadas com sucesso 🔎')
        setStudentsData(data)
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error('Falha no sistema! Tente novamente. 🤷‍♂️')
    }
  }

  useEffect(() => {
    getStudentsData()
    filterTurma()
  }, [])

  const filterTurma = () => {
    const infoClass = JSON.parse(
      localStorage.getItem('escolaorganizada:filterTurma')
    )
    const filterStudents = studentsData?.filter(
      item =>
        item.year === parseInt(infoClass?.year?.substr(0, 1)) &&
        item.school_class === infoClass.schoolClass[0]
    )

    setListStudents(filterStudents)
  }

  return (
    <TableContainer
      component={Paper}
      style={{
        width: '98vw',
        margin: '20px auto'
      }}
    >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Estudantes</TableCell>
            <TableCell align="center">1º Trimestre</TableCell>
            <TableCell align="center">2º Trimestre</TableCell>
            <TableCell align="center">3º Trimestre</TableCell>
            <TableCell align="center">Média Anual</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {listStudents?.map((student, index) => (
            <Row key={index} student={student} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

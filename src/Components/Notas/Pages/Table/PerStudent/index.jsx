import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

import { UseStudent } from '../../../../../hooks/StudentsContext'
import { apiEscola } from '../../../../../services/api'

export function TablePerStudent() {
  const { studentsData, setStudentsData } = UseStudent()
  const [quarter, setQuarter] = useState('first_quarter')

  const [listStudents, setLitStudents] = useState([
    {
      id: 1,
      name: 'Alexandre Nascimento',
      grades: [
        {
          disciplina: 'Matemática',
          grades: {
            first_quarter: {
              nota_1: null,
              nota_2: null,
              nota_3: null
            }
          }
        }
      ]
    }
  ])

  useEffect(() => {
    studentsData.length < 1 && GETStudentsData()
    filterStudent()
  }, [studentsData])

  const filterStudent = () => {
    // const infoParent = JSON.parse(
    //   localStorage.getItem('escolaorganizada:userData')
    // )

    const findStudent = studentsData?.filter(
      item => item.responsible_id === 'alexandre.teste@hotmail.com'
    )

    setLitStudents(findStudent)
  }

  const GETStudentsData = async () => {
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

  return (
    <>
      <Box
        sx={{
          textAlign: 'center',
          marginTop: 10,
          fontWeight: 'bold',
          fontSize: '2rem'
        }}
      >
        Notas por Trimestre
      </Box>
      <FormControl>
        <InputLabel
          style={{
            paddingLeft: '15px',
            color: 'black',
            margin: '20px auto 0 30px'
          }}
        >
          Filtrar por Trimestre:
        </InputLabel>

        <Select
          id="type_acess"
          variant="outlined"
          value={quarter}
          style={{
            width: '210px',
            background: 'white',
            margin: '20px auto 0 30px'
          }}
          onChange={e => setQuarter(e.target.value)}
        >
          <MenuItem value="first_quarter"> 1º Trimestre </MenuItem>
          <MenuItem value="second_quarter"> 2º Trimestre </MenuItem>
          <MenuItem value="third_quarter"> 3º Trimestre </MenuItem>
        </Select>
      </FormControl>

      {listStudents?.map(student => (
        <>
          <Box sx={{ textAlign: 'center' }}>
            <span style={{ fontWeight: 'bold' }}> Estudante: </span>
            <span key={student.id}>{student.name}</span>
          </Box>

          <TableContainer
            component={Paper}
            style={{ maxWidth: '95%', margin: '20px auto' }}
          >
            <Table aria-label="class of students">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Disciplinas</TableCell>

                  <TableCell align="center">1ª Nota</TableCell>

                  <TableCell align="center">2ª Nota</TableCell>

                  <TableCell align="center">3ª Nota</TableCell>

                  <TableCell align="center">Média</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {student.grades?.map(subjects => (
                  <TableRow key={student.disciplina}>
                    <TableCell align="center">{subjects.disciplina}</TableCell>

                    <TableCell align="center">
                      {subjects?.grades?.[quarter]?.nota_1}
                      {subjects?.grades?.[quarter]?.nota_1 === null &&
                        'não atribuido'}
                    </TableCell>
                    <TableCell align="center">
                      {subjects?.grades?.[quarter]?.nota_2}
                      {subjects?.grades?.[quarter]?.nota_2 === null &&
                        'não atribuido'}
                    </TableCell>
                    <TableCell align="center">
                      {subjects?.grades?.[quarter]?.nota_3}
                      {subjects?.grades?.[quarter]?.nota_3 === null &&
                        'não atribuido'}
                    </TableCell>
                    <TableCell align="center">
                      {/* {(media(studant.grades?.[quarter]) / 3).toLocaleString()} */}
                      {(subjects?.grades?.[quarter]?.nota_1 +
                        +subjects?.grades?.[quarter]?.nota_2 +
                        subjects?.grades?.[quarter]?.nota_3) /
                        3}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ))}
    </>
  )
}

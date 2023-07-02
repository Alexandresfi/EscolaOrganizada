import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import {
  Box,
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
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material'

import { UseStudent } from '../../../../../hooks/StudentsContext'
import { apiEscola } from '../../../../../services/api'

export function TablePerQuarter() {
  const { studentsData, setStudentsData } = UseStudent()
  const [show, setShow] = useState(false)
  const [quarter, setQuarter] = useState('first_quarter')
  const [infoStudents, setInfoStudents] = useState({})

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
  const [reload, setReload] = useState(false)

  useEffect(() => {
    studentsData.length < 1 && GETStudentsData()
    filterTurma()
  }, [studentsData])

  useEffect(() => {}, [reload])

  const filterTurma = () => {
    const infoClass = JSON.parse(
      localStorage.getItem('escolaorganizada:filterTurma')
    )

    const filterStudents = studentsData?.filter(
      item =>
        item.year === parseInt(infoClass?.year?.substr(0, 1)) &&
        item.school_class === infoClass.schoolClass[0]
    )

    setLitStudents(filterStudents)
  }

  const findStudent = id => {
    const studentFined = listStudents.find(student => student.id === id)
    setInfoStudents(studentFined)
  }

  const handleChangeGrades = (grade, position, newGrade) => {
    grade[position] = parseFloat(newGrade)
    setInfoStudents(infoStudents)
    setReload(r => !r)
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

  const PUTStudent = async () => {
    try {
      const { status } = await toast.promise(
        apiEscola.put(
          `student/${infoStudents.id}`,
          {
            grades: infoStudents.grades
          },
          {
            validateStatus: () => true
          }
        ),
        { pending: 'Atualizando dados do Usuário 📄' }
      )

      if (status === 200) {
        toast.success('Dados atualizados com sucesso 📗')
        setReload(r => !r)
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error('Falha no sistema! Tente novamente 🤷‍♂️')
    }
  }

  return (
    <>
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

      <Box>
        Discicplina:{' '}
        <span style={{ textTransform: 'capitalize' }}>matemática</span>
      </Box>

      <TableContainer
        component={Paper}
        style={{ maxWidth: '95%', margin: '20px auto' }}
      >
        <Table aria-label="class of students">
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
            {listStudents?.map(studant => (
              <TableRow key={studant.id}>
                <TableCell align="center">{studant.name}</TableCell>

                <TableCell align="center">
                  {studant?.grades[0].grades?.[quarter]?.nota_1}
                  {studant?.grades[0].grades?.[quarter]?.nota_1 === null &&
                    'não atribuido'}
                </TableCell>

                <TableCell align="center">
                  {studant?.grades[0].grades?.[quarter]?.nota_2}
                  {studant?.grades[0].grades?.[quarter]?.nota_2 === null &&
                    'não atribuido'}
                </TableCell>

                <TableCell align="center">
                  {studant?.grades[0].grades?.[quarter]?.nota_3}
                  {studant?.grades[0].grades?.[quarter]?.nota_3 === null &&
                    'não atribuido'}
                </TableCell>

                <TableCell align="center">
                  {/* {(media(studant.grades.[quarter]) / 3).toLocaleString()} */}
                  {(studant?.grades[0].grades?.[quarter]?.nota_1 +
                    +studant?.grades[0].grades?.[quarter]?.nota_2 +
                    studant?.grades[0].grades?.[quarter]?.nota_3) /
                    3}
                </TableCell>

                <TableCell align="center">
                  <IconButton
                    aria-label="edit"
                    onClick={() => {
                      setShow(true)
                      findStudent(studant.id)
                    }}
                  >
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
          {infoStudents.grades?.map(grade => (
            <>
              {grade.disciplina === 'matemática' && grade.grades[quarter] && (
                <>
                  <TextField
                    id="grades 1"
                    label="1ª nota"
                    type="number"
                    placeholder="0 - 10"
                    value={grade.grades[quarter].nota_1}
                    onChange={e => {
                      handleChangeGrades(
                        infoStudents?.grades[0]?.grades?.[quarter],
                        'nota_1',
                        e.target.value
                      )
                    }}
                    style={{ color: 'white' }}
                  />

                  <br />

                  <TextField
                    id="grades 2"
                    label="2ª nota"
                    type="number"
                    placeholder="0 - 10"
                    value={grade.grades[quarter].nota_2}
                    onChange={e => {
                      handleChangeGrades(
                        infoStudents?.grades[0]?.grades?.[quarter],
                        'nota_2',
                        e.target.value
                      )
                    }}
                    style={{ color: 'white', margin: '20px 0' }}
                  />

                  <br />

                  <TextField
                    id="grades 3"
                    label="3ª nota"
                    type="number"
                    placeholder="0 - 10"
                    value={grade.grades[quarter].nota_3}
                    onChange={e => {
                      handleChangeGrades(
                        infoStudents?.grades[0]?.grades?.[quarter],
                        'nota_3',
                        e.target.value
                      )
                    }}
                    style={{ color: 'white' }}
                  />

                  <br />
                </>
              )}
            </>
          ))}

          <Button
            onClick={() => {
              setShow(false)
              setInfoStudents({})
            }}
          >
            Cancelar
          </Button>

          <Button
            onClick={() => {
              PUTStudent()
              setShow(false)
            }}
          >
            Salvar
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Fab,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'

import { apiEscola } from '../../../../services/api'
import { Ul } from '../../styles'
import { UseTeacher } from '../../../../hooks/TeacherContext'

export function UpdateClass() {
  const [show, setShow] = useState(false)
  const { teachersData, setTeachersData } = UseTeacher()
  const [reload, setReload] = useState(false)
  const [dataSeries, setDataSeries] = useState({
    id: null,
    school_class: [],
    school_subjects: []
  })
  const [settingData, setSettingData] = useState({
    isCreate: false,
    isUpdate: false
  })
  const [addSeries, setAddSeries] = useState({
    school_class: ' ',
    school_subjects: ' '
  })
  // conexão com banco de dados

  const getTeachersData = async () => {
    try {
      const { status, data } = await toast.promise(apiEscola.get('teachers'), {
        pending: '🔎 Buscando informações'
      })

      if (status === 200) {
        toast.success('Informações carregadas com sucesso 🔎')
        setTeachersData(data)
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error('Falha no sistema! Tente novamente. 🤷‍♂️')
    }
  }

  const PUTSerie = async id => {
    try {
      const { status } = await toast.promise(
        apiEscola.put(
          `teacher/${id}`,
          {
            school_class: dataSeries.school_class,
            school_subjects: dataSeries.school_subjects
          },
          {
            validateStatus: () => true
          }
        ),
        { pending: 'Atualizando dados do Usuário 📖' }
      )

      if (status === 200) {
        toast.success('Dados atualizados com sucesso 📗')
        setReload(t => !t)
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error('Falha no sistema! Tente novamente 🤷‍♂️')
    }
  }

  useEffect(() => {
    getTeachersData()
  }, [reload])

  // final da conexão

  const handleClose = () => {
    setShow(false)
    setSettingData({ ...settingData, isCreate: false, isUpdate: false })
  }

  const findSeries = id => {
    setDataSeries(teachersData.find(sala => sala.id === id))
  }

  // altualiza e deleta turmas

  const deleteSerie = turma => {
    const removedClass = dataSeries?.school_class?.filter(
      remove => remove !== turma
    )
    setDataSeries({ ...dataSeries, school_class: removedClass })
  }

  const updateClassDataFistPart = (turma, newturma) => {
    const index = dataSeries.school_class.findIndex(item => item === turma)

    dataSeries.school_class[index] = newturma + ' ' + turma.split(' ')[2]

    setDataSeries({
      ...dataSeries,
      school_class: dataSeries.school_class
    })
  }

  const updateClassDataSecondPart = (turma, newturma) => {
    const index = dataSeries.school_class.findIndex(item => item === turma)

    dataSeries.school_class[index] =
      turma.split(' ')[0] + ' ' + turma.split(' ')[1] + ' ' + newturma

    setDataSeries({
      ...dataSeries,
      school_class: dataSeries.school_class
    })
  }

  // atualiza e deleta disciplinas
  const deleteSubject = subject => {
    const removedSbuject = dataSeries.school_subjects?.filter(
      remove => remove !== subject
    )

    setDataSeries({ ...dataSeries, school_subjects: removedSbuject })
  }

  const updateSubject = (subject, newSbuject) => {
    const index = dataSeries.school_subjects.findIndex(item => item === subject)

    dataSeries.school_subjects[index] = newSbuject

    setDataSeries({
      ...dataSeries,
      school_subjects: dataSeries.school_subjects
    })
  }

  // criação de turmas e disciplicas
  const handleChangeClassFristPart = serie => {
    if (addSeries.school_class === ' ') {
      setAddSeries({ ...addSeries, school_class: serie })
    } else {
      addSeries.school_class = serie
      setAddSeries({ ...addSeries, school_class: serie })
    }
  }

  const handleChangeClassSecondPart = (serie, newSerie) => {
    if (addSeries.school_class === ' ') {
      setAddSeries({ ...addSeries, school_class: serie })
    } else if (addSeries.school_class.split(' ')[2]) {
      const serieEdit =
        addSeries.school_class.split(' ')[0] +
        ' ' +
        addSeries.school_class.split(' ')[1] +
        ' ' +
        serie

      setAddSeries({ ...addSeries, school_class: serieEdit })
    } else {
      const serieEnd = newSerie + ' ' + serie
      setAddSeries({ ...addSeries, school_class: serieEnd })
    }
  }

  const POSTCreateSeries = async id => {
    setDataSeries({
      ...dataSeries,
      school_class: [...dataSeries.school_class, addSeries.school_class],
      school_subjects: [
        ...dataSeries.school_subjects,
        addSeries.school_subjects
      ]
    })

    try {
      const { status } = await toast.promise(
        apiEscola.put(
          `teacher/${id}`,
          {
            school_class: [...dataSeries.school_class, addSeries.school_class],
            school_subjects: [
              ...dataSeries.school_subjects,
              addSeries.school_subjects
            ]
          },
          {
            validateStatus: () => true
          }
        ),
        { pending: 'Criando Turma 📑' }
      )

      if (status === 200) {
        toast.success('Turma Criada com sucesso 📚')
        await localStorage.removeItem('escolaOrganizada:teacherData')
        setReload(t => !t)
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error('Falha no sistema! Tente novamente 🤷‍♂️')
    }
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="teacher in class">
          <TableHead>
            <TableRow>
              <TableCell align="center">Professor(a)</TableCell>

              <TableCell align="center">Disciplina</TableCell>

              <TableCell align="center">Anos e turmas</TableCell>

              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {teachersData?.map(teacher => (
              <TableRow key={teacher.id}>
                <TableCell align="center">{teacher.surname}</TableCell>

                <TableCell align="center">
                  {teacher.school_subjects?.map((serie, index) => (
                    <ul key={index}>
                      <li style={{ textTransform: 'capitalize' }}>{serie}</li>
                    </ul>
                  ))}
                </TableCell>

                <TableCell align="center">
                  {teacher.school_class?.map((subject, index) => (
                    <ul key={index}>
                      <li>{subject}</li>
                    </ul>
                  ))}
                </TableCell>

                <TableCell align="center">
                  <Tooltip title="adicionar">
                    <Fab
                      size="small"
                      color="primary"
                      aria-label="add"
                      onClick={() => {
                        setShow(true)
                        setSettingData({ ...settingData, isCreate: true })
                        findSeries(teacher.id)
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Fab>
                  </Tooltip>{' '}
                  <Tooltip title="editar">
                    <Fab
                      size="small"
                      color="secondary"
                      aria-label="edit"
                      onClick={() => {
                        setShow(true)
                        setSettingData({ ...settingData, isUpdate: true })
                        findSeries(teacher.id)
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
          {settingData.isCreate && (
            <>
              <p>Professor(a)</p>
              <p>Adicionar turma</p>
            </>
          )}

          {settingData.isUpdate && (
            <>
              <p>Professor(a)</p>
              <p>Editar turmas</p>
            </>
          )}
        </DialogTitle>

        <DialogContent style={{ background: '#666666' }}>
          {settingData.isUpdate && (
            <>
              {dataSeries.school_class?.map((serie, index) => (
                <Ul key={index}>
                  <li>
                    <FormControl>
                      <InputLabel>Serie/Ano:</InputLabel>

                      <Select
                        className="width-small color"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={
                          serie?.split(' ')[0] + ' ' + serie?.split(' ')[1]
                        }
                        onChange={e => {
                          updateClassDataFistPart(serie, e.target.value)
                        }}
                      >
                        <MenuItem value="1º Ano"> 1º Ano </MenuItem>
                        <MenuItem value="2º Ano"> 2º Ano </MenuItem>
                        <MenuItem value="3º Ano"> 3º Ano </MenuItem>
                        <MenuItem value="4º Ano"> 4º Ano </MenuItem>
                        <MenuItem value="5º Ano"> 5º Ano </MenuItem>
                        <MenuItem value="6º Ano"> 6º Ano </MenuItem>
                        <MenuItem value="7º Ano"> 7º Ano </MenuItem>
                        <MenuItem value="8º Ano"> 8º Ano </MenuItem>
                        <MenuItem value="9º Ano"> 9º Ano </MenuItem>
                        <MenuItem value="1ª Serie"> 1ª Serie </MenuItem>
                        <MenuItem value="2ª Serie"> 2º Serie </MenuItem>
                        <MenuItem value="3ª Serie"> 3º Serie </MenuItem>
                      </Select>
                    </FormControl>
                  </li>

                  <li>
                    <FormControl>
                      <InputLabel>Turma:</InputLabel>

                      <Select
                        className="width-small"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={serie?.split(' ')[2]}
                        onChange={e => {
                          updateClassDataSecondPart(serie, e.target.value)
                        }}
                      >
                        <MenuItem value="A"> A </MenuItem>
                        <MenuItem value="B"> B </MenuItem>
                        <MenuItem value="C"> C </MenuItem>
                      </Select>
                    </FormControl>
                  </li>

                  {settingData.isUpdate && (
                    <Button
                      color="secondary"
                      onClick={() => {
                        deleteSerie(serie)
                      }}
                    >
                      {' '}
                      Remover classe{' '}
                    </Button>
                  )}
                </Ul>
              ))}

              {dataSeries.school_subjects?.map((subject, index) => (
                <Ul key={index}>
                  <TextField
                    label="Disciplina"
                    type="text"
                    value={subject}
                    onChange={e => {
                      updateSubject(subject, e.target.value)
                    }}
                  />

                  {settingData.isUpdate && (
                    <Button
                      color="secondary"
                      onClick={() => {
                        deleteSubject(subject)
                      }}
                    >
                      {' '}
                      Remover Disciplina{' '}
                    </Button>
                  )}
                </Ul>
              ))}
            </>
          )}

          {settingData.isCreate && (
            <>
              <Ul>
                <li>
                  <FormControl>
                    <InputLabel>Serie/Ano:</InputLabel>

                    <Select
                      className="width-small"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={
                        addSeries.school_class?.split(' ')[0] +
                        ' ' +
                        addSeries.school_class?.split(' ')[1]
                      }
                      onChange={e => handleChangeClassFristPart(e.target.value)}
                    >
                      <MenuItem value={'1º Ano'}> 1º Ano </MenuItem>
                      <MenuItem value={'2º Ano'}> 2º Ano </MenuItem>
                      <MenuItem value={'3º Ano'}> 3º Ano </MenuItem>
                      <MenuItem value={'4º Ano'}> 4º Ano </MenuItem>
                      <MenuItem value={'5º Ano'}> 5º Ano </MenuItem>
                      <MenuItem value={'6º Ano'}> 6º Ano </MenuItem>
                      <MenuItem value={'7º Ano'}> 7º Ano </MenuItem>
                      <MenuItem value={'8º Ano'}> 8º Ano </MenuItem>
                      <MenuItem value={'9º Ano'}> 9º Ano </MenuItem>
                      <MenuItem value={'1ª Serie'}> 1ª Serie </MenuItem>
                      <MenuItem value={'2ª Serie'}> 2ª Serie </MenuItem>
                      <MenuItem value={'3ª Serie'}> 3ª Serie </MenuItem>
                    </Select>
                  </FormControl>
                </li>

                <li>
                  <FormControl>
                    <InputLabel>Turma:</InputLabel>

                    <Select
                      className="width-small"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={addSeries.school_class?.split(' ')[2]}
                      onChange={e =>
                        handleChangeClassSecondPart(
                          e.target.value,
                          addSeries.school_class
                        )
                      }
                    >
                      <MenuItem value={'A'}> A </MenuItem>
                      <MenuItem value={'B'}> B </MenuItem>
                      <MenuItem value={'C'}> C </MenuItem>
                    </Select>
                  </FormControl>
                </li>
              </Ul>

              <Ul>
                <li>
                  <TextField
                    label="Disciplina"
                    type="text"
                    value={addSeries.school_subjects}
                    className="color"
                    onChange={e =>
                      setAddSeries({
                        ...addSeries,
                        school_subjects: e.target.value
                      })
                    }
                  />
                </li>
              </Ul>
            </>
          )}
          {settingData.isUpdate && (
            <>
              <Button
                onClick={() => {
                  handleClose()
                }}
              >
                Cancelar
              </Button>

              <Button
                onClick={() => {
                  PUTSerie(dataSeries.id)
                  handleClose()
                }}
              >
                Salvar
              </Button>
            </>
          )}

          {settingData.isCreate && (
            <>
              <Button
                onClick={() => {
                  handleClose()
                }}
              >
                Cancelar
              </Button>

              <Button
                onClick={() => {
                  POSTCreateSeries(dataSeries.id)
                  setAddSeries({
                    school_class: ' ',
                    school_subjects: ' '
                  })
                  handleClose()
                }}
                disabled={
                  !(
                    addSeries.school_class.length > 6 &&
                    addSeries.school_subjects !== ' '
                  )
                }
              >
                Criar
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

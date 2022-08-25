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
  Tooltip
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'

import { UlHeader } from '../../../Header/styled'
import { apiEscola } from '../../../../services/api'

export function UpdateClass() {
  const [show, setShow] = useState(false)
  const [dataSeries, setDataSeries] = useState({
    id: null,
    fullname: '',
    school_class: [],
    school_subjects: [{ ano: '', turma: '' }]
  })
  const [settingData, setSettingData] = useState({
    isCreate: false,
    isUpdate: false
  })
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
  }, [])

  const handleClose = () => {
    setShow(false)
    setSettingData({ ...settingData, isCreate: false, isUpdate: false })
  }

  const findSeries = id => {
    setDataSeries(teacherData.find(sala => sala.id === id))
  }

  const deleteSerie = turma => {
    const removedClass = dataSeries?.school_subjects?.filter(
      remove => remove !== turma
    )

    setDataSeries({ ...dataSeries, school_class: removedClass })
  }

  // const createSerie = () => {}

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
            {teacherData?.map(teacher => (
              <TableRow key={teacher.id}>
                <TableCell align="center">{teacher.surname}</TableCell>

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
                  <Tooltip title="adicionar">
                    <Fab
                      size="small"
                      color="primary"
                      aria-label="add"
                      onClick={() => {
                        setShow(true)
                        setSettingData({ ...settingData, isCreate: true })
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
              {dataSeries.school_subjects?.map((serie, index) => (
                <UlHeader key={index}>
                  <li>
                    <FormControl>
                      <InputLabel className="color">Serie/Ano:</InputLabel>

                      <Select
                        className="width-small color"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={
                          serie?.split(' ')[0] + ' ' + serie?.split(' ')[1]
                        }
                        // onChange={handleChangeSeries}
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
                      <InputLabel className="color">Turma:</InputLabel>

                      <Select
                        className="width-small color"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={serie?.split(' ')[2]}
                        // onChange={handleChangeClass}
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
                      Remover turma{' '}
                    </Button>
                  )}
                </UlHeader>
              ))}
            </>
          )}

          {settingData.isCreate && (
            <>
              <UlHeader>
                <li>
                  <FormControl>
                    <InputLabel className="color">Serie/Ano:</InputLabel>

                    <Select
                      className="width-small color"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // onChange={handleChangeSeries}
                    >
                      <MenuItem value={1}> 1º Ano </MenuItem>
                      <MenuItem value={2}> 2º Ano </MenuItem>
                      <MenuItem value={3}> 3º Ano </MenuItem>
                      <MenuItem value={4}> 4º Ano </MenuItem>
                      <MenuItem value={5}> 5º Ano </MenuItem>
                      <MenuItem value={6}> 6º Ano </MenuItem>
                      <MenuItem value={7}> 7º Ano </MenuItem>
                      <MenuItem value={8}> 8º Ano </MenuItem>
                      <MenuItem value={9}> 9º Ano </MenuItem>
                      <MenuItem value={10}> 1ª Serie </MenuItem>
                      <MenuItem value={11}> 2º Serie </MenuItem>
                      <MenuItem value={12}> 3º Serie </MenuItem>
                    </Select>
                  </FormControl>
                </li>

                <li>
                  <FormControl>
                    <InputLabel className="color">Turma:</InputLabel>

                    <Select
                      className="width-small color"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // onChange={handleChangeClass}
                    >
                      <MenuItem value="A"> A </MenuItem>
                      <MenuItem value="B"> B </MenuItem>
                      <MenuItem value="C"> C </MenuItem>
                    </Select>
                  </FormControl>
                </li>
              </UlHeader>
            </>
          )}

          <Button
            onClick={() => {
              handleClose()
            }}
          >
            Cancelar
          </Button>

          <Button onClick={handleClose}>Salvar</Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

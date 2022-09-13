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
import EditIcon from '@material-ui/icons/Edit'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { UseTeacher } from '../../../../hooks/TeacherContext'
import { apiEscola } from '../../../../services/api'
import { Content } from '../../../Content'

const initialValues = {
  fullname: '',
  surname: '',
  email: ' ',
  telephone: '',
  zip_code: '',
  street: '',
  house_number: '',
  complement: '',
  city: '',
  district: '',
  state: '',
  titles: ''
}

const validation = Yup.object().shape({
  fullname: Yup.string(),
  surname: Yup.string(),
  email: Yup.string().email(),
  telephone: Yup.string(),
  zip_code: Yup.number().min(
    8,
    'o cep possui oito dígitos, apenas números sem pontos e -'
  ),
  street: Yup.string(),
  house_number: Yup.number(),
  complement: Yup.string(),
  city: Yup.string(),
  district: Yup.string(),
  state: Yup.string(),
  titles: Yup.string()
})

export function UpdateData() {
  const { teachersData, setTeachersData } = UseTeacher()
  const [reload, setReload] = useState(false)
  const [show, setShow] = useState(false)
  const [errorCep, setErrorCep] = useState(false)
  const [teacherInfo, setTeacherInfo] = useState({
    id: null,
    fullname: '',
    surname: '',
    email: '',
    telephone: '',
    graduation_titles: '',
    zip_code: '',
    house_number: '',
    complement: ''
  })

  const formik = useFormik({
    initialValues,
    validationSchema: validation
  })

  const CompleteFields = data => {
    formik.setFieldValue('fullname', data.fullname)
    formik.setFieldValue('surname', data.surname)
    formik.setFieldValue('email', data.email)
    formik.setFieldValue('telephone', data.telephone)
    formik.setFieldValue('zip_code', data.address.zip_code)
    formik.setFieldValue('house_number', data.address.house_number)
    formik.setFieldValue('complement', data.address.complement)
    formik.setFieldValue('title', data.graduation_titles)
  }

  const updateTechaerData = async id => {
    try {
      const { status } = await toast.promise(
        apiEscola.put(
          `teacher/${id}`,
          {
            fullname: formik.values.fullname,
            surname: formik.values.surname,
            email: formik.values.email,
            telephone: formik.values.telephone,
            graduation_titles: formik.values.titles
          },
          {
            validateStatus: () => true
          }
        ),
        { pending: 'Atualizando dados do Usuário 📖' }
      )

      await apiEscola.put(`address/${teacherInfo.cpf}`, {
        zip_code: formik.values.zip_code,
        city: formik.values.city,
        complement: formik.values.complement,
        district: formik.values.district,
        house_number: formik.values.house_number,
        state: formik.values.state,
        street: formik.values.street
      })

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

  const validadeCEP = event => {
    if (event.target.value.length !== 8) {
      setErrorCep(true)
    } else {
      setErrorCep(false)
      cepApi(event.target.value)
    }
  }

  const cepApi = cep => {
    fetch(`https://ws.apicep.com/cep/${cep}.json`)
      .then(data => data.json())
      .then(data => {
        formik.setFieldValue('street', data.address)
        formik.setFieldValue('city', data.city)
        formik.setFieldValue('district', data.district)
        formik.setFieldValue('state', data.state)
      })
  }

  useEffect(() => {
    getTeachersData()
  }, [reload])

  const handleClose = () => {
    setShow(false)
  }

  const findTeacher = id => {
    setTeacherInfo(teachersData.find(sala => sala.id === id))
    CompleteFields(teachersData.find(sala => sala.id === id))
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
                        findTeacher(teacher.id)
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
          <Content>
            <TextField
              label="Nome completo:"
              id="fullname"
              variant="outlined"
              fullWidth
              autoComplete={false}
              className="color"
              {...formik.getFieldProps('fullname')}
            />

            {formik.errors.fullname && formik.touched.fullname ? (
              <span>{formik.errors.fullname}</span>
            ) : null}
          </Content>

          <Content>
            <TextField
              label="Nome Social:"
              id="surname"
              variant="outlined"
              autoComplete={false}
              fullWidth
              className="color"
              {...formik.getFieldProps('surname')}
            />

            {formik.errors.surname && formik.touched.surname ? (
              <span>{formik.errors.surname}</span>
            ) : null}
          </Content>

          <Content>
            <TextField
              label="E-mail:"
              id="email"
              variant="outlined"
              type="email"
              autoComplete={false}
              fullWidth
              className="color"
              {...formik.getFieldProps('email')}
            />

            {formik.errors.email && formik.touched.email ? (
              <span>{formik.errors.email}</span>
            ) : null}
          </Content>

          <Content>
            <TextField
              label="Celular"
              id="telephone"
              variant="outlined"
              type="tel"
              autoComplete={false}
              fullWidth
              className="color"
              {...formik.getFieldProps('telephone')}
            />

            {formik.errors.telephone && formik.touched.telephone ? (
              <span>{formik.errors.telephone}</span>
            ) : null}
          </Content>

          <Content>
            <FormControl
              variant="outlined"
              style={{ width: '100%', color: '#fff' }}
            >
              <InputLabel htmlFor="gener">Títulos:</InputLabel>
              <Select
                label="Títulos"
                labelId="titles"
                id="titles"
                autoComplete={false}
                className="color"
                {...formik.getFieldProps('titles')}
              >
                <MenuItem value="licensed">Licenciado(a)</MenuItem>
                <MenuItem value="specialist">Especialista</MenuItem>
                <MenuItem value="mestre">Mestre</MenuItem>
                <MenuItem value="doctor">Doutor(a)</MenuItem>
              </Select>
            </FormControl>
            {formik.errors.titles && formik.touched.titles ? (
              <span>{formik.errors.titles}</span>
            ) : null}
          </Content>

          <Content>
            <Content>
              <TextField
                label="CEP:"
                id="zip_code"
                variant="outlined"
                type="text"
                value={formik.values.zip_code}
                fullWidth
                className="color"
                onChange={event => {
                  validadeCEP(event)
                  formik.setFieldValue('zip_code', event.target.value)
                }}
              />

              {formik.errors.zip_code && formik.touched.zip_code ? (
                <span>{formik.errors.zip_code}</span>
              ) : null}
              {errorCep && <span>CEp inválido</span>}
            </Content>

            <TextField
              label="Complemento:"
              id="complement"
              variant="outlined"
              type="text"
              fullWidth
              className="color"
              {...formik.getFieldProps('complement')}
            />

            {formik.errors.complement && formik.touched.complement ? (
              <span>{formik.errors.complement}</span>
            ) : null}

            <Content>
              <TextField
                label="Número:"
                id="house_number"
                variant="outlined"
                type="text"
                fullWidth
                className="color"
                {...formik.getFieldProps('house_number')}
              />

              {formik.errors.house_number && formik.touched.house_number ? (
                <span>{formik.errors.house_number}</span>
              ) : null}
            </Content>
          </Content>

          <Button onClick={handleClose}>Cancelar</Button>

          <Button
            onClick={() => {
              handleClose()
              updateTechaerData(teacherInfo.id)
            }}
          >
            Salvar
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

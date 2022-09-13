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
  TextField,
  Tooltip
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { UseParent } from '../../../../hooks/ParentsContext'
import { UseStudent } from '../../../../hooks/StudentsContext'
import { apiEscola } from '../../../../services/api'
import { Content } from '../../../Content'

const initialValues = {
  responsible_1: '',
  responsible_2: '',
  email: ' ',
  telephone_1: '',
  telephone_2: '',
  cpf_2: '',
  dependents: '',
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
  responsible_1: Yup.string(),
  responsible_2: Yup.string(),
  email: Yup.string().email(),
  cpf_2: Yup.string(),
  telephone_1: Yup.string(),
  telephone_2: Yup.string(),
  dependents: Yup.string(),
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
  const [reload, setReload] = useState(false)
  const { studentsData, setStudentsData } = UseStudent()
  const { parentsData, setParentsData } = UseParent()
  const [show, setShow] = useState(false)
  const [errorCep, setErrorCep] = useState(false)
  const [parentInfo, setParentInfo] = useState({
    id: null,
    responsible_1: '',
    responsible_2: '',
    email: ' ',
    cpf_2: '',
    telephone_1: '',
    telephone_2: '',
    dependents: '',
    zip_code: '',
    street: '',
    house_number: '',
    complement: '',
    city: '',
    district: '',
    state: ''
  })

  const formik = useFormik({
    initialValues,
    validationSchema: validation
  })

  const CompleteFields = (data, dataStudent) => {
    formik.setFieldValue('responsible_1', data.responsible_1)
    formik.setFieldValue('responsible_2', data.responsible_2)
    formik.setFieldValue('email', data.email)
    formik.setFieldValue('cpf_2', data.cpf_2)
    formik.setFieldValue('telephone_1', data.telephone_1)
    formik.setFieldValue('telephone_2', data.telephone_2)
    formik.setFieldValue('dependents', dataStudent.name)
    formik.setFieldValue('zip_code', data.address.zip_code)
    formik.setFieldValue('house_number', data.address.house_number)
    formik.setFieldValue('complement', data.address.complement)
  }

  const updateResponsiblesData = async (id, idStudent) => {
    const filterStudents = studentsData?.filter(
      student => student.responsible_id === idStudent
    )
    try {
      const { status } = await toast.promise(
        apiEscola.put(
          `user/${id}`,
          {
            responsible_1: formik.values.responsible_1,
            responsible_2: formik.values.responsible_2,
            email: formik.values.email,
            cpf_2: formik.values.cpf_2,
            telephone_1: formik.values.telephone_1,
            telephone_2: formik.values.telephone_2
          },
          {
            validateStatus: () => true
          }
        ),
        { pending: 'Atualizando dados do Usuário 📖' }
      )

      await apiEscola.put(`address/${parentInfo.cpf_1}`, {
        zip_code: formik.values.zip_code,
        city: formik.values.city,
        complement: formik.values.complement,
        district: formik.values.district,
        house_number: formik.values.house_number,
        state: formik.values.state,
        street: formik.values.street
      })

      // quando vier mais de um acredito que vamos precisar usar um for
      await apiEscola.put(`student/${filterStudents[0]?.id}`, {
        name: formik.values.dependents
      })

      if (status === 201) {
        toast.success('Dados atualizados com sucesso 📗')

        setReload(t => !t)
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error('Falha no sistema! Tente novamente 🤷‍♂️')
    }
  }

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
    getParentsData()
  }, [reload])

  const handleClose = () => {
    setShow(false)
  }

  const findParent = (id, idStudent) => {
    setParentInfo(parentsData.find(parent => parent.id === id))
    CompleteFields(
      parentsData.find(parent => parent.id === id),
      studentsData.find(item => item.responsible_id === idStudent)
    )
  }

  // const createSerie = () => {}

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="responsibles">
          <TableHead>
            <TableRow>
              <TableCell>Responsável 1</TableCell>
              <TableCell>CPF</TableCell>
              <TableCell>Celular</TableCell>

              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {parentsData?.map(parent => (
              <TableRow key={parent.id}>
                <TableCell>{parent.responsible_1}</TableCell>
                <TableCell>{parent.cpf_1}</TableCell>
                <TableCell>{parent.telephone_1}</TableCell>

                <TableCell>
                  <Tooltip title="editar">
                    <Fab
                      size="small"
                      color="secondary"
                      aria-label="edit"
                      onClick={() => {
                        setShow(true)
                        findParent(parent.id, parent.email)
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
              label="Responsável 1:"
              id="responsible_1"
              variant="outlined"
              fullWidth
              className="color"
              {...formik.getFieldProps('responsible_1')}
            />

            {formik.errors.responsible_1 && formik.touched.responsible_1 ? (
              <span>{formik.errors.responsible_1}</span>
            ) : null}
          </Content>

          <Content>
            <TextField
              label="Responsável 2:"
              id="responsible_2"
              variant="outlined"
              fullWidth
              className="color"
              {...formik.getFieldProps('responsible_2')}
            />

            {formik.errors.responsible_2 && formik.touched.responsible_2 ? (
              <span>{formik.errors.responsible_2}</span>
            ) : null}
          </Content>

          <Content>
            <TextField
              label="E-mail:"
              id="email"
              variant="outlined"
              type="email"
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
              label="Celular Responsável 1"
              id="telephone_1"
              variant="outlined"
              fullWidth
              className="color"
              {...formik.getFieldProps('telephone_1')}
            />

            {formik.errors.telephone_1 && formik.touched.telephone_1 ? (
              <span>{formik.errors.telephone_1}</span>
            ) : null}
          </Content>

          <Content>
            <TextField
              label="Celular Responsável 2"
              id="telephone_2"
              variant="outlined"
              fullWidth
              className="color"
              {...formik.getFieldProps('telephone_2')}
            />

            {formik.errors.telephone_2 && formik.touched.telephone_2 ? (
              <span>{formik.errors.telephone_2}</span>
            ) : null}
          </Content>

          <Content>
            <TextField
              label="Dependente"
              id="dependet"
              variant="outlined"
              fullWidth
              className="color"
              {...formik.getFieldProps('dependents')}
            />

            {formik.errors.dependents && formik.touched.dependents ? (
              <span>{formik.errors.dependents}</span>
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
              updateResponsiblesData(parentInfo.id, parentInfo.email)
            }}
          >
            Salvar
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

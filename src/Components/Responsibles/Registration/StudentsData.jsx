import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField
} from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import PropTypes from 'prop-types'

import { apiEscola } from '../../../services/api'
import ButtonBack from '../../ButtonBack'
import Button from '../../ButtonProceed'
import { Content } from '../../Content'
import { ContainerStudant } from '../styles'

export function StudentsData({ formik }) {
  const history = useHistory()
  const [open, setOpen] = useState(false)

  const time = 1000

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const handleChangeClass = event => {
    formik.setFieldValue('scholl_class_student', event.target.value)
  }

  const handleChangeSeries = event => {
    formik.setFieldValue('scholl_year_student', event.target.value)
  }

  const createUser = async () => {
    try {
      await apiEscola.post('/user', {
        responsible_1: formik.values.responsible_1,
        email: formik.values.email,
        kinshi_1: formik.values.kinshi_1,
        cpf_1: formik.values.cpf_1,
        telephone_1: formik.values.telephone_1,
        birthdate: '19/09/1994',
        responsible_2: formik.values.responsible_2,
        kinshi_2: formik.values.kinshi_2,
        cpf_2: formik.values.cpf_2,
        telephone_2: formik.values.telephone_2,
        password: '12345678'
      })

      setOpen(true)
      setTimeout(() => {
        history.push('/parentes')
      }, time)
    } catch (error) {
      console.log(error, formik.values.cpf_1)
    }
  }

  const createAddressUser = async () => {
    try {
      await apiEscola.post('/address', {
        id: formik.values.cpf_1,
        zip_code: formik.values.zipCode,
        street: formik.values.street,
        house_number: formik.values.housenumber,
        complement: formik.values.complement,
        city: formik.values.city,
        district: formik.values.district,
        state: formik.values.state
      })
    } catch (error) {
      console.log(error)
    }
  }

  const RegistrationFinish = async () => {
    await Promise.all([createAddressUser(), createUser()])
  }

  return (
    <>
      <Content>
        <TextField
          label="Nome completo do(a) Estudante:"
          id="name_student"
          variant="outlined"
          type="text"
          autoComplete={false}
          fullWidth
          required
          {...formik.getFieldProps('name')}
        />

        {formik.errors.name_student && formik.touched.name_student ? (
          <span>{formik.errors.name_student}</span>
        ) : null}
      </Content>

      <ContainerStudant>
        <Content>
          <FormControl>
            <InputLabel className="color" style={{ paddingLeft: '15px' }}>
              Serie/Ano:
            </InputLabel>

            <Select
              className="width-small color"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              variant="outlined"
              style={{ width: '170px' }}
              onChange={handleChangeSeries}
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
          {formik.errors.scholl_year_student &&
          formik.touched.scholl_year_student ? (
            <span>{formik.errors.scholl_year_student}</span>
          ) : null}
        </Content>

        <Content>
          <FormControl>
            <InputLabel className="color" style={{ paddingLeft: '15px' }}>
              Turma:
            </InputLabel>

            <Select
              className="width-small color"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              variant="outlined"
              style={{ width: '170px' }}
              onChange={handleChangeClass}
            >
              <MenuItem value="a"> A </MenuItem>
              <MenuItem value="b"> B </MenuItem>
              <MenuItem value="c"> C </MenuItem>
            </Select>
          </FormControl>

          {formik.errors.scholl_Class_student &&
          formik.touched.scholl_Class_student ? (
            <span>{formik.errors.scholl_Class_student}</span>
          ) : null}
        </Content>

        <Content>
          <TextField
            label="Data de aniversário:"
            id="birthdate_student"
            variant="outlined"
            type="date"
            InputLabelProps={{
              shrink: true
            }}
            required
            {...formik.getFieldProps('birthdate_student')}
          />

          {formik.errors.birthdate_student &&
          formik.touched.birthdate_student ? (
            <span>{formik.errors.birthdate_student}</span>
          ) : null}
        </Content>
      </ContainerStudant>

      <Button
        onClick={() => {
          RegistrationFinish()
        }}
        disabled={!(formik.values.name && formik.values.birthdate_student)}
      >
        Finalizar Cadastro
      </Button>

      <ButtonBack
        onClick={() => {
          formik.setValues()
          history.push('/parentes')
        }}
      >
        cancelar
      </ButtonBack>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          style={{ backgroundColor: ' #4caf50', color: 'white' }}
        >
          Cadastro dos responsáveis e aluno(s) Finalizados.
        </Alert>
      </Snackbar>
    </>
  )
}

StudentsData.propTypes = {
  formik: PropTypes.any
}

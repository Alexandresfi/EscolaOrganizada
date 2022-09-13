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
          setOpen(true)
          console.log(formik.values)
          setTimeout(() => {
            history.push('/home')
          }, time)
        }}
        disabled={!(formik.values.name && formik.values.birthdate_student)}
      >
        Finalizar Cadastro
      </Button>

      <ButtonBack
        onClick={() => {
          formik.setValues()
          history.push('/home')
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

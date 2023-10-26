import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { TextField } from '@material-ui/core'
import { validate } from 'gerador-validador-cpf'
import PropTypes from 'prop-types'

import { phoneMask } from '../../../utils/maskCellPhone'
import { cpfMask } from '../../../utils/maskCpf'
import ButtonBack from '../../ButtonBack'
import Button from '../../ButtonProceed'
import { Content } from '../../Content'

export function PersonDataParents({ formik, updatePageProgress }) {
  const history = useHistory()
  const [errorCpf1, setErrorCpf1] = useState(true)
  const [errorCpf2, setErrorCpf2] = useState(true)

  function handleChance1(value) {
    formik.setFieldValue('telephone_1', phoneMask(value))
  }

  function handleChance2(value) {
    formik.setFieldValue('telephone_2', phoneMask(value))
  }

  function handleCpf1(value) {
    formik.setFieldValue('cpf_1', cpfMask(value))
    setErrorCpf1(validate(value))
  }

  function handleCpf2(value) {
    formik.setFieldValue('cpf_2', cpfMask(value))
    setErrorCpf2(validate(value))
  }

  return (
    <>
      <Content>
        <TextField
          label="Nome completo do(a) responsável principal:"
          id="fullname_1"
          variant="outlined"
          fullWidth
          required
          autoComplete={false}
          {...formik.getFieldProps('responsible_1')}
        />

        {formik.errors.responsible_1 && formik.touched.responsible_1 ? (
          <span>{formik.errors.responsible_1}</span>
        ) : null}
      </Content>

      <Content>
        <TextField
          label="CPF do(a) responsável principal:"
          id="cpf_1"
          variant="outlined"
          value={formik.values.cpf_1}
          fullWidth
          required
          autoComplete={false}
          onChange={event => {
            handleCpf1(event.target.value)
          }}
        />

        {formik.errors.cpf_1 && formik.touched.cpf_1 ? (
          <span>{formik.errors.cpf_1}</span>
        ) : null}
        {!errorCpf1 && (
          <span style={{ color: '#ff0000', fontSize: '0.75rem' }}>
            {' '}
            CPF inválido
          </span>
        )}
      </Content>

      <Content>
        <TextField
          label="Parentesco do responsável principal:"
          id="surname_1"
          variant="outlined"
          autoComplete={false}
          fullWidth
          required
          {...formik.getFieldProps('kinshi_1')}
        />

        {formik.errors.kinshi_1 && formik.touched.kinshi_1 ? (
          <span>{formik.errors.kinshi_1}</span>
        ) : null}
      </Content>

      <Content>
        <TextField
          label="Nome completo do(a) responsável segundário:"
          id="fullname_2"
          variant="outlined"
          fullWidth
          required
          autoComplete={false}
          {...formik.getFieldProps('responsible_2')}
        />

        {formik.errors.responsible_2 && formik.touched.responsible_2 ? (
          <span>{formik.errors.responsible_2}</span>
        ) : null}
      </Content>

      <Content>
        <TextField
          label="CPF do(a) responsável segundário:"
          id="cpf_2"
          variant="outlined"
          value={formik.values.cepf_2}
          fullWidth
          required
          autoComplete={false}
          onChange={event => {
            handleCpf2(event.target.value)
          }}
        />

        {formik.errors.cpf_2 && formik.touched.cpf_2 ? (
          <span>{formik.errors.cpf_2}</span>
        ) : null}
        {!errorCpf2 && (
          <span style={{ color: '#ff0000', fontSize: '0.75rem' }}>
            {' '}
            CPF inválido
          </span>
        )}
      </Content>

      <Content>
        <TextField
          label="Parentesco responsável segundário:"
          id="surname_2"
          variant="outlined"
          autoComplete={false}
          fullWidth
          required
          {...formik.getFieldProps('kinshi_2')}
        />

        {formik.errors.kinshi_2 && formik.touched.kinshi_2 ? (
          <span>{formik.errors.kinshi_2}</span>
        ) : null}
      </Content>

      <Content>
        <TextField
          label="Celular responsável principal"
          id="telephone_1"
          variant="outlined"
          value={formik.values.telephone_1}
          type="text"
          autoComplete={false}
          onChange={e => {
            handleChance1(e.target.value)
          }}
          fullWidth
          required
        />

        {formik.errors.telephone_1 && formik.touched.telephone_1 ? (
          <span>{formik.errors.telephone_1}</span>
        ) : null}
      </Content>

      <Content>
        <TextField
          label="Celular de um segundo responsável"
          id="telephone_2"
          variant="outlined"
          value={formik.values.telephone_2}
          type="text"
          autoComplete={false}
          onChange={e => {
            handleChance2(e.target.value)
          }}
          fullWidth
          required
        />

        {formik.errors.telephone_2 && formik.touched.telephone_2 ? (
          <span>{formik.errors.telephone_2}</span>
        ) : null}
      </Content>

      <Content>
        <TextField
          label="E-mail responsável principal:"
          id="email"
          variant="outlined"
          type="email"
          autoComplete={false}
          fullWidth
          required
          {...formik.getFieldProps('email')}
        />

        {formik.errors.email && formik.touched.email ? (
          <span>{formik.errors.email}</span>
        ) : null}
      </Content>

      <Content>
        <TextField
          label="Data de aniversário:"
          id="birthdate"
          type="date"
          variant="outlined"
          required
          autoComplete={false}
          InputLabelProps={{
            shrink: true
          }}
          {...formik.getFieldProps('birthdate')}
        />
        {formik.errors.birthdate && formik.touched.birthdate ? (
          <span>{formik.errors.birthdate}</span>
        ) : null}
      </Content>

      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          updatePageProgress(1, 50)
          console.log(formik.values.telephone_1)
        }}
        disabled={
          !(
            formik.values.responsible_1 &&
            errorCpf1 &&
            errorCpf2 &&
            formik.values.kinshi_1 &&
            formik.values.responsible_2 &&
            formik.values.kinshi_2 &&
            formik.values.telephone_1 &&
            formik.values.telephone_2 &&
            formik.values.email &&
            formik.values.birthdate &&
            !formik.errors.email
          )
        }
      >
        Avançar
      </Button>

      <ButtonBack
        onClick={() => {
          history.goBack()
        }}
      >
        cancelar
      </ButtonBack>
    </>
  )
}

PersonDataParents.propTypes = {
  formik: PropTypes.any,
  updatePageProgress: PropTypes.func.isRequired
}

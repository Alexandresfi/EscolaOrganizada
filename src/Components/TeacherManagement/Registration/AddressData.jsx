import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'

import ButtonBack from '../../ButtonBack'
import Button from '../../ButtonProceed'
import { Content } from '../../Content'

export function AddressData({ formik, updatePageProgress }) {
  const [errorCep, setErrorCep] = useState(false)
  const history = useHistory()

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

  return (
    <>
      <Content>
        <TextField
          label="CEP:"
          id="zipCode"
          variant="outlined"
          type="text"
          autoComplete={false}
          fullWidth
          required
          onChange={event => {
            validadeCEP(event)
            formik.setFieldValue('zipCode', event.target.value)
          }}
        />

        {formik.errors.zipCode && formik.touched.zipCode ? (
          <span>{formik.errors.zipCode}</span>
        ) : null}
        {errorCep && <span>CEp inválido</span>}
      </Content>

      <Content>
        <TextField
          label="Rua:"
          id="street"
          variant="outlined"
          type="text"
          fullWidth
          required
          {...formik.getFieldProps('street')}
        />

        {formik.errors.street && formik.touched.street ? (
          <span>{formik.errors.street}</span>
        ) : null}
      </Content>

      <Content>
        <TextField
          label="Número:"
          id="housenumber"
          variant="outlined"
          type="text"
          fullWidth
          required
          {...formik.getFieldProps('housenumber')}
        />

        {formik.errors.housenumber && formik.touched.housenumber ? (
          <span>{formik.errors.housenumber}</span>
        ) : null}
      </Content>

      <Content>
        <TextField
          label="Complemento:"
          id="complement"
          variant="outlined"
          type="text"
          fullWidth
          required
          {...formik.getFieldProps('complement')}
        />

        {formik.errors.complement && formik.touched.complement ? (
          <span>{formik.errors.complement}</span>
        ) : null}
      </Content>

      <Content>
        <TextField
          label="Cidade:"
          id="city"
          variant="outlined"
          type="text"
          fullWidth
          required
          {...formik.getFieldProps('city')}
        />

        {formik.errors.city && formik.touched.city ? (
          <span>{formik.errors.city}</span>
        ) : null}
      </Content>

      <Content>
        <TextField
          label="Bairro:"
          id="district"
          variant="outlined"
          type="text"
          fullWidth
          required
          {...formik.getFieldProps('district')}
        />

        {formik.errors.district && formik.touched.district ? (
          <span>{formik.errors.district}</span>
        ) : null}
      </Content>

      <Content>
        <TextField
          label="Estado:"
          id="state"
          variant="outlined"
          type="text"
          fullWidth
          required
          {...formik.getFieldProps('state')}
        />

        {formik.errors.state && formik.touched.state ? (
          <span>{formik.errors.state}</span>
        ) : null}
      </Content>

      <Button
        onClick={() => updatePageProgress(2, 100)}
        disabled={
          !(
            !formik.values.address &&
            formik.values.complement &&
            formik.values.housenumber &&
            formik.values.district &&
            formik.values.city &&
            formik.values.state
          )
        }
      >
        Avançar
      </Button>

      <ButtonBack
        onClick={() => {
          formik.setValues()
          history.push('/home')
        }}
      >
        cancelar
      </ButtonBack>
    </>
  )
}

AddressData.propTypes = {
  formik: PropTypes.any,
  updatePageProgress: PropTypes.func.isRequired
}

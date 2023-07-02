import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import PropTypes from 'prop-types'

import { ButtonHearder, LiMobile, Menumobile } from './styled'

export function MenuMobile({ menu }) {
  const [typeAccess, setTypeAccess] = useState('')
  const [series, setSeries] = useState(null)
  const [schoolClass, setSchoolClass] = useState('')

  const handleChangeAccess = event => {
    setTypeAccess(event.target.value)
  }

  const handleChangeClass = event => {
    setSchoolClass(event.target.value)
  }

  const handleChangeSeries = event => {
    setSeries(event.target.value)
  }
  return (
    <Menumobile Menu={menu}>
      <nav>
        <ul>
          <LiMobile>
            <FormControl>
              <InputLabel className="color" style={{ color: '#fff' }}>
                Tipo de Acesso:
              </InputLabel>

              <Select
                style={{ color: '#fff' }}
                className="width-select color"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={typeAccess}
                onChange={handleChangeAccess}
              >
                <MenuItem value="teacher"> Professor(a) </MenuItem>
                <MenuItem value="admin"> Secretária </MenuItem>
                <MenuItem value="parents"> Responsáveis </MenuItem>
              </Select>
            </FormControl>
          </LiMobile>

          <LiMobile>
            <FormControl>
              <InputLabel style={{ color: '#fff' }}>Serie/Ano:</InputLabel>

              <Select
                style={{ color: '#fff' }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={series}
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
          </LiMobile>

          <LiMobile>
            <FormControl>
              <InputLabel style={{ color: '#fff' }}>Turma:</InputLabel>

              <Select
                style={{ color: '#fff' }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={schoolClass}
                onChange={handleChangeClass}
              >
                <MenuItem value="a"> A </MenuItem>
                <MenuItem value="b"> B </MenuItem>
                <MenuItem value="c"> C </MenuItem>
              </Select>
            </FormControl>
          </LiMobile>

          <LiMobile>
            <ButtonHearder>
              <Link to="/">Sair</Link>
            </ButtonHearder>
          </LiMobile>
        </ul>
      </nav>
    </Menumobile>
  )
}

MenuMobile.propTypes = {
  menu: PropTypes.bool
}

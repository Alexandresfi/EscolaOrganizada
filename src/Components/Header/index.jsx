import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'

import LogoImg from '../../assects/Logo.png'
import { TitleDefaults } from '../TitleDefault'
import { MenuMobile } from './MenuMobile'
import { ButtonHearder, ButtonMobile, Container, UlHeader } from './styled'

export function Header() {
  const [series, setSeries] = useState(null)
  const [schoolClass, setSchoolClass] = useState('')
  const [cssMobile, setCssMobile] = useState(false)

  const handleChangeClass = event => {
    setSchoolClass(event.target.value)
  }

  const handleChangeSeries = event => {
    setSeries(event.target.value)
  }

  return (
    <>
      <Container>
        <Link to="/home">
          <img src={LogoImg} alt="Logo Escola Organizada" width="200px" />
        </Link>

        <ButtonMobile
          onClick={() => {
            setCssMobile(!cssMobile)
          }}
          menu={cssMobile}
        />

        <UlHeader>
          <li>
            <FormControl>
              <InputLabel className="color">Serie/Ano:</InputLabel>

              <Select
                className="width-small color"
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
          </li>

          <li>
            <FormControl>
              <InputLabel className="color">Turma:</InputLabel>

              <Select
                className="width-small color"
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
          </li>

          <li>
            <ButtonHearder>
              <Link to="/">Sair</Link>
            </ButtonHearder>
          </li>
        </UlHeader>

        <MenuMobile menu={cssMobile} />
      </Container>

      <TitleDefaults />
    </>
  )
}

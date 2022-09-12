import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'

import LogoImg from '../../assects/Logo.png'
import { TitleDefaults } from '../../Components/TitleDefault'
import { MenuMobile } from './MenuMobile'
import { ButtonHearder, ButtonMobile, Container, UlHeader } from './styled'
import { useUser } from '../../hooks/UserContext'

export function Header() {
  const { logout } = useUser()
  const { push } = useHistory()
  const [series, setSeries] = useState(null)
  const [schoolClass, setSchoolClass] = useState('')
  const [cssMobile, setCssMobile] = useState(false)

  const handleChangeClass = event => {
    setSchoolClass(event.target.value)
  }

  const handleChangeSeries = event => {
    setSeries(event.target.value)
  }

  const logoutUser = () => {
    logout()
    push('/')
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
            <ButtonHearder
              onClick={() => {
                logoutUser()
              }}
            >
              Sair
            </ButtonHearder>
          </li>
        </UlHeader>

        <MenuMobile menu={cssMobile} />
      </Container>

      <TitleDefaults />
    </>
  )
}

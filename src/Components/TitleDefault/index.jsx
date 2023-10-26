import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import GithubImg from '../../assects/Github.png'
import LinkdinImg from '../../assects/Linkedin.png'
import { ButtonHearder } from '../../Containers/Header/styled'
import { Container, Content, ContentInferior } from './styles'

export function TitleDefaults() {
  const localidation = useLocation()
  const history = useHistory()

  const [title, setTitle] = useState([])

  useEffect(() => {
    setTitle(JSON.parse(localStorage.getItem('escolaorganizada:userData')))
  }, [localidation?.pathname])

  return (
    <Container>
      <Content>
        <p>
          {title?.type_acess === 'responsible' && 'Responsável: '}{' '}
          {title?.type_acess === 'teacher' &&
            title?.gener === 'masculino' &&
            'Professor: '}{' '}
          {title?.type_acess === 'teacher' &&
            title?.gener === 'feminino' &&
            'Professora: '}{' '}
          {title?.type_acess === 'admin' && 'Admin: '}{' '}
          <span>
            {title.fullname?.split(' ')[0]} {title.fullname?.split(' ')[1]}
            {title.responsible_1?.split(' ')[0]}{' '}
            {title.responsible_1?.split(' ')[1]}
          </span>{' '}
        </p>
      </Content>

      <ContentInferior>
        <li>
          {localidation?.pathname === '/home' && (
            <a href="https://www.linkedin.com/in/alexandre-nascimento-66692920a/">
              <img src={LinkdinImg} alt="Linkedin" />
            </a>
          )}
        </li>

        <li>
          {localidation?.pathname === '/home' && (
            <a href="https://github.com/Alexandresfi">
              <img src={GithubImg} alt="Linkedin" />
            </a>
          )}
        </li>
      </ContentInferior>

      {localidation?.pathname !== '/home' && (
        <ButtonHearder onClick={() => history.goBack()}> Voltar</ButtonHearder>
      )}
    </Container>
  )
}

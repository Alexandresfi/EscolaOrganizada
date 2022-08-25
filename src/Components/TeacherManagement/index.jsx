import React from 'react'
import { Link } from 'react-router-dom'

import AddTeacher from '../../assects/addTeacher.png'
import UpdateTeacher from '../../assects/updateTeacher.png'

import { List, Container } from '../Notas/styles'

export function ContainerTeachers() {
  const infoCards = [
    {
      link: '/teacher/create',
      title: 'Criar ou Remover',
      image: AddTeacher
    },
    {
      link: '/teacher/update',
      title: 'Atualizar',
      image: UpdateTeacher
    }
  ]
  return (
    <nav>
      <List>
        {infoCards?.map((infoCard, index) => (
          <li key={index}>
            <Link to={infoCard.link}>
              <Container>
                <img src={infoCard.image} alt="imagem" />
                <p>{infoCard.title}</p>
              </Container>
            </Link>
          </li>
        ))}
      </List>
    </nav>
  )
}

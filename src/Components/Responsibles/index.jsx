import React from 'react'
import { Link } from 'react-router-dom'

import AddResponsible from '../../assects/addResponsible.png'
import Updateresponsible from '../../assects/updateResponsible.png'

import { List, Container } from '../Notas/styles'

export function ContainerResponsible() {
  const infoCards = [
    {
      link: '/parent/create',
      title: 'Criar ou Remover',
      image: AddResponsible
    },
    {
      link: '/parent/update',
      title: 'Atualizar',
      image: Updateresponsible
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

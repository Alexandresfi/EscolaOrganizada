import React from 'react'
import { Link } from 'react-router-dom'

import { ClassCards } from '../../ClassCards'
import { List } from './styles'

export function Education1() {
  const infoClassCards = [
    {
      link: '/frist-year',
      title: '1º Ano',
      classes: ['a', 'b', 'c', 'd']
    },
    {
      link: '/second-year',
      title: '2º Ano',
      classes: ['a', 'b', 'c', 'd']
    },
    {
      link: '/thirs-year',
      title: '3º Ano',
      classes: ['a', 'b', 'c', 'd']
    },
    {
      link: '/fourth-year',
      title: '4º Ano',
      classes: ['a', 'b', 'c', 'd']
    },
    {
      link: '/fifth-year',
      title: '5º Ano',
      classes: ['a', 'b', 'c', 'd']
    }
  ]

  return (
    <nav>
      <List>
        {infoClassCards?.map((infoCard, index) => (
          <li key={index}>
            <Link to={infoCard.link}>
              <ClassCards
                year={infoCard.title}
                schoolClass={infoCard.classes}
              />
            </Link>
          </li>
        ))}
      </List>
    </nav>
  )
}

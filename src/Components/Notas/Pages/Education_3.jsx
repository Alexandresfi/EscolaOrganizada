import React from 'react'

import { ClassCards } from '../../ClassCards'
import { List } from './styles'

export function Education3() {
  const infoClassCards = [
    {
      // link: '/frist-serie',
      link: '/frist-year',
      title: '1ª Série',
      classes: ['a', 'b', 'c']
    },
    {
      link: '/second-serie',
      title: '2ª Série',
      classes: ['a', 'b']
    },
    {
      link: '/thirs-serie',
      title: '3ª Série',
      classes: ['a', 'b']
    }
  ]
  return (
    <nav>
      <List>
        {infoClassCards?.map((infoCard, index) => (
          <ClassCards
            key={index}
            year={infoCard.title}
            schoolClass={infoCard.classes}
          />
        ))}
      </List>
    </nav>
  )
}

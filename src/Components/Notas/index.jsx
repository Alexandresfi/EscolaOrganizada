import React from 'react'

import Education1 from '../../assects/Education_1.png'
import Education2 from '../../assects/Education_2.png'
import Education3 from '../../assects/Education_3.png'
import CardsInfos from '../CardsInfos'

export function CardNotas() {
  const infoCards = [
    {
      link: '/education-1',
      title: 'Ensino Fundamental 1',
      image: Education1
    },
    {
      link: '/education-2',
      title: 'Ensino Fundamental 2',
      image: Education2
    },
    {
      link: '/education-3',
      title: 'Ensino Médio',
      image: Education3
    }
  ]
  return <CardsInfos infoCards={infoCards} />
}

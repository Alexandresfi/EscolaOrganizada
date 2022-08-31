import React from 'react'

import AddResponsible from '../../assects/addResponsible.png'
import Updateresponsible from '../../assects/updateResponsible.png'
import CardsInfos from '../CardsInfos'

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
  return <CardsInfos infoCards={infoCards} />
}

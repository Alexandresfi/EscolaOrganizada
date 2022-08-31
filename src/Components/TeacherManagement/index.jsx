import React from 'react'

import AddTeacher from '../../assects/addTeacher.png'
import UpdateTeacher from '../../assects/updateTeacher.png'
import CardsInfos from '../CardsInfos'

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
  return <CardsInfos infoCards={infoCards} />
}

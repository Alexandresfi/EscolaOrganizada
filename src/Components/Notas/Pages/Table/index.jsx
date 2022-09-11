import React from 'react'

import PerClass from '../../../../assects/grades-per-classe.png'
import PerQuarter from '../../../../assects/grades-per-quarter.png'
import PerStudent from '../../../../assects/grades-per-students.png'
import CardsInfos from '../../../../Components/CardsInfos'

export function ContainerNotas() {
  let infoCards = [
    {
      link: '/grades/class',
      title: 'Por turmas',
      image: PerClass
    },
    {
      link: '/grades/quarter',
      title: 'Por trimestre',
      image: PerQuarter
    },
    {
      link: '/grades/student',
      title: 'Por estudante',
      image: PerStudent
    }
  ]

  const parents =
    JSON.parse(localStorage.getItem('escolaorganizada:userData')).type_acess ===
    'responsible'

  parents &&
    (infoCards = [
      {
        link: '/grades/student',
        title: 'Por estudante',
        image: PerStudent
      }
    ])

  return <CardsInfos infoCards={infoCards} />
}

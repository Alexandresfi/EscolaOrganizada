import React from 'react'

import ContentReportImg from '../../assects/contentReport.png'
import FrequencyImg from '../../assects/frequencyList.png'
import GradesImg from '../../assects/grades.png'
import ImpressoraImg from '../../assects/impressora.png'
import ParentsImg from '../../assects/parents.png'
import ReportImg from '../../assects/report.png'
import TeacherImg from '../../assects/teacher.png'
import CardsInfos from '../../Components/CardsInfos'

export function Home() {
  const admin =
    JSON.parse(localStorage.getItem('escolaorganizada:userData')).type_acess ===
    'admin'

  let infoCards = [
    {
      link: '/teacher',
      image: TeacherImg,
      title: 'Professores'
    },
    {
      link: '/parentes',
      image: ParentsImg,
      title: 'Responsáveis'
    },
    {
      link: '/grades',
      image: GradesImg,
      title: 'Notas'
    },
    {
      link: '/frequency',
      image: FrequencyImg,
      title: 'Frequência'
    },
    {
      link: '/report',
      image: ReportImg,
      title: 'Relatório Trimestral'
    },
    {
      link: '/content report',
      image: ContentReportImg,
      title: 'Relatório de Conteúdos'
    },
    {
      link: '/impressions',
      image: ImpressoraImg,
      title: 'Impressões'
    }
  ]

  !admin &&
    (infoCards = [
      {
        link: '/grades',
        image: GradesImg,
        title: 'Notas'
      },
      {
        link: '/frequency',
        image: FrequencyImg,
        title: 'Frequência'
      },
      {
        link: '/report',
        image: ReportImg,
        title: 'Relatório Trimestral'
      },
      {
        link: '/content report',
        image: ContentReportImg,
        title: 'Relatório de Conteúdos'
      },
      {
        link: '/impressions',
        image: ImpressoraImg,
        title: 'Impressões'
      }
    ])
  return <CardsInfos infoCards={infoCards} home />
}

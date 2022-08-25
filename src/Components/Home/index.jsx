import React from 'react'
import { Link } from 'react-router-dom'

import ContentReportImg from '../../assects/contentReport.png'
import FrequencyImg from '../../assects/frequencyList.png'
import GradesImg from '../../assects/grades.png'
import ImpressoraImg from '../../assects/impressora.png'
import ParentsImg from '../../assects/parents.png'
import ReportImg from '../../assects/report.png'
import TeacherImg from '../../assects/teacher.png'
import { CardHome } from '../Card'
import { List } from './styles'

export function Home() {
  const infoCards = [
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
  return (
    <nav>
      <List>
        {infoCards?.map((infoCard, index) => (
          <li key={index}>
            <Link to={infoCard.link}>
              <CardHome image={infoCard.image} title={infoCard.title} />
            </Link>
          </li>
        ))}
      </List>
    </nav>
  )
}

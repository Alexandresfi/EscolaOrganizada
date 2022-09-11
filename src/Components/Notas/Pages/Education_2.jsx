import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { UseStudent } from '../../../hooks/StudentsContext'
import { apiEscola } from '../../../services/api'
import { ClassCards } from '../../ClassCards'
import { List } from './styles'

export function Education2() {
  const { studentsData, setStudentsData } = UseStudent()
  let [infoClassCards] = []

  const getStudentsData = async () => {
    try {
      const { status, data } = await toast.promise(apiEscola.get('students'), {
        pending: '🔎 Buscando informações'
      })

      if (status === 200) {
        toast.success('Informações carregadas com sucesso 🔎')
        setStudentsData(data)
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error('Falha no sistema! Tente novamente. 🤷‍♂️')
    }
  }

  useEffect(() => {
    getStudentsData()
  }, [])

  studentsData.map(
    turma =>
      (infoClassCards = [
        {
          link: '/frist-year',
          title: `${turma.year}º ano`,
          classes: [turma.school_class]
        }
      ])
  )

  const recordingLocalStorege = async (year, schoolClass) => {
    await localStorage.setItem(
      'escolaorganizada:filterTurma',
      JSON.stringify({
        year,
        schoolClass
      })
    )
  }

  return (
    <nav>
      <List>
        {infoClassCards?.map((infoCard, index) => (
          <li key={index}>
            <Link
              to={infoCard.link}
              onClick={() =>
                recordingLocalStorege(infoCard.title, infoCard.classes)
              }
            >
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

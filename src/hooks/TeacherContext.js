import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const UserContext = createContext({})

export function TeacherProvider({ children }) {
  const [teachersData, setTeachersData] = useState([])

  console.log(teachersData)
  return (
    <UserContext.Provider value={{ teachersData, setTeachersData }}>
      {children}
    </UserContext.Provider>
  )
}

export function UseTeacher() {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('teacherUser must be used with UserContext')
  }

  return context
}

TeacherProvider.propTypes = {
  children: PropTypes.node
}

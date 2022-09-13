import React, { createContext, useContext, useState } from 'react'

import PropTypes from 'prop-types'

const UserContext = createContext({})

export function StudentProvider({ children }) {
  const [studentsData, setStudentsData] = useState([])

  return (
    <UserContext.Provider value={{ studentsData, setStudentsData }}>
      {children}
    </UserContext.Provider>
  )
}

export function UseStudent() {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('StudentUser must be used with UserContext')
  }

  return context
}

StudentProvider.propTypes = {
  children: PropTypes.node
}
